const db = require('../firebase/firestore');

exports.requestRide = async (req, res) => {
  const { userId, pickup, drop, timestamp } = req.body;

  if (!userId || !pickup || !drop || !timestamp) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const rideRef = await db.collection('rideRequests').add({
      userId,
      pickup,
      drop,
      timestamp,
      status: "requested"
    });

    return res.json({ success: true, rideId: rideRef.id, message: "Ride requested successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error saving ride" });
  }
};
