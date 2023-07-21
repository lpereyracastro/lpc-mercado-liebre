const express = require('express');
const app = express();
const path = require('path')
app.use('/', express.static(__dirname + '/public'));


app.listen(process.env.PORT || 3001, ()=>{
    console.log('Aplicación funcionando en el puerto 3001');
});

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.post('/login', (req,res)=>{
    res.redirect('/');
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.post('/register', (req,res)=>{  
    res.redirect('/');
});