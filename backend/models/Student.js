module.exports=(sequelize,Datatype)=>{
    const Student=sequelize.define('Student',{
        Studentname:{
            type:Datatype.STRING,
            allowNull:false
        },
        email:{
            type:Datatype.STRING,
            allowNull:false,
            unique:true
        },
        Phone:{
            type:Datatype.STRING,
            allowNull:false,
        },
        role:{
            type:Datatype.STRING,
            allowNull:false,
            values:['admin','student','teacher'],
            //default
            defaultValue:'student'
        },
       
        password:{
            type:Datatype.STRING,
            allowNull:false,
            
        },

       
    
       
    
        Sex:{
            type:Datatype.STRING,
            allowNull:false,
            values:['Male,Female,other']

        },
        Adress:{
            type:Datatype.STRING,
            allowNull:true,


        }

    })
 Student.associate=models=>{
    Student.hasMany(models.Courses,{
        onDelete:'cascade'
    })
  
 }
    return Student
}