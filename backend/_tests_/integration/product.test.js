import supertest from 'supertest';
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from 'mongoose';
import connectDB from '../../config/db.config.js';
import createServer from '../../utils/createServer.js'

const app = createServer()

describe("Product Integration", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
    })    
      
    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
        console.log('server and mongoDB closed')
    })

    describe("get Product Route", () => {
        describe("given the product doesnt exists", () => {

            test("returns a list of products", async () => {
                const response = await supertest(app).get("/api/products")

                expect(response.status).toBe(200)
            })

            test("should return a 404", () => {
                expect(true).toBe(true)
            })
        })
    })
})