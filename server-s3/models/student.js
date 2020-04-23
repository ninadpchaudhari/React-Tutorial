let mongoose = require('mongoose')

let studentSchema = new mongoose.Schema({
firstName: {
    type: String,
    required:true
},
lastName: String
})

module.exports = mongoose.model('Student', studentSchema)