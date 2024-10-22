const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const departmentRoute = require('./Router/departmentRoute');
const employeeRoute = require('./Router/employeeRoute');
const cors = require('cors');

const server = express();
const PORT = 3000;

// Middleware to parse JSON and urlencoded data
server.use(express.json());
server.use(cors());
server.use(bodyParser.json()); // Optional: Use this or the built-in express.json()
server.use(bodyParser.urlencoded({ extended: true })); // Optional: Use this or the built-in express.urlencoded()


connectDB();

server.get('/', (req, res)=>{
    res.send("Server is running!!!");
})

server.use('/department', departmentRoute);
server.use('/employee', employeeRoute);


server.listen(PORT, ()=>{
    console.log(`Server is up and running on ${PORT}`)
})