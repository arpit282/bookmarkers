const express = require('express');
const User = require("../models/User")
const route = express.Router()
route.get("/bookmark",(req,res) => res.render("bookmark"))
route.get("/showbookmarks",(req,res) => res.render("showbookmarks"))

route.post("/bookmark",(req,res) =>{
    const { sitename,siteurl,tag1,tag2,tag3} =req.body
   
   User.findOne({sitename:sitename})
   .then(user =>{
       if(user){
           res.render("bookmark")
       }else{
           const newbook = new User({
              sitename,
              siteurl,
              tag1,
              tag2,
              tag3
          })
        
          newbook.save()
          .then(user =>{
              res.redirect("/users/showbookmarks")
          })
          .catch(err => console.log(err))
       }
   })   

})
module.exports = route