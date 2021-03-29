const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./dataBase/connect');
const cors = require('cors');
const userApi = require('./routes/userApi');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async(req,res) => {
    res.json({message: 'Welcome to Test.'});
});

app.use('/user', userApi);

app.listen(process.env.port || port, function () {
    console.log(`server start on port ${port}`);
});