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

const updateUserProfile = async (req, res) => {
  
    await admin.auth().onUpdate((user) => {

  const db = admin.firestore();
  // Create a new document in the 'users' collection with the user's UID as the document ID
  return db.collection('users').doc(user.uid).set({
    address: 'req.body.address',
    profileImage: 'req.body.profileImage',
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
    

}
)};
module.exports = (createUser,updateUserProfile)

