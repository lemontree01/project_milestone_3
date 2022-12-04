const {Schema, model, ObjectId} = require('mongoose')

const Appointment = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  contactDetails: {
    type: String
  },
  appointmentTime: {
    type: String
  },
  patient: {
    type: ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: ObjectId,
    ref: 'Doctor',
  }
})

module.exports = model('Appointment', Appointment)
