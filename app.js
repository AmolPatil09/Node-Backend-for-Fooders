const express=require('express')
const app =express();
const bodyParser = require('body-parser');
const cookiesParser=require('cookie-parser')
const cors = require('cors');
const requestLogger=require('./Utilities/requstLogger')
const errorLogger=require('./Utilities/errorLogger')
const userRoutes=require('./Routes/userRoutes')
app.use(bodyParser.json())
app.use(cookiesParser())
app.use(cors());
app.use(requestLogger)
app.use('/',userRoutes)
app.use(errorLogger)
app.listen(3000,()=>{
    console.log("Fooders App running port 3000");
})