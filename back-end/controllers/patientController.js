// controllers/patientController.js
const Patient = require('../models/patient');

async function addPatient(req, res) {
  try {
    const patientData = req.body;
    console.log(patientData);
    const result = await Patient.addPatient(patientData);
    res.json({ success: true, message: 'Patient added successfully', rowsAffected: result });
  } catch (error) {
    console.error('Error adding patient:', error);
    res.status(500).json({ success: false, message: 'An error occurred while adding patient' });
  }
}

module.exports = {
  addPatient,
};
