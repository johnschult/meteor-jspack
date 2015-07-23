# johnschult:jspack

## Installing
```
meteor add johnschult:jspack
```

## Usage

```javascript
Struct.pack('2c', ['a', 'b']);
// => [97, 98]

Struct.unpack('2c', [97, 98]);
// => ['a', 'b']
```

## Additional Documentation
The documentation for `jspack` is located
[here](https://code.google.com/p/jspack/source/browse/tags/1.0.0/docs/README)

## Credits
This package includes the source code from
[jspack](https://code.google.com/p/jspack/).
