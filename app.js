

const express=require("express")
const app=express();
const tasks=require("./Routes/tasks")
const port=process.env.PORT||3000;
const connectDb=require("./Database/connect")
require("dotenv").config()
const notFound=require("./middleware/not-found")
const errorHandelar=require("./middleware/error-handelar")

app.use(express.static("./public"))
app.use(express.json())



app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandelar)




const start=async ()=>{
    try{
        await connectDb(process.env.MONGO_URL)
        app.listen(port,()=>console.log(`server is listening on port ${port}`))

    }catch(err){
        console.log(err);

    }
}

start()










