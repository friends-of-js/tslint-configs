# @friends-of-js/tslint-configs

[![Build Status](https://travis-ci.org/friends-of-js/tslint-configs.svg?branch=master)](https://travis-ci.org/friends-of-js/tslint-configs)
[![Test Coverage](https://api.codeclimate.com/v1/badges/86f943cef7d400ad6b6a/test_coverage)](https://codeclimate.com/github/friends-of-js/tslint-configs/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/86f943cef7d400ad6b6a/maintainability)](https://codeclimate.com/github/friends-of-js/tslint-configs/maintainability)
[![license](https://img.shields.io/github/license/friends-of-js/tslint-configs.svg)](LICENSE)

> Set of sharable tslint configs.

## Install

```sh
yarn add --dev @friends-of-js/tslint-configs
# or
npm install --save-dev @friends-of-js/tslint-configs
```

## Table of Contents

There are 4 types of configs:

1. strict-latest
1. strict
1. standard-latest
1. standard

**_WARNING_**
Prior to version 1.0.0 **_strict_** and **_standard_**
configs can be changed in minor or patch releases!

**_Strict-latest_** and **_standard-latest_** configs are constantly updated,
including minor and patch releases.
**_Strict_** and **_standard_** configs updated only on major release.

Strict configs include all typescript checks,
in contrast to the standards configs,
which almost does not include any checks.

## Usage
Select the appropriate configuration type:

```js
// strict-latest
// tslint.json
{
  "extends": "@friends-of-js/tslint-configs//strict-latest"
}
```

```js
// strict
// tslint.json
{
  "extends": "@friends-of-js/tslint-configs/strict"
}
```

```js
// standard-latest
// tslint.json
{
  "extends": "@friends-of-js/tslint-configs/standard-latest"
}
```

```js
// standard
// tslint.json
{
  "extends": "@friends-of-js/tslint-configs/standard"
}
```

## License

@friends-of-js/tslint-configs © [Dmitriy Romanov](https://github.com/noldors),
released under the MIT License.
