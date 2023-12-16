const express=require('express')
const route=express.Router()
const db=require('../models')
const { Op } = require('sequelize');

route.post('/addCourses',(req,res,next)=>{
    db.Courses.create({Date:req.body.Date,
        contenu:req.body.contenu,
        Subject:req.body.Subject,
       
       
        fee:req.body.fee,
        // instructor:req.body.instructor
        }).
        then((response)=>res.status(200).send(response)).
        catch((err)=> res.status(400).send(err))
})
route.get('/Courses/:id',(req,res,next)=>{
    db.Courses.findOne({where:{id:req.params.id}}).
    then((response)=>res.status(200).send(response)).
    catch((err)=> res.status(400).send(err))

})

route.get('/Courses',(req,res,next)=>{
    db.Courses.findAll({include:[    {
        model: db.Student,
        attributes: ['id','Studentname', 'email'] // Include only specific attributes
      }]}).
    then((response)=>res.status(200).send(response)).
    catch((err)=> res.status(400).send(err))

})
route.patch('/Courses/:id',(req,res,next)=>{
    db.Courses.update({
       
        contenu:req.body.contenu,
        Subject:req.body.Subject,
       
        fee:req.body.fee,
        // instructor:req.body.instructor

    },{where:{id:req.params.id}}).
        then((response)=>res.status(200).send(response)).
        catch((err)=> res.status(400).send(err))
})
route.delete('/Courses/:id',(req,res,next)=>{
    db.Courses.destroy({where:{id:req.params.id}}).
    then((response)=>res.sendStatus(204)).
    catch((err)=> res.status(400).send(err))

})
module.exports=route