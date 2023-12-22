import request from "supertest"
import mongoose from "mongoose"
import createError from 'http-errors';
import { HTTPStatusCodes } from "../../utils/constants.js";
import Product from "../../models/Product/Product.js"
import app from "../../index.js"

describe('Product Routes', () => {
    beforeAll(async () => {
         await mongoose.connect("mongodb://127.0.0.1:27017/ESI")
    })

    afterAll(async () => {
        await mongoose.disconnect()
    })

    test('POST /api/products It Should add a new product', async () => {
        const response = await request(app)
            .post('/api/products')
            .field('brand', 'TestBrand')
            .field('model', 'TestModel')
            .field('description', 'TestDescription')
            .field('category', 'TestCategory')
            .field('subcategory', 'TestSubcategory')
            .field('upc', 'TestUPC')
            .field('price', 15)
            .field('quantity', 10)
            // .attach('image', 'http://localhost:8888/static/images/PHILIPS-HD974199-1703123972471.jpg')
            // .send();
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message', expect.any(String)) 
        expect(response.body).toHaveProperty('newProduct');

        const { newProduct } = response.body;
        // Check if the product was saved in the database
        const savedProduct = await Product.findById(newProduct._id);
        expect(savedProduct).not.toBeNull();
        expect(savedProduct.images).toContain('fallback_image.jpeg'); // Assuming fallback_image.jpeg is used for testing

        // Clean up: Delete the test product
        await Product.deleteOne({ _id: newProduct._id });

        return
    })
})