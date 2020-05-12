const express = require('express');

const route = express.Router()

route.get("/",(req,res) => res.render("welcome"))

route.post("/showbookmarks",(req,res) => res.render("showbookmarks",{
    user: req.body.tag1
}))



module.exports = route