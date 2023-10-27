import express from "express";

import * as AuthControllers from "../../controllers/Auth/AuthControllers.js";

const router = express.Router();

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
router.post("/logout", AuthControllers.logout);
router.get("/refresh", AuthControllers.refresh);
router.get("/users", AuthControllers.getUsers);
router.post("/users/", AuthControllers.register);
router.post("/users/edit", AuthControllers.editUser);
router.delete("/users/:id", AuthControllers.deleteUser);

export default router;
