# save-buffer

> Turn a buffer into a file.

## Install

```
npm install --save save-buffer
```

## Usage

```js
const imageDownload = require('image-download');
const saveBuffer = require('save-buffer');

imageDownload('https://www.fillmurray.com/g/200/300').then(buffer => {
    await saveBuffer(buffer, './new/file/path.jpg');
});
```

## API

### saveBuffer(buffer, filePath)

Returns a `Promise`. The returned value is `undefined` or an error message.

### buffer

Type: `Buffer`

### filePath

Type: `string`

## Related

- [image-download](https://github.com/the-pat/image-download)

## License

MIT © [Patrick Tone](https://patrickt.one)