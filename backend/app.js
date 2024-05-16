const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const glavniRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', glavniRouter);
app.use('/user', userRouter);

app.get('/', function(req, res){
    res.send("Server se odziva.");
})


app.listen(6500);