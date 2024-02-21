import express from "express"
import { protectedController } from "../controllers/protected.controller.js";
import { protect } from "../middleware/protect.js";

const protectedRouter = express.Router();

protectedRouter.get("/",protect, protectedController);

export default protectedRouter;