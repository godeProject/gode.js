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
gode.convert('QWERTY', 'Kedmanee', message)
//returns สวัสดี

//or with specific function

//QWERTY - Kedmanee
gode.qwkm('l;ylfu')
//returns สวัสดี

//and for other support layouts
gode.qwmn('message') //QWERTY - Manoonchai
gode.dvkm('message') // Dvorak - Kedmanee
gode.dvmn('message') // Dvorak - Manoonchai
```

ES6 *(in this case, typescript)*

```ts
import gode, {EngLayout, ThaLayout} from 'gode.js'

let message: string = 'l;ylfu'
gode.convert('QWERTY' as EngLayout, 'Kedmanee' as ThaLayout, message)
//returns สวัสดี

//or with specific function

//QWERTY - Kedmanee
gode.qwkm('l;ylfu' as string)
//returns สวัสดี

//and for other support layouts
gode.qwmn('message'as string) //QWERTY - Manoonchai
gode.dvkm('message'as string) // Dvorak - Kedmanee
gode.dvmn('message'as string) // Dvorak - Manoonchai
```

## License
[MIT License](https://github.com/godeProject/gode.js/blob/v2/LICENSE.md)