# @kelysty/icons &middot; [![npm package](https://img.shields.io/npm/v/@kelysty/icons)](https://www.npmjs.com/package/@kelysty/icons)

## Install

Using `npm`:

```bash
npm install --save-dev @kelysty/icons
```

Using `yarn`:

```bash
yarn add --dev @kelysty/icons
```

## Usage

### ES Module

```js
import {AbbrApi} from '@kelysty/icons';
```

### Common JS

```js
const {AbbrApi} = require('@kelysty/icons');
```

### Default or Named import

Using `default import` from @kelysty/icons/\*componentName

```js
import AbbrApi from '@kelysty/icons/esm/AbbrApi';
// esm: pay attention on .../esm/AbbrApi

const AbbrApi = require('@kelysty/icons/AbbrApi');
// commonjs
```

or using `named import`

```js
import {AbbrApi} from '@kelysty/icons';
// esm

const {AbbrApi} = require('@kelysty/icons');
// commonjs
```

### SVG image

> You might need an appropriate loader for this

```js
import abbrApiIcon from '@kelysty/icons/svgs/abbr-api.svg';
```

## Many Thanks!

Thanks to Yandex LLC and [Gravity UI](https://github.com/gravity-ui)!

This icons library had been created based on Gravity UI pack of icons as a training example. We're going to extend and develop it in the future. Once our icons pack become different enough, we'll remove this statement. But we'll never forget, that this all couldn't've happend without 'big brother' =)

> Yandex, thank you very much!

Have a look at the original [Gravity UI icons pack](https://preview.gravity-ui.com/icons/)
