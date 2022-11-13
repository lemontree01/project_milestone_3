const {Schema, model, ObjectId} = require('mongoose')

const Doctor = new Schema({
  login: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  IINNumber: {
    type: String,
  },
  IDNumber: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  middleName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  departmentID: {
    type: String,
  },
  specializationDetailsID: {
    type: String,
  },
  experience: {
    type: String,
  },
  photo: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  scheduleDetails: {
    type: String,
  },
  degree: {
    type: String,
  },
  rating: {
    type: String,
  },
  address: {
    type: String,
  },
  homepageURL: {
    type: String,
  },
})

module.exports = model('Doctor', Doctor)