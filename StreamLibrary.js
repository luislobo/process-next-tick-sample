var EventEmitter = require('events').EventEmitter;

function StreamLibrary(resourceName) {
    this.emit('start');

    for(var i=1;i<10;i++) {
        this.emit('data', resourceName, i);
    }
}

StreamLibrary.prototype.__proto__ = EventEmitter.prototype;

module.exports = StreamLibrary;
