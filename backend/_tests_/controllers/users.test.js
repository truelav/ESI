import request from 'supertest';
import mongoose from 'mongoose';
import dontenv from  "dotenv"
dontenv.config()

const userId = "6542d0d3db542feae4903a00"
const baseURL = "http://localhost:8888/api/auth"  

describe('User Controllers', () => {
//     beforeAll((done) => {
//         mongoose.connect("mongodb://127.0.0.1:27017/ESI", () => done())
//    })

//    afterAll(() => {
//         mongoose.disconnect()
//    })

    it('should get all users', async () => {
        const res = await
    })

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