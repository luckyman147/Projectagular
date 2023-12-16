module.exports=(sequelize,Datatype)=>{
    const Courses=sequelize.define('Courses',{
 
        Subject:{
            type:Datatype.STRING,
            allowNull:true,
        },
        contenu:{
            type:Datatype.STRING(1000),
            allowNull:false,
        },
        Date:{
            type:Datatype.DATEONLY,
            allowNull:false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        Number_Stars:{
            type:Datatype.INTEGER,
            allowNull:false,
            defaultValue:0
        
        }
        ,fee:{
            type:Datatype.INTEGER,
            allowNull:false,
            defaultValue:90
        
     
        }
        

    })
 Courses.associate=models=>{
    Courses.belongsTo(models.Student,{
        onDelete:'cascade'
    })
  
 }
    return Courses
}