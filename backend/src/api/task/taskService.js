const Task = require('./task')

Task.methods(['get', 'post', 'put', 'delete'])
//update return new register
Task.updateOptions({new: true, runValidatiors: true})

module.exports = Task