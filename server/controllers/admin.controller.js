const Admin = require('../schemas/admin.schema')
const Doctor = require('../schemas/doctor.schema')
const Patient = require('../schemas/patient.schema')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AdminController {
  static async login(req, res) {
    try {
      const { login, password } = req.body
      const admin = await Admin.findOne({login})

      if(!admin) {
        console.log('Admin does not exist');
        return res.status(400).json({
          message: "No user found"
        })
      }

      if(password !== admin.password) {
        console.log('wrong password')
        return res.status(400).json({
          message: "Wrong password"
        })
      }

      console.log('successful login');

      const token = jwt.sign({
        _id: admin._id,
      },
      process.env.jwtAccessKey, {
        expiresIn: "1h",
      }
      )

      return res.status(200).json({
        token, login
      })
    }
    catch(e) {
      console.log(e);
      console.log('error admin login');
      return res.status(400).json({
        message: "Admin login error"
      })
    }
  }

  static async getPatients(req, res) {
    try {
      const patients = await Patient.find()
      return res.status(200).json(
        patients
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Get patients error"
      })
    }

  }

  static async createPatient(req, res) {
    try {
      const {
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        middleName,
        bloodGroup,
        emergencyContactNumber,
        contactNumber,
        email,
        address,
        martialStatus,
        registrationDate,
        optionalDetails
      } = req.body
      const patient = await Patient.create({
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        middleName,
        bloodGroup,
        emergencyContactNumber,
        contactNumber,
        email,
        address,
        martialStatus,
        registrationDate,
        optionalDetails
      })
      return res.status(200).json(
        patient
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Create patients error"
      })
    }
  }

  static async modifyPatient(req, res) {
    try {
      const {
        _id,
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        middleName,
        bloodGroup,
        emergencyContactNumber,
        contactNumber,
        email,
        address,
        martialStatus,
        registrationDate,
        optionalDetails
      } = req.body
      const patient = await Patient.findOne({_id})
      patient.login = login,
      patient.password = password,
      patient.dateOfBirth = dateOfBirth,
      patient.IINNumber = IINNumber,
      patient.IDNumber = IDNumber,
      patient.name = name,
      patient.surname = surname,
      patient.middleName = middleName,
      patient.bloodGroup = bloodGroup,
      patient.emergencyContactNumber = emergencyContactNumber,
      patient.contactNumber = contactNumber,
      patient.email = email,
      patient.address = address,
      patient.martialStatus = martialStatus,
      patient.registrationDate = registrationDate,
      patient.optionalDetails = optionalDetails    
      await patient.save()
      return res.status(200).json(
        patient
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Modify patients error"
      })
    }
  }

  static async getDoctors(req, res) {
    try {
      const doctors = await Doctor.find()
      return res.status(200).json(
        doctors
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Get doctors error"
      })
    }

  }

  static async createDoctor(req, res) {
    try {
      const {
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        contactNumber,
        departmentID,
        specializationDetailsID,
        experience,
        photo,
        category,
        price,
        scheduleDetails,
        degree,
        rating,
        address,
        homepageURL
      } = req.body
      const isDoctorExisting = await Doctor.findOne({login})
      if(!!isDoctorExisting) {
        return res.status(402).json({
          message: "The doctor with given login already exists"
        })
      }
      const doctor = await Doctor.create({
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        contactNumber,
        departmentID,
        specializationDetailsID,
        experience,
        photo,
        category,
        price,
        scheduleDetails,
        degree,
        rating,
        address,
        homepageURL
      })
      return res.status(200).json(
        doctor
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Create doctors error"
      })
    }
  }

  static async deleteDoctor(req, res) {
    try {
      const { _id } = req.params
      const doctor = await Doctor.findOne({_id})
      await doctor.remove()
      return res.status(200).json({
        message: "Deleted doctor successfully"
    })
    } catch (e) {
      console.log(e);
      return res.status(402).json({
        message: "Delete doctors error"
      })
    }
  }

  static async deletePatient(req, res) {
    try {
      const { _id } = req.params
      const patient = await Patient.findOne({_id})
      await patient.remove()
      return res.status(200).json({
        message: "Deleted patient successfully"
    })
    } catch (e) {
      console.log(e);
      return res.status(402).json({
        message: "Delete patient error"
      })
    }
  }

  static async modifyDoctors(req, res) {
    try {
      const {
        _id,
        login,
        password,
        dateOfBirth,
        IINNumber,
        IDNumber,
        name,
        surname,
        contactNumber,
        departmentID,
        specializationDetailsID,
        experience,
        photo,
        category,
        price,
        scheduleDetails,
        degree,
        rating,
        address,
        homepageURL
      } = req.body
      const doctor = await Doctor.findOne({_id})
      doctor.login = login,
      doctor.password = password,
      doctor.dateOfBirth = dateOfBirth,
      doctor.IINNumber = IINNumber,
      doctor.IDNumber = IDNumber,
      doctor.name = name,
      doctor.surname = surname,
      doctor.contactNumber = contactNumber,
      doctor.departmentID = departmentID,
      doctor.specializationDetailsID = specializationDetailsID,
      doctor.experience = experience,
      doctor.photo = photo,
      doctor.category = category,
      doctor.price = price,
      doctor.scheduleDetails = scheduleDetails,
      doctor.degree = degree,
      doctor.rating = rating,
      doctor.address = address,
      doctor.homepageURL = homepageURL      
      await doctor.save()
      return res.status(200).json(
        doctor
      )
    } catch(e) {
      console.log(e);
      return res.status(402).json({
        message: "Modify doctors error"
      })
    }
  }
}

module.exports = AdminController