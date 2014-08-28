try-require
===========

try/require mechanism to conditionally load a module using require.

# Installation
```bash
npm install try-require --save
```

# Usage

try-require lets you try to require a module and not fail if the
module is not installed. You could do this inline but the try/catch
block will prevent V8 from optimizing your entire function. Therefore,
making try-require standalone means only this module is not optimizable.

Sometimes you don't need to load the module, just determine if it is available.
For this, a `resolve` function is provided with `try-require.``

```javascript
// Conditionally require a module
var tryRequire = require('try-require');
var maybe = tryRequire('maybeModule');

// If `maybeModule` is not available, then `maybe` will
// be undefined. If available it is equivalent to:
// var maybe = require('maybeModule');
```

```javascript
// Determine if a module is available without loading it into memory
var tryRequire = require('try-require');
var maybePath = tryRequire.resolve('maybeModule');

// If available, maybePath holds the path to the module
// and the module is not loaded. If `maybeModule` is not available,
// then `maybePath` will be undefined.
```

Note that both tryRequire and tryRequire.resolve accept an optional second
argument if you want to provide your own version of require.

# License

MIT
