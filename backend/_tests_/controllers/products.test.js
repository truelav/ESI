import request from "supertest"
import mongoose from "mongoose"
import createError from 'http-errors';
import { HTTPStatusCodes } from "../../utils/constants.js";
import products from "../testdata/product/products"
import Product from "../../models/Product/Product.js"
import app from "../../index.js"

const baseURL = "http://localhost:8888/api"

const addProductData = {
    brand: "TestBrand",
    model: "TestModel",
    description: "TestDescription",
    category: "TestCategory",
    subcategory: "TestSubcategory",
    upc: "TestUPC",
    price: 15,
    quantity: 10,

}

describe('Product Routes', () => {
    // beforeAll(async () => {
    //      await mongoose.connect("mongodb://127.0.0.1:27017/ESI")
    // })

    // afterAll(async () => {
    //     await mongoose.disconnect()
    // })

    it('POST /api/products It Should add a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .field('brand', 'TestBrand')
            .field('model', 'TestModel123')
            .field('description', 'TestDescription')
            .field('category', 'TestCategory')
            .field('subcategory', 'TestSubcategory')
            .field('upc', 'TestUPC')
            .field('price', 15)
            .field('quantity', 10)
            // .attach('image', 'http://localhost:8888/static/images/PHILIPS-HD974199-1703123972471.jpg')
            // .send();
        
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty('message', expect.any(String)) 
        expect(res.body).toHaveProperty('newProduct')

        return res
    })
})
