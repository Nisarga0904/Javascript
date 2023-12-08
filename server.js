const express=require("express");
const mongoose=require("mongoose");
const mongodb=require("./mongoose");
const port=5034;

const app=express();

mongoose.connect("mongodb://localhost:27017/reg")
.then(()=>{
    console.log("mongoose connected")
})
.catch((err)=>{
    console.log(err)
})



app.use(express.json());

app.post("/api/entry",async function(req,res){
    const userModel=new mongodb({email:req.body.email,password:req.body.password})
    try{
        await userModel.save();
        res.status(200).json({message:"success"})

    }
    catch(err){
        console.log(error)
        
    }
}
);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})




