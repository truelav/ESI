import express from "express";
import * as AuthControllers from "../../controllers/Auth/AuthControllers.js";
import { editUser } from "../../controllers/Auth/Edit.js";

const router = express.Router(); 



router.get("/refresh", AuthControllers.refresh);


/**
 * @openapi
 * /api/auth/users:
 *  get:
 *     tags:
 *     - Auth
 *     description: Get All users as list
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schema/productResponse'
 *       404:
 *         description: Product not found
 */
router.get("/users", AuthControllers.getUsers);



router.get("/users/:id", AuthControllers.getSingleUser);



/**
* @openapi
* '/api/auth/login':
*  post:
*     tags:
*     - Auth
*     summary: Loggin In User
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schema/LoginRequestUser'
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*           schema:
*              $ref: '#/components/schema/User'
*       403:
*         description: Forbidden
*       404:
*         description: User not found
*       500:
*         description: Something went wrong
*/
router.post("/login", AuthControllers.login);



router.post("/logout", AuthControllers.logout);


/**
* @openapi
* '/api/auth/signup':
*  post:
*     tags:
*     - Auth
*     summary: Signup new User
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schema/SignupRequestUser'
*     responses:
*       200:
*         description: Success Signup, we will get back to you shortly
*       403:
*         description: Forbidden
*       404:
*         description: User not found
*       500:
*         description: Something went wrong
*/
router.post("/signup", AuthControllers.signup)
router.post("/register", AuthControllers.register);
router.put("/users/edit", editUser);

router.put("/users/activate/:id", AuthControllers.activateDeactivateUser);

router.delete("/users/:id", AuthControllers.deleteUser);

export default router;
