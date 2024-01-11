const express = require('express');
const UserRepository = require('../repositories/userRepository');
const CreateUser = require('../useCases/user/createUser');
const GetUser = require('../useCases/user/getUser');
const UpdateUser = require('../useCases/user/updateUser');
const DeleteUser = require('../useCases/user/deleteUser');

const router = express.Router();
const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository);
const getUser = new GetUser(userRepository);
const updateUser = new UpdateUser(userRepository);
const deleteUser = new DeleteUser(userRepository);

router.get('/users', async (req, res) => {
  const users = await getUser.execute();
  res.json(users);
});

router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await createUser.execute(name, email);
  res.json(newUser);
});

router.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  await updateUser.execute(userId, { name, email });
  res.json({ message: 'User updated successfully' });
});

router.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  await deleteUser.execute(userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;