const express=require('express')
const route=express.Router()
const db=require('../models')

const StudentController=require('../controller/student.controllere')
const jwt=require('jsonwebtoken')
route.post('/AddStudent',(req,res,next)=>{
    db.Student.create({
        Studentname:req.body.Studentname,
        email:req.body.email,
        Phone:req.body.Phone,
        role:req.body.role,
        
        password:req.body.password,
        Sex:req.body.Sex,
        Adress:req.body.Adress,

    }
       

        
        
        ).then(
        (response)=>res.status(200).send(response)
    ).catch((err)=> res.status(400).send(err))
    
})

route.get('/Student/:id',(req,res,next)=>{
    db.Student.findOne({where:{id:req.params.id}}).
    then((response)=>res.status(200).send(response)).
    catch((err)=> res.status(400).send(err))

})
route.get('/Students',(req,res,next)=>{
    db.Student.findAll().
    then((response)=>res.status(200).send(response)).
    catch((err)=> res.status(400).send(err))

})
route.patch('/Student/:id',(req,res,next)=>{
    db.Student.update({Studentname:req.body.Studentname,
        email:req.body.email,
        Phone:req.body.Phone,
        role:req.body.role,
      
       


    
    },{where:{id:req.params.id}}).
        then((response)=>res.status(200).send(response)).
        catch((err)=> res.status(400).send(err))
})
route.delete('/Student/:id',(req,res,next)=>{
    db.Student.destroy({where:{id:req.params.id}}).
    then((response)=>res.sendStatus(204)).
    catch((err)=> res.status(400).send(err))

})
route.post('/Login', (req, res, next) => {
    const { email, password } = req.body;

    // Find the student by email
    db.Student.findOne({ where: { email } })
        .then(student => {
            if (!student) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Check if the password is correct
            if (password === student.password) {
                // Create a JWT token for authentication
                const token = jwt.sign({ id: student.id, email: student.email,Studentname:student.Studentname,role:student.role }, 'your-secret-key', { expiresIn: '1h' });

                // Send the token as a response
                res.status(200).json({ token,message:"Connected" });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        })
        .catch(err => res.status(500).send(err));
});
module.exports=route