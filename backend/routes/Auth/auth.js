import express from "express";

import * as AuthControllers from "../../controllers/Auth/AuthControllers.js";

const router = express.Router();

router.post("/", AuthControllers.register);
router.get("/", AuthControllers.login);

export default router;
