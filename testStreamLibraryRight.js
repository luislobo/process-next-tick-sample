var StreamLibrary = require('./StreamLibraryRight');

var stream = new StreamLibrary('disk');

stream.on('start', function() {
    console.log('Stream started');
});

stream.on('data', function(resourceName, data) {
    console.log('Data arrived from', resourceName, data);
});
