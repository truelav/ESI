import express from "express";

import * as AuthControllers from "../../controllers/Auth/AuthControllers.js";

const router = express.Router();

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
router.post('/logout', AuthControllers.logout)

export default router;
