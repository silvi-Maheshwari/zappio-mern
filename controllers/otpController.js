const { setOTP, getOTP, deleteOTP } = require('../utils/otpStore');

exports.sendOtp = (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ success: false, message: "Phone number required" });

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  setOTP(phone, otp);
  console.log(`OTP for ${phone} is ${otp}`);

  return res.json({ success: true, message: "OTP sent" });
};

exports.verifyOtp = (req, res) => {
  const { phone, otp } = req.body;
  const savedOtp = getOTP(phone);

  if (otp === savedOtp) {
    deleteOTP(phone);
    return res.json({ success: true, userId: `phone_${phone}` });
  }

  return res.status(401).json({ success: false, message: "Invalid OTP" });
};
