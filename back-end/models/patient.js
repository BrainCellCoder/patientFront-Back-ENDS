const { pool } = require('./db');

async function addPatient(patientData) {
  try {
    const request = pool.request();

    // Define the SQL query with parameter placeholders
    const query = `
      INSERT INTO dbo.TestCancerScreening (Name, Age, Gender, Date, Lat, Long)
      VALUES (@Name, @Age, @Gender, @Date, @Lat, @Long)
    `;

    // Execute the query with parameters
    const result = await request
      .input('Name', patientData.Name)
      .input('Age', patientData.Age)
      .input('Gender', patientData.Gender)
      .input('Date', patientData.Date)
      .input('Lat', patientData.Lat)
      .input('Long', patientData.Long)
      .query(query);

    return result.rowsAffected[0];
  } catch (error) {
    console.error('Error adding patient:', error);
    throw error;
  }
}

module.exports = {
  addPatient,
};
