const express = require('express');
const Department = require('../Models/department');

const router = express.Router();


//Create new department

router.post('/', async (req, res)=>{
    try {
        const { departmentName } = req.body;
       const existedDepartment = await Department.findOne({departmentName : departmentName});
       if(existedDepartment){
        return res.status(400).json({ message: 'Department name already exists' });
       }
        const newDepartment= new Department({
            departmentName
        })
        const saveDepartment = await newDepartment.save();
        res.status(201).json(saveDepartment);

    } catch (error) {
   
        res.status(500).json({ message: error.message });
    }

})

// GET all departments
router.get('/', async (req, res)=>{
  try {
     const allDepartment = await Department.find();
     res.status(201).json({
        allDepartment
     })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

//GET department by id
router.get('/:id', async (req, res)=>{
 try {
    const department = await Department.findById({_id:req.params.id});
    if(!department){
        res.status(404).json({message: 'Department not found'});
    }
    res.json({department})
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
})

//Update department by id
router.put('/:id', async (req, res)=>{
    try {
       const updatedDepartment = await Department.findByIdAndUpdate(req.params.id,{
        departmentName: req.body.departmentName
       },{new:true});
       //{new:true}This option ensures that the updated document is returned instead of the original (pre-update) document.
    
       res.json({updatedDepartment})
    } catch (error) {
       res.status(500).json({ message: error.message });
    }
   })

   //Update department by id
router.delete('/:id', async (req, res)=>{
    try {
       
       const deletedDepartment = await Department.findByIdAndDelete(req.params.id);

        // Check if department exists
        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.json({
            message: `${deletedDepartment.departmentName} has been deleted.`,
            deletedDepartment
        });
    } catch (error) {
       res.status(500).json({ message: error.message });
    }
   })






module.exports = router;


