const express = require('express');
const dotenv = require('dotenv');
const otpRoutes = require('./routes/otpRoutes');
const rideRoutes = require('./routes/rideRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/', otpRoutes);
app.use('/', rideRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
