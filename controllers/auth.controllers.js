const admin = require("firebase-admin");

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
