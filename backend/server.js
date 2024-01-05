require('dotenv').config()

const express=require("express")
const workoutRoutes=require('./routes/workouts')
const mongoose=require("mongoose")
const userRoutes=require('./routes/user')

//express app
const app=express()
app.use(express.json());
//middleware
app.use((req,res,next)=>{
console.log(req.path,req.method)
next() 
})

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{  //=> this demonstrate how to invoke a function 
        console.log("Connected to DB and listening to port ", process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
})



process.env