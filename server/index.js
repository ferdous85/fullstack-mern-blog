const express = require("express")
require('dotenv').config()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')

const app = express()

app.use(express.json())


mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
    }).then(console.log('Connected to MongoDB')).catch((err)=>console.log(err));



app.use('/api/auth', authRoute )
app.use('/api/users', userRoute)


app.listen('5000', ()=>{
    console.log('App is running 5000');
})