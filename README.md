# g;ode.js

Convert gibberish caused by Thai user forgotting to change their keyboard layout.

## Installation

*not to be confuse with "gode" (go+node) package*

via [npm](https://www.npmjs.com/package/gode.js)

```bash
$ npm install gode.js
```

or [yarn](https://yarn.pm/gode.js)

```bash
$ yarn add gode.js
```

## Usage

CommonJS

```js
const gode = require('gode.js')

let message = 'l;ylfu'
gode.convert(message)
//returns สวัสดี
```

ES6

```ts
import gode from 'gode.js'

let message = 'l;ylfu'
gode.convert(message) // message needs to be "string"
//returns สวัสดี
```

## License
[MIT License](https://github.com/godeProject/LICENSE.md)