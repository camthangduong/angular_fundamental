// File syste,
var fs = require('fs');

// Reading from the file
module.exports.get = function (reg, res) {    
    var event = fs.readFileSync('app/data/event/' + reg.params.id + '.json', 'utf8');
    // Set content type and return
    res.setHeader('Content-Type', 'application/json');    
    res.send(event);
};

// Save the file
module.exports.save = function (reg, res) {
    var event = reg.body;
    fs.writeFileSync('app/data/event/' + reg.params.id + '.json', JSON.stringify(event));
    res.send(event);
};