# `⇤` unindent

<!-- Uncomment & replace owner/repo. -->

<!-- [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@nrsk/unindent?style=flat-square&colorA=22272d&colorB=22272d&label=minzipped)](https://bundlephobia.com/package/@nrsk/unindent) -->
<!-- ![Tree Shaking](https://img.shields.io/static/v1?label=tree+shaking&message=✔&style=flat-square&colorA=22272d&colorB=22272d) -->

[![Build/Test](https://img.shields.io/github/workflow/status/norskeld/unindent/test?style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/unindent/actions 'Build and test workflows')
[![NPM](https://img.shields.io/npm/v/@nrsk/unindent?style=flat-square&colorA=22272d&colorB=22272d)](https://npm.im/@nrsk/unindent 'This package on NPM')
[![Coverage](https://img.shields.io/coverallsCoverage/github/norskeld/unindent?style=flat-square&colorA=22272d&colorB=22272d)](https://coveralls.io/github/norskeld/unindent 'Test coverage')
[![Supported Node Versions](https://img.shields.io/static/v1?label=node&message=14+|+16+|+18&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/sigma/blob/master/package.json#L35 'Supported Node versions')
[![Semantic Release](https://img.shields.io/static/v1?label=semantic+release&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/semantic-release/semantic-release 'This package uses semantic release to handle releasing, versioning, changelog generation and tagging')
[![Conventional Commits](https://img.shields.io/static/v1?label=conventional+commits&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://conventionalcommits.org 'This package follows the conventional commits spec and guidelines')

Microlibrary for unindenting multiline strings.

## Installation

### Node

Just use your favorite package manager:

```bash
npm i @nrsk/sigma
```

### Deno

You can import the library via [Skypack] (note that `?dts` query parameter, that will pull types as well):

```typescript
import un from 'https://cdn.skypack.dev/@nrsk/unindent?dts'
```

## Usage

This library exposes only one function as the default export, which can be used as a [tagged template][tt], or as ordinary unary function:

```typescript
import un from '@nrsk/unindent'

const x = un`
    Sup!

      - this is indented
      - this is indented too

    This line has the same indentation as the 1st line.
`

// Or...

const x = un(`
    Sup!

      - this is indented
      - this is indented too

    This line has the same indentation as the 1st line.
`)
```

`x` will contain the following (without 4 leading spaces):

```text
Sup!

  - this is indented
  - this is indented too

This line has the same indentation as the 1st line.
```

## License

[MIT](LICENSE).

<!-- Links. -->

[commitlint]: https://github.com/conventional-changelog/commitlint
[semantic-release]: https://semantic-release.gitbook.io/semantic-release
[skypack]: https://skypack.dev
[tt]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
