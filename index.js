var Express=require("express");
var mongoose=require("mongoose");
var bodyparser=require("body-parser");

var {studModel}= require("./model/stud")

var app=Express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://asha:testdb@cluster0.gmzto.mongodb.net/studdb?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true})

app.post("/read", async(req,res)=>{
try{
var data=req.body;

var studentData=new studModel(req.body);

var result=await studentData.save();
res.json(result)


}

catch(error){
res.status(500).send(error)
}
})




app.listen(process.env.PORT || 3000, (error)=>{

    if(error){
        console.log("Error")
    }
    else{
        console.log("Server running")
    }
    })