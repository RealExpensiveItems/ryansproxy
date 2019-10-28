const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const proxy = require('http-proxy-middleware');
// const http = require('http');
// const request = require('request');
const request = require('request-promise');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/:id', (req, res) => {
  request({
    method: 'GET',
    url: `http://localhost:3333/${req.params.id}`,
    qs: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

// app.get('/products', (req, res) => {
//   request({
//     method: 'GET',
//     url: `http://localhost:3000/products/`,
//   })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     })
// })

// app.get('/api/search/?', (req, res) => {
//   request({
//     method: 'GET',
//     url: `http://localhost:3108/api/search/?`,
//     qs: {
//       query: req.query.name
//     }
//   })
//     .then((data) => {
//       console.log(req.query.name);
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     })  
// })

// app.get('/ab/:id', (req, res) => {
//   request({
//     method: 'GET',
//     url: 'http://localhost:3008/ab',
//   })
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     })
// })

//   request('http://localhost:3333/product/4', (err, res, body) => {
//     if (!err) {
//       console.log(res)
//     //   console.log(body);
//     //   res.writeHead(body);
//       res.render(body)
//     } else {
//       console.error(err);
//     }
//   })

app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(express.static(path.join(__dirname, '../Daylan-Service/client/dist')));
// app.use(express.static(path.join(__dirname, '../REI-module-Forest/client/dist')));
// app.use(express.static(path.join(__dirname, '../ryansmodule/client/dist')));

// app.get('/')

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));