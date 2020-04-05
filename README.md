# generator-ruby

Opinionated Yeoman generator for Node projects.

This generator composes the following configs:

1. [eslint-config-ruby](https://www.npmjs.com/package/eslint-config-ruby)
2. [jest-preset-ruby](https://www.npmjs.com/package/jest-preset-ruby)
3. [@commitlint/config-angular](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-angular)
4. [husky](https://www.npmjs.com/package/husky) config

# Pre-requisites

1. Install and setup [git](https://git-scm.com/downloads) on your machine (this generator will take care of initializing a git repo)

# Usage

Run the generator

```bash
npx -p yo -p generator-ruby -c 'yo ruby'
```
