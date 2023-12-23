import request from "supertest"
import mongoose from "mongoose"
import createError from 'http-errors';
import { HTTPStatusCodes } from "../../utils/constants.js";
import products from "../testdata/product/products.json"
import Product from "../../models/Product/Product.js"
import app from "../../index.js"

const baseURL = "http://localhost:8888/api"

describe('GetAllProducts | /api/products | Controller', () => {
    // beforeAll(async () => {
    //      await mongoose.connect("mongodb://127.0.0.1:27017/ESI")
    // })

    // afterAll(async () => {
    //     await mongoose.disconnect()
    // })

    it('It should return all products when products exist', async () => {
        const res = await request(baseURL).get('/products')

        expect(res.status).toBe(200)
        return
    })

})
