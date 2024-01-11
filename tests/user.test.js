const supertest = require('supertest');
const app = require('../src/app');

describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await supertest(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('John Doe');
    expect(res.body.email).toBe('john@example.com');
  });

  it('should get all users', async () => {
    const res = await supertest(app)
      .get('/api/users');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update a user', async () => {
    const createUserRes = await supertest(app)
      .post('/api/users')
      .send({ name: 'Jane Doe', email: 'jane@example.com' });

    const userId = createUserRes.body.id;

    const updateUserRes = await supertest(app)
      .put(`/api/users/${userId}`)
      .send({ name: 'Updated Name', email: 'updated@example.com' });

    expect(updateUserRes.statusCode).toEqual(200);
    expect(updateUserRes.body).toEqual({ message: 'User updated successfully' });
  });

  it('should delete a user', async () => {
    const createUserRes = await supertest(app)
      .post('/api/users')
      .send({ name: 'James Doe', email: 'james@example.com' });

    const userId = createUserRes.body.id;

    const deleteUserRes = await supertest(app)
      .delete(`/api/users/${userId}`);

    expect(deleteUserRes.statusCode).toEqual(200);
    expect(deleteUserRes.body).toEqual({ message: 'User deleted successfully' });
  });
});