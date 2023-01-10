const admin = require("firebase-admin");
const {initializeFirebaseApp}= require("../config/config.js")

const serviceAccount = require("../nodeassign-firebase-adminsdk-7rp5j-0a456fe229.json");
if(!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const createUser = async (req, res) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });
    const response = {
      message: "Successfully created new user",
      uid: userRecord.uid,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "err" });
  }
};

module.exports = createUser;
