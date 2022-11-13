const Router = require('express')
const AdminController = require('../controllers/admin.controller')
const adminRouter = new Router()

adminRouter.post('/login', AdminController.login)
adminRouter.post('/createpatient', AdminController.createPatient)
adminRouter.get('/getpatients', AdminController.getPatients)
adminRouter.post('/modifypatient', AdminController.modifyPatient)
adminRouter.post('/createdoctor', AdminController.createDoctor)
adminRouter.get('/getdoctors', AdminController.getDoctors)
adminRouter.post('/modifydoctors', AdminController.modifyDoctors)

module.exports = adminRouter