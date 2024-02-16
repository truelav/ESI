import express from "express";
import * as ProductControllers from "../../controllers/Product/index.js";
import { upload } from "../../middleware/upload/index.js";
import { uploadProductsFile } from "../../middleware/upload/uploadProductsFile.js";

const router = express.Router();
router.get("/", ProductControllers.getAllProducts);

/**
 * @openapi
 * components:
 *   schema:
 *     Product:
 *       type: object
 *       required:
 *        - title
 *        - description
 *        - price
 *        - image
 *       properties:
 *         title:
 *           type: string
 *           default: "Canon EOS 1500D DSLR Camera with 18-55mm Lens"
 *         description:
 *           type: string
 *           default: "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go."
 *         price:
 *           type: number
 *           default: 879.99
 *         image:
 *           type: string
 *           default: "https://i.imgur.com/QlRphfQ.jpg"
 *     productResponse:
 *       type: object
 *       properties:
 *         user:
 *           type: string
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         image:
 *           type: string
 *         id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *         __v:
 *           type: number
 *
 */


/**
 * @openapi
 * api/products/:
 *  get:
 *     tags:
 *     - Get All Products
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/brandedProducts", ProductControllers.getBrandedProducts);

/**
 * @openapi
 * api/products/brandedProducts:
 *  get:
 *     tags:
 *     - Get All Products Sorted By Brands
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
router.get("/transformedProducts", ProductControllers.getTransformedProductsBy)


 /**
 * @openapi
 * '/products/{id}':
 *  get:
 *     tags:
 *     - Single Product
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
 *  put:
 *     tags:
 *     - Single Product
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
 *  delete:
 *     tags:
 *     - Single Product
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

router.get("/:id", ProductControllers.getSingleProduct);
router.delete("/:id", ProductControllers.deleteSingleProduct);
router.put("/:id", upload.single("images"), ProductControllers.editSingleProduct);
router.post("/", upload.single("image"), ProductControllers.addSingleProduct);

router.delete("/", ProductControllers.deleteMultipleProducts);
router.delete("/image/:id", ProductControllers.deleteProductImage);

router.post("/addMultiple", uploadProductsFile.single("csv"), ProductControllers.addMultipleProducts);

router.put("/upload", uploadProductsFile.single("csv"), ProductControllers.addMultipleProducts)
router.put("/", ProductControllers.editMultipleProducts);

export default router;
