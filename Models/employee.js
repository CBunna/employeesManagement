const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    departmentId:{
        type:Schema.Types.ObjectId, 
        ref: 'Department',
        required: true 
    },
    url:{
        type:String,
        required:true

    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }

})

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;