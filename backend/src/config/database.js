const mongose = require('mongoose')
//remove alert console Mongose Promise
mongose.Promise = global.Promise

module.exports = mongose.connect('mongodb://localhost/task-list-app')