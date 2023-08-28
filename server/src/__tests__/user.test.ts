// @ts-nocheck
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';

const auth = {};

// Get JWT Token for testing protected routes
async function loginUser(auth) {
  const res = await request(app)
    .post('/api/users/login')
    .send({ email: 'test@test.com', password: 'test1234' });

  auth.token = res.header.authorization.split(' ')[1];
}

// Connecting to the database before each test
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST as string);
  await loginUser(auth);
});

// Closing database connection after each test
afterEach(async () => {
  await mongoose.connection.close();
});

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', 'Bearer ' + auth.token);
    expect(res.statusCode).toBe(200);

    const users = res.body.map(user => user.first);

    expect(users).toContain('Test');
  });
});
