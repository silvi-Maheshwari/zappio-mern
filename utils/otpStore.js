const otpStore = {};

function setOTP(phone, otp) {
  otpStore[phone] = otp;
}

function getOTP(phone) {
  return otpStore[phone];
}

function deleteOTP(phone) {
  delete otpStore[phone];
}

module.exports = { setOTP, getOTP, deleteOTP };
