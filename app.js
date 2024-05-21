const express = require('express')
const app = express()
 const reqRateLimit =require('express-rate-limit')


const limiter = reqRateLimit({
  windowMs : 1 *  60 * 1000 ,  //convert 1min to ms
  max : 20, //limit each IP to 20 requests per windowMs,
  message:"You have reached your request limit, try again after 1min"
})


app.use(limiter)

app.get('/', (req, res)=>{
    
    res.send(" hello from 2")

})


app.listen(4000, ()=>{
  console.log('server is running on port 4000')
})