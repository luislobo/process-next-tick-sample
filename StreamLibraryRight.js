var EventEmitter = require('events').EventEmitter;

function StreamLibrary(resourceName) {
    var self = this;
    process.nextTick(function() {
        self.emit('start');
    });

    process.nextTick(function() {
        for(var i=1;i<10;i++) {
            self.emit('data', resourceName, i);
        }
    });
}

StreamLibrary.prototype.__proto__ = EventEmitter.prototype;

module.exports = StreamLibrary;
