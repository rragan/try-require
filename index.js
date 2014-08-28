'use strict';

var tryRequire = function tryRequire(id) {
    try {
        return require(id);
    }
    catch (e) {}

    return undefined;
}

var resolve = function tryRequireResolve(id) {
    try {
        return require.resolve(id);
    }
    catch (e) {}

    return undefined;
}

tryRequire.resolve = resolve;
module.exports = tryRequire;
