var mongoose=require("mongoose");
const studentSchema= new mongoose.Schema(
{

    name:{type:String},
    rollno:{type:Number},
    admno:{type:Number},
    college:{type:String}

}
)

var studModel= mongoose.model("students", studentSchema)
module.exports={studModel}