const Sequelize = require("sequelize");
const admin = require("firebase-admin");
const serviceAccount = require("../nodeassign-firebase-adminsdk-7rp5j-0a456fe229.json");

function initializeFirebaseApp() {
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = {initializeFirebaseApp};

