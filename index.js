'use strict';

var tryRequire = function tryRequire(id, req) {
    var path;
    var _req = req || require;

    try {
        path = _req.resolve(id);
    } catch (e) {}

    if (path) {
        return _req(path);
    }

    return undefined;
}

var resolve = function tryRequireResolve(id, req) {
    var path;
    var _req = req || require;

    try {
        path = _req.resolve(id);
    } catch (e) {}

    return path;
}

tryRequire.resolve = resolve;
module.exports = tryRequire;
