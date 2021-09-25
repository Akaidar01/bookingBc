
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send("Baze");
});

app.use(express.json());

const clientRoutes = require('./src/routes/Api/clients')

app.use('/client', clientRoutes)

const officeRoutes = require('./src/routes/Api/offices')

app.use('/office', officeRoutes)

const buildingRoutes = require('./src/routes/Api/buildings')

app.use('/building', buildingRoutes)

app.listen(port, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
