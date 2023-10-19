const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const path = require('path');
app.use(express.static(path.join(__dirname) + 'public'));
// app.use(express.urlencoded({ extended: true }));

const data = [
  {
    id: 1,
    name: 'Saing Sopheak',
    role: 'Backend & Server Side',
    image: '../images/sopheak.jpg',
    email: '<EMAIL>',
    phone: '<PHONE>',
    address: '<ADDRESS>',
    city: '<CITY>',
    state: '<STATE>',
  },
  {
    id: 2,
    name: 'Heat Koemnak',
    role: 'Backend and Server',
    image: '/images/koemnak.jpg',
    email: '<EMAIL>',
    phone: '<PHONE>',
    address: '<ADDRESS>',
    city: '<CITY>',
    state: '<STATE>',
  },

  {
    id: 3,
    name: 'Som Sodana',
    role: 'Frontend',
    image: '/images/sodana.jpg',
    email: '<EMAIL>',
    phone: '<PHONE>',
    address: '<ADDRESS>',
    city: '<CITY>',
    state: '<STATE>',
  },
];
const feature = [
  {
    id: 1,
    title: 'SELL',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image:
      'https://cdn0.iconfinder.com/data/icons/scenicons-e-commerce-flat-icons/512/Ecommerce_Set-20-512.png',
    to: 'to Sell',
  },
  {
    id: 2,
    title: 'BUY',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image:
      'https://cdn3.iconfinder.com/data/icons/flat-rounded-4/50/327-512.png',
    to: 'to Buy',
  },
  {
    id: 3,
    title: 'RECYCLE',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image:
      'https://cdn3.iconfinder.com/data/icons/flat-rounded-4/50/327-512.png',
    to: 'to Recycle',
  },
];
const navbar = [
  {
    id: 1,
    title: 'Home',
    to: '/',
  },
  {
    id: 2,
    title: 'Feature',
    to: '/feature',
  },
  {
    id: 3,
    title: 'About',
    to: '/about',
  },
  {
    id: 4,
    title: 'Contact',
    to: '/contact',
  },
  {
    id: 5,
    title: 'FAQ',
    to: '/faq',
  },
];
const overview = [
  {
    id: 1,
    title: 'Quality',
    amount: '4.3',
    subtitle: 'Ratting',
  },
  {
    id: 2,
    title: 'Users',
    amount: '254',
    subtitle: 'Total',
  },
  {
    id: 3,
    title: 'Materials',
    amount: '1506',
    subtitle: 'Total',
  },
  {
    id: 4,
    title: 'Viewer',
    amount: '2401',
    subtitle: 'Total',
  },
];
app.get('/api/navbar', (req, res) => {
  res.json(navbar);
});
app.get('/api/team', (req, res) => {
  res.json(data);
});
app.get('/api/feature', (req, res) => {
  res.json(feature);
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
