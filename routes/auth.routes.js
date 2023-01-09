// Import express
import express from "express";


import{createUser} from "../controllers/auth.controllers.js";


// Init express router
const router = express.Router();




router.post("/add/User",createUser);













export default router;