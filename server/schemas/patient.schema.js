const {Schema, model, ObjectId} = require('mongoose')

const Patient = new Schema({
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
  bloodGroup: {
    type: String,
  },
  emergencyContactNumber: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  martialStatus: {
    type: String,
  },
  registrationDate: {
    type: String,
  },
  optionalDetails: {
    type: String,
  },
})

module.exports = model('Patient', Patient)