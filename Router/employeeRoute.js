 const express = require('express');
 const router = express.Router();
 const Department = require('../Models/department');
 const Employee = require('../Models/employee');




// Create employee
router.post('/', async (req, res)=>{
  try {
    const {firstName, lastName, departmentId,url} = req.body;

    const department = await Department.findById(departmentId);
    if(!department) return res.status(404).json({message:'Department not found.'});
    const newEmployee = new Employee({
        firstName,
        lastName,
        departmentId,
        url
    })

    const saveEmployee = await newEmployee.save();
    res.status(201).json({
        saveEmployee
    })
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

})
//Get all employees
router.get('/', async (req,res)=>{

    try {
    const employees = await Employee.find().populate('departmentId');
    res.json({employees})
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
})
//Get employee by ID
router.get('/:id', async (req,res)=>{

    try {
    const employees = await Employee.findById({_id:req.params.id});
    res.json({employees})
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
})
//Get employee by department
router.get('/department/:id', async (req,res)=>{

    try {
    const employeesByDept = await Employee.find({departmentId:req.params.id}).populate('departmentId');
    res.json({employeesByDept})
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
})
//Update employee by ID
router.put('/:id', async (req,res)=>{
    try {
    
    const updatedemployee = await Employee.findByIdAndUpdate(req.params.id,{
       firstName: req.body.firstName,
       lastName:req.body.lastName,
       departmentId: req.body.departmentId,
       url:req.body.url
    },{new:true})
    res.json({updatedemployee})
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
})
//Delete employee by ID
router.delete('/:id', async (req,res)=>{
    try {
    
    const deletedEmployees = await Employee.findByIdAndDelete(req.params.id)


        // Check if department exists
        if (!deletedEmployees) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.json({
            message: `${deletedEmployees .firstName} has been deleted.`,
            deletedEmployees
        });
 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  
})





module.exports = router;