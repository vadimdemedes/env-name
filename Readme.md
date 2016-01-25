# env-name

[![Build Status](https://travis-ci.org/vdemedes/env-name.svg?branch=master)](https://travis-ci.org/vdemedes/env-name) [![Coverage Status](https://coveralls.io/repos/vdemedes/env-name/badge.svg?branch=master&service=github)](https://coveralls.io/github/vdemedes/env-name?branch=master)

Get environment description (Node.js + browser).


## Installation

```
$ npm install env-name --save
```


## Usage

```js
const envName = require('env-name');

// in Node.js
envName(); // => 'Node.js v4.2.1 (OS X Mavericks)'

// in browser
envName(); // => 'Chrome 42 (OS X)'
```


## Tests

```
$ npm test
$ npm run test-browser
```


## License

MIT © [Vadim Demedes](https://github.com/vdemedes)
