import request from 'supertest';
import mongoose from 'mongoose';
import app from "../../index.js"

describe('User Controllers', () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb://127.0.0.1:27017/ESI")
   })

   afterAll(async () => {
       await mongoose.disconnect()
   })
    const userId = "6542d0d3db542feae4903a00"
    const baseURL = "http://localhost:8888/api/"  
    // describe('POST /users', () => {
    //     it('should add one user', async () => {
    //     const res = await request(baseURL).post('auth/users').send({
    //         name: 'test_name',
    //         email: 'test_user1@example.com',
    //         password: '123',
    //     });
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body).toHaveProperty('email');
    //     expect(res.body.email).toBe('test_user1@example.com');
    //     user1 = res.body;
    //     });
    // });

    it('should get single user with ID', async () => {
        const res = await request(baseURL).get(`auth/user/:${userId}`)
        expect(res.status).toBe(200)
        console.log(res.body)
    })


//   describe('POST /users/login', () => {
//     it('should login', async () => {
//       const beforeLoginDate = new Date();
//       const res = await request(app).post('/users/login').send({
//         email: 'user1@example.com',
//         password: '123456',
//       });
//       expect(res.statusCode).toBe(200);
//       expect(new Date(res.body.lastLogin).getTime()).toBeGreaterThanOrEqual(beforeLoginDate.getTime());
//     });

//     it('should not login', async () => {
//       const res = await request(app).post('/users/login').send({
//         email: 'user1@example.com',
//         password: '1234',
//       });
//       expect(res.statusCode).toBe(500);
//     });
//   });

//   describe('GET /users/:id', () => {
//     it('should return one user', async () => {
//       const res = await request(app).get(`/users/${user1.id}`);
//       expect(res.statusCode).toBe(200);
//       expect(res.body).toHaveProperty('id');
//     });
//   });
});