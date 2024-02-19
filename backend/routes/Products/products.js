import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import { upload } from "../../middleware/upload/index.js";
import { uploadProductsFile } from "../../middleware/upload/uploadProductsFile.js";

const router = express.Router();

/**
 * @openapi
 * /api/products:
 *  get:
 *     tags:
 *     - Product
 *     description: Responds if the app is up and running
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
router.get("/", ProductControllers.getAllProducts);

/**
 * @openapi
 * /api/products/brandedProducts:
 *  get:
 *     tags:
 *     - Product
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/brandedProducts", ProductControllers.getBrandedProducts);

/**
 * @openapi
 * /api/products/brandedProducts:
 *  get:
 *     tags:
 *     - Product
 *     description: Responds if the app is up and running
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
router.get("/transformedProducts", ProductControllers.getTransformedProductsBy)


 /**
 * @openapi
 * '/api/products/{id}':
 *  get:
 *     tags:
 *     - Product
 *     summary: Get a single product by the id
 *     description: Retrieve a product based on its ID.
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/productResponse'
 *       404:
 *         description: Product not found
 */
router.get("/:id", ProductControllers.getSingleProduct);


 /**
 * @openapi
 * '/api/products/{id}':
 *  delete:
 *     tags:
 *     - Product
 *     summary: Delete a single product
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the product
 *        required: true
 *     responses:
 *       200:
 *         description: Product deleted
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
router.delete("/:id", ProductControllers.deleteSingleProduct);


 /**
 * @openapi
 * '/api/products/{id}':
 *  put:
 *     tags:
 *     - Product
 *     summary: Update a single product
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the product
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Product'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/productResponse'
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
router.put("/:id", upload.single("images"), ProductControllers.editSingleProduct);

 /**
 * @openapi
 * '/api/products/{id}':
 *  put:
 *     tags:
 *     - Product
 *     summary: Update a single product
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the product
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/Product'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schema/productResponse'
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Product not found
 */
router.put("/:id/uploadImage", upload.single("images"), ProductControllers.editSingleProduct);



/**
* @openapi
* '/api/products/{id}':
*  post:
*     tags:
*     - Product
*     summary: Create a single product
*     parameters:
*      - name: id
*        in: path
*        description: The id of the product
*        required: true
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schema/Product'
*     responses:
*       200:
*         description: Success
*         content:
*          application/json:
*           schema:
*              $ref: '#/components/schema/productResponse'
*       403:
*         description: Forbidden
*       404:
*         description: Product not found
*/
router.post("/", upload.single("image"), ProductControllers.addSingleProduct);

router.delete("/", ProductControllers.deleteMultipleProducts);
router.delete("/image/:id", ProductControllers.deleteProductImage);
router.post("/addMultiple", uploadProductsFile.single("csv"), ProductControllers.addMultipleProducts);
router.put("/upload", uploadProductsFile.single("csv"), ProductControllers.addMultipleProducts)
router.put("/", ProductControllers.editMultipleProducts);

export default router;
