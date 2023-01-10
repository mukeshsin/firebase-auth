
// import express
const express =require("express")
//require cors
const cors = require("cors");
// require database
const {initializeFirebaseApp}= require("./config/config.js")

//require router
const Router= require ("./routes/auth.routes.js");
 //db.sync({alter: true });

const app = express();
app.use(express.json());
app.use(cors());

 app.use(Router);

// listen on port
app.listen(5000, () => console.log("Server running at http://localhost:5000"));