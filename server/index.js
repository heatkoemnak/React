const express = require('express');
const data = require('./data');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('users', (req, res) => {
  res.json(data.team);
});
app.listen('3001', (req, res) => {
  console.log('Server is running on port 3001');
});
// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   userList.push(newUser);
//   res.json(userList);
// });
// app.put('/users', (req, res) => {
//   const { id } = req.body;
//   const newUser = req.body;
//   userList.forEach((user, index) => {
//     if (user.id === id) {
//       userList[index] = newUser;
//     }
//   });
//   res.json(userList);
// });
// app.delete('/users', (req, res) => {
//   const { id } = req.body;
//   userList.forEach((user, index) => {
//     if (user.id === id) {
//       userList.splice(index, 1);
//     }
//   });
//   res.json(userList);
// });
