const {Schema, model, ObjectId} = require('mongoose')

const Admin = new Schema({
  login: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
})

module.exports = model('Admin', Admin)