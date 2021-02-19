const express=require('express')
const dbuser=require('./db_connect')
const app=express()
const port=process.env.port || 4002

// dbuser.run('select * from customer where name like'+"'"+"amir"+"'")
app.use(express.json())
app.post('/client',(req,res)=>{
    // console.log(req.body)
    //dbuser.run('select * from customer where name like'+"'%"+req.body.name+"%'")
    var myname=req.query.name
console.log(myname)
res.send('mero')

})

app.get('/client',(req,res)=>{
    res.send('mero1')
    
    })


app.listen(port,()=>{

    console.log("listening on"+port)
}) 

