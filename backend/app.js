const express = require('express');
const app = express();
const UserRoutes = require('./api/route/user');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://Chandra63:chandra@cluster0.3djwmm5.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',(error)=>{
console.log('database is not connected....')
})
mongoose.connection.on('connected',(connect)=>{
    console.log('database is connected....')
})

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors())
app.use('/user',UserRoutes);

app.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'app is runing'
    })
})

module.exports = app;