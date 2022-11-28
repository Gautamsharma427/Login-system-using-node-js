const express = require('express');
const {engine} = require('express-handlebars')
const arr = [];
const app = express()
app.engine('handlebars',engine())
app.set('view engine','handlebars');
app.use(express.urlencoded())
app.get('/',(req,res)=>{
    res.render("home")
})
app.get("/login",(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.redirect('/')
})
app.post('/register',(req,res)=>{
const datavalue = arr.find((data)=>(data.email == req.body.email))
if(typeof datavalue == "object"){
    res.send(`Please Login <a href="/login">Login</a>`)
}
else{
    res.send("Thank You")
    arr.push(req.body);
}
})

app.post('/login',(req,res)=>{
    const datavalue = arr.find((data)=>(data.email == req.body.email))
    try {
        if(datavalue.email == undefined){
        
        }
        else{
            if(datavalue.message == req.body.message && datavalue.email === req.body.email){
                res.render("welcome",{
                    username :  datavalue.name
                })
            }
            else{
                res.render('user')
            }
        }
    } catch (error) {
        res.redirect('/register');

    }
    
    
})
app.listen(3000)