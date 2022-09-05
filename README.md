# Sensible API

A JavaScript/TypeScript wrapper for [sensiblequery][sensiblequery] API.

## Installation

```bash
npm install @sensible-contract/sensible-api
```

## Usage

```js
const { SensibleApi } = require("@sensible-contract/sensible-api");
let sensibleApi = new SensibleApi();
sensibleApi.authorize({
    authorization:"your apikey",
});
console.log(sensibleApi);

//or
let sensibleApi2 = new SensibleApi("your api url");
console.log(sensibleApi2);
```

[sensiblequery]: https://github.com/sensible-contract/sensiblequery
