# md-imgage-error-loader

[中文文档](/README_ZH.md)

Process image files that do not exist in the `.md` file and replace them

## Installation

```sh
npm i md-imgage-error-loader
```

## Usage

webpack

```js
// ... omit some configuration
use: [
  {
    loader: 'md-imgage-error-loader',
    options: {
      // A string or a function that accepts a replacement array
      src: 'http://xxxx.png',
      // or
      src: (currentName, currentPath) => {
        // xxx
      },
    },
  },
];
```

## Agreement

MIT License
