const express = require('express');
const app = express();
const patientRoutes = require('./routes/patientRoute');
const { connect } = require('./models/db');

//SQL Server
connect();
app.use(express.json());

app.use('/patients', patientRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
