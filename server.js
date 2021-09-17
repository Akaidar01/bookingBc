const express = require('express');

const app = express();

const port = process.env.PORT || 5001;

app.get('/', (req, res) =>{
    res.send('Baze');
})

app.listen(port, ()=>{
    console.log(`Server is runing at port ${port}`);
});

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Baze");
});

const employeeRoutes = require('./src/routes/employee.routes')

app.use('/api/v1/Books', employeeRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});