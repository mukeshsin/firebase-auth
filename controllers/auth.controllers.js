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
  const db = admin.firestore();
  //get user data on request body
  const userId = req.body.userId;
  const profileImage = req.body.profileImage;

  if (!userId) {
    res.status(400).send({ message: "userId is required" });
    return;
  }
  // Ensure userId is a string
  const userIdString = userId.toString();

  const imageSize = Buffer.byteLength(profileImage, "base64");
  // declared 2mb
  const maxFileSize = 2 * 1024 * 1024;
  // image size is less than maxfilesize
  if (imageSize < maxFileSize) {
    res.status(400).send({ message: "Image size must be less than 2MB" });
    return;
  }
  // Add the user's profile to the "example-collection" collection
  db.collection("users")
    .doc(userIdString)
    .set({
      userId,
      profileImage,
    })
    .then(() => {
      res.status(200).send({ message: "User profile created successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "error creating user profile" });
    });
};
const addFriend = async (req, res) => {
  try {
    const db = admin.firestore();
    const friendsRef = db.collection("friends");
    const friendDocRef = friendsRef.doc();
    await friendDocRef.set({
      userId: req.body.userId,
      friendId: req.body.friendId,
      addedOn: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).send({
      message: "Friend added Successfully",
      response: friendDocRef,
    });
  } catch (error) {
    console.log({ message: "Error adding Friend" });
  }
};
module.exports = (createUser, updateUserProfile, addFriend);
