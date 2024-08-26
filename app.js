const express = require('express')
const app = express();
const dotenv =require('dotenv')
const path = require('path')
const connectDatabace = require('./config/connectDatabase')
dotenv.config({path:path.join(__dirname, 'config','config.env')})

const Products = require('./routes/product')
const Order = require('./routes/order')
connectDatabace();
app.use(express.json())
app.use('/api/v1/',Products);
app.use('/api/v2/',Order);
app.listen(process.env.PORT,()=>{
    console.log(process.env.Server + ' PORD NO : ' +process.env.PORT);
    

})