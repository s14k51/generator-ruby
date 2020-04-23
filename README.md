[![npm package](https://img.shields.io/npm/v/generator-ruby?label=npm%20package)](https://www.npmjs.com/package/generator-ruby)

[![Known Vulnerabilities](https://snyk.io/test/github/s14k51/generator-ruby/badge.svg?targetFile=package.json)](https://snyk.io/test/github/s14k51/generator-ruby?targetFile=package.json)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=alert_status)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=bugs)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=security_rating)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=sqale_index)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=s14k51_generator-ruby&metric=code_smells)](https://sonarcloud.io/dashboard?id=s14k51_generator-ruby)

# generator-ruby

Opinionated Yeoman generator for Node projects.

This generator composes the following configs:

1. [eslint-config-ruby](https://www.npmjs.com/package/eslint-config-ruby)
2. [jest-preset-ruby](https://www.npmjs.com/package/jest-preset-ruby)
3. [commitlint-config-ruby](https://www.npmjs.com/package/commitlint-config-ruby)
4. [husky](https://www.npmjs.com/package/husky) config

# Pre-requisites

1. Install and setup [git](https://git-scm.com/downloads) on your machine (this generator will take care of initializing a git repo)

# Usage

Run the generator

```bash
npx -p yo -p generator-ruby -c 'yo ruby'
```
