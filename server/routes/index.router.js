const Router = require('express')
const router = new Router()
const adminRouter = require('./admin.router')

// router.use('/api/patient', patientRouter)
// router.use('/api/doctor', doctorRouter)
router.use('/api/admin', adminRouter)

module.exports = router