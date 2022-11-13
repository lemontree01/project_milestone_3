const Router = require('express')
const router = new Router()

router.use('/api/patient', patientRouter)
router.use('/api/doctor', doctorRouter)
router.use('/api/admin', adminRoute)

module.exports = router