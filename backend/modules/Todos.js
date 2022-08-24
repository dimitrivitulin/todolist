const mongoose = require('mongoose')
const Schema = mongoose.Schema

let todosSchema = new Schema({
  sujet:{
      type: String
  },
  objet:{
      type: String
  },
  message:{
      type: String
  }},
{
  collection: 'todos'
})

module.exports = mongoose.model('Todos', todosSchema)