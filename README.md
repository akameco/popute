# popute [![Build Status](https://travis-ci.org/akameco/popute.svg?branch=master)](https://travis-ci.org/akameco/popute)

> ポプテピピックのurl一覧を取得

## Installation

```
$ npm install --save pupute
```

## Usage

```js
const popute = require('popute');

popute().then(links => {
	links.forEach(link => {
		console.log(link);
	});
});
```

## Cli

```
$ popute
```

## Tests

```
$ npm test
```

## License

MIT
