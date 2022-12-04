const Router = require('express')
const PatientController = require('../controllers/patient.controller')

const patientRouter = new Router()

patientRouter.get('/search/:query', PatientController.searchHandler)
patientRouter.get('/specialization', PatientController.getDoctorsBySpecialization)
patientRouter.post('/makeAppointment', PatientController.makeAppointment)

module.exports = patientRouter


