const Generator = require('yeoman-generator');

module.exports = class Ruby extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: "What is your project's name?",
        validate(projectName) {
          if (!projectName) {
            return 'Project name must be provided';
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: "What is your project's description?",
        validate(projectDescription) {
          if (!projectDescription) {
            return 'Project description must be provided';
          }

          return true;
        },
      },
      {
        type: 'confirm',
        name: 'isPublic',
        message: 'Is this project open source?',
        default: true,
      },
      {
        type: 'input',
        name: 'gitUserName',
        message: 'What is the user name of your git repo?',
        when({ isPublic }) {
          return isPublic;
        },
        validate(gitUserName) {
          if (!gitUserName) {
            return 'Git user name must be provided';
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'gitEmail',
        message: 'Enter the email address associated with your git user name',
        when({ isPublic }) {
          return isPublic;
        },
      },
      {
        type: 'input',
        name: 'entityName',
        message: 'What is the name of the owner/entity who owns this package?',
        when({ isPublic }) {
          return !isPublic;
        },
        validate(entityName) {
          if (!entityName) {
            return 'Owner/Entity name must be provided';
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'contributor1Name',
        message: 'What is the first contributor name?',
        when({ isPublic }) {
          return !isPublic;
        },
        validate(contributor1Name) {
          if (!contributor1Name) {
            return 'Contributor name must be provided';
          }

          return true;
        },
      },
      {
        type: 'input',
        name: 'contributor1Email',
        message: 'Enter the email address of the first contributor',
        when({ isPublic }) {
          return !isPublic;
        },
      },
      {
        type: 'input',
        name: 'gitRepoURL',
        message: "Enter your project's git repository URL",
      },
      {
        type: 'input',
        name: 'projectHomePage',
        message: "Enter your project's homepage URL",
      },
      {
        type: 'input',
        name: 'issueTrackerURL',
        message: "Enter your project's issue tracker URL",
      },
      {
        type: 'list',
        name: 'pkgManager',
        message: 'Which package manager are you using?',
        choices: [
          'npm',
          'yarn',
        ],
        default: 'npm',
      },
    ]);
  }

  writing() {
    const { projectName, pkgManager, isPublic } = this.answers;

    this.destinationRoot(projectName);

    const huskyCmd = pkgManager === 'npm'
      ? 'npm run lint && npm test'
      : 'yarn lint && yarn test';

    this.log();

    this.fs.copyTpl(
      this.templatePath('main/**'),
      this.destinationRoot(),
      { ...this.answers, huskyCmd },
      null,
      { globOptions: { dot: true } },
    );

    this.fs.copyTpl(
      this.templatePath(`custom/${isPublic ? 'mit' : 'private'}.package.json`),
      this.destinationPath('package.json'),
      this.answers,
    );

    this.fs.copyTpl(
      this.templatePath(`custom/${isPublic ? 'MIT' : 'PRIVATE'}LICENSE`),
      this.destinationPath('LICENSE'),
      this.answers,
    );
  }

  install() {
    this.log();

    this.spawnCommandSync('git', ['init']);
  }

  end() {
    const { projectName, pkgManager } = this.answers;

    this.log('\n   change directory:');
    this.log(`     $ cd ${projectName}\n`);

    this.log('   install dependencies:');
    this.log(`     $ ${pkgManager} install\n`);
  }
};
