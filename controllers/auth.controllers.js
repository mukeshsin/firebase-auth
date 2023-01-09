import * as functions from 'firebase-functions';
// import { initializeApp } from 'firebase-admin/app';

// const myRefreshToken = '../nodeassign-firebase-adminsdk-7rp5j-29ceabe16f (1).json'; 


// const app = initializeApp({
//   credential: admin.credential.cert(myRefreshToken),
//   projectId: 'nodeassign',
 
// });

// import firebase-admin package
import * as admin from 'firebase-admin';


// import service account file (helps to know the firebase project details)
const serviceAccount = require("../nodeassign-firebase-adminsdk-7rp5j-29ceabe16f (1).json");

// Intialize the firebase-admin project/account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
 
// Create a new user in Firebase Authentication
export const createUser = async (req, res) => {
  try {
    // Extract the email and password from the request body
    const  { email, password } = req.body;

    // Validate the request body
    if (!email || !password) {
      return res.status(400).send({ error: 'Email and password are required' });
    }

    // Create the user using the Firebase Admin SDK
    const userRecord = await admin.auth().createUser({ email, password });

    // Return the user object
    return res.status(200).send({ user: userRecord });
  } catch (error) {
    // If an error occurs, return a response with the error message
    return res.status(500).send({ error: error.message });
  }
};
