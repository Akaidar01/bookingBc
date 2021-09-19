
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5003;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Baze");
});

const employeeRoutes = require('./src/routes/Api/buildings')

app.use('/', employeeRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});