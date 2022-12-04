const Router = require('express')
const router = new Router()
const adminRouter = require('./admin.router')
const patientRouter = require('./patient.router')

router.use('/api/patient', patientRouter)
// router.use('/api/doctor', doctorRouter)
router.use('/api/admin', adminRouter)

module.exports = router