let mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
  name:String,
  isFav : Boolean
})

module.exports = mongoose.model('Movie', movieSchema)