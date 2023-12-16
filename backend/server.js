const express=require('express')
const app=express()
const db=require('./models')
const StudentRoutes=require('./routes/student.route')
const Courses=require('./routes/courses.route')
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',StudentRoutes)

app.use('/',Courses)

db.sequelize.sync().then(()=>{
    app.listen(8088,()=>{
        console.log('Server is running on port 8088')
    })
})