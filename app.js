
// import express
import express from "express";
//import cors
import cors from "cors";
// import database
import db from "./config/database.js";
//import router
import Router from "./routes/auth.routes.js";
//await db.sync({alter: true });

const app = express();
app.use(express.json());
app.use(cors());
try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
 app.use(Router);

// listen on port
app.listen(5000, () => console.log("Server running at http://localhost:5000"));