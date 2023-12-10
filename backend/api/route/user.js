const express = require('express');
const routes = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middelwere/checkAuth')

routes.get('/',checkAuth, (req, res, next) => {
    User.find()
        .then((result) => { 
            res.status(200).json({
                msg: result
            })
        })
        .catch((err) => {
            res.status(500).json({
                msg: err
            })
        })
})
routes.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
           return res.status(500).json({
                msg: err
            })
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId,
                name: req.body.name,
                username: req.body.username,
                password: hash,
                dob: req.body.dob,
                mobile: req.body.mobile
            })
            user.save()
                .then((result) => {
                    res.status(200).json({
                        msg: result
                    })
                })
                .catch((err) => {
                    res.status(500).json({
                        msg: err
                    })
                })
        }
    })
})
routes.post('/login',(req,res,next)=>{
    User.find({ username: req.body.username })
    .exec()
    .then((user)=>{
        console.log(user);
        if(user.length<1){
            return res.status(500).json({
                  msg:'User is not find'
            })
        }
        bcrypt.compare(req.body.password, user[0].password,(err,result)=>{
            if(!result){
                res.status(500).json({
                    msg:"password is not match.."
                })
            }
            if(result){
                const token = jwt.sign({
                    name:user[0].name,
                    username:user[0].username,
                    dob:user[0].dob,
                    mobile:user[0].mobile
                },
                "this is the dommy token",
                {
                    expiresIn:'24h'
                }
                );
                res.status(200).json({
                    name:user[0].name,
                    username:user[0].username,
                    dob:user[0].dob,
                    mobile:user[0].mobile,
                    token:token
                })
            }
        })  
    })
    .catch((err)=>{
        res.status(500).json({
            msg:err
        })
    })
})

module.exports = routes;