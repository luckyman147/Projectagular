const joi =require('joi')
// const { resolve } = require('path')
const db=require('../models')
const bcrypt=require('bcrypt')
const { resolve } = require('path')

const jwt=require('jsonwebtoken')

const SchemaValidation=joi.object({
    Studentname:joi.string().required(),
    email:joi.string().email().required(),
    Phone:joi.string().regex(/^\d{8}$/)
    .required(),
    role:joi.string().valid('admin','student','teacher'),
    password:joi.string().required(),
    
    
    Sex: joi.string().valid('Male','Female','Other'),
    Adress:joi.string()


})

exports.register = async (
    Studentname,
    email,
    Phone,
    role,
    
    
    password,
    
    Sex,
    Adress
  ) => {
    try {
      const validation = SchemaValidation.validate({
        Studentname,
        email,
        Phone,
        role,
        
        password,
        
        Sex,
        Adress,
      });
  
      if (validation.error) {
        throw new Error(validation.error.details[0].message);
      }
  
      const count = await db.Student.count({ where: { email: email } });
  
      if (count > 0) {
        throw new Error('Email already exists');
      }
  
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      const newStudent = await db.Student.create({
        Studentname,
        email,
        Phone,
        role,   
        UserProfile,
        password: hashedPassword,
        
        Sex,
        Adress,
      });
  
      return newStudent;
    } catch (error) {
      throw error;
    }
  };
  

