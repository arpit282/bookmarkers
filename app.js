const express = require('express')
const body = require("body-parser")
const mongoose = require('mongoose');
const explayout = require("express-ejs-layouts")
const app = express()

require("dotenv/config")

mongoose.connect(process.env.Dbconnect,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("Mongo connected..."))
.catch(err => console.log(err))


app.use(explayout)
app.set("view engine","ejs")
app.use(express.urlencoded({extended: false}))


app.use("/",require("./routes/index"))
app.use("/users",require("./routes/users"))

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`Server started at port ${PORT}`))