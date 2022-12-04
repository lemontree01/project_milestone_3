const Admin = require("../schemas/admin.schema");
const Doctor = require("../schemas/doctor.schema");
const Patient = require("../schemas/patient.schema");
const Appointment = require("../schemas/appointment.schema")
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = class PatientController {
  static async searchHandler(req, res) {
    try {
      const { query } = req.params;
      const doctors = await Doctor.find({
        $or: [{ name: query }, { specializationDetailsID: query }],
      });
      return res.status(200).json({
        message: doctors,
      });
    } catch (e) {
      return res.status(400).json({
        message: "Patient search error",
      });
    }
  }

  static async getDoctorsBySpecialization(req, res) {
    try {
      const { specialization } = req.body;
      const doctors = await Doctor.find({
        specializationDetailsID: specialization,
      });
      return res.status(200).json({
        message: doctors,
      });
    } catch (e) {
      return res.status(400).json({
        message: "Get doctors by specialization error",
      });
    }
  }

  static async makeAppointment(req, res) {
    try {
      const {
        name,
        surname,
        contactDetails,
        appointmentTime,
        doctorID,
        patientID,
      } = req.body;
    const doctor = await Doctor.findById(doctorID)
    const patient = await Patient.findById(patientID)
    const appointment = await Appointment.create({
      name, surname, contactDetails, appointmentTime, doctor, patient,
    })
    return res.status(200).json({
      message: appointment
    })
    } catch (e) {
      return res.status(400).json({
        message: "Make appointment error",
      });
    }
  }

  
};
