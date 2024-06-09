const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();

const glavniRouter = require('./routes/index')
const userRouter = require('./routes/user')
const destinacijaRouter = require('./routes/destinacija')
const nacrtRouter = require('./routes/nacrt')
const cohereRouter = require('./routes/cohere')

const allowedOrigins = [
    'http://localhost:5173', // Local development
    'https://wanderwise-frontend.onrender.com' // Deployed frontend URL
  ];

app.use(cors({
    origin: allowedOrigins, 
    credentials: true
  }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/', glavniRouter);
app.use('/user', userRouter);
app.use('/destinacija', authMiddleware, destinacijaRouter);
app.use('/nacrt', authMiddleware, nacrtRouter);
app.use('/cohere', cohereRouter);

app.get('/auth/check', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Authenticated' });
});

app.get('/', function(req, res){
    res.send("Server se odziva.");
})


app.listen(6500);