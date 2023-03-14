import { Router } from "express";
import { register } from "../Controllers/Auth.js";

const router = Router();

router.post("/register", register);

export default router
