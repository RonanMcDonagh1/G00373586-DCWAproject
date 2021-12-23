var express = require('express');

//Importing in the required var
var listStudents = require('./listStudents')
var listModules = require('./listModules')
var addStudent = require('./addStudent')

var app = express()

app.set('view engine', 'ejs')//Sets the view engine as express js

app.engine('html', require('ejs').renderFile);//Allows the main page (HTML) to be rendered 

app.get('/', (req, res) => {
        res.render('homepage.html');//Renders the homescreen 
})

app.get('/students', (req, res) => {
    listStudents.listStudents()
        .then((result)=> {
            res.render('listStudents', {students:result})//When url is changed to students, it will list out the students
        })

        .catch((error)=> {
            res.send(error)
        })
})

app.get('/modules', (req, res) => {
    listModules.listModules()
        .then((result)=> {
            res.render('listModules', {modules:result})//When url is changed to Module, it will list out the modules
        })

        .catch((error)=> {
            res.send(error)
        })
})

app.get('/addStudent', (req, res) => {
    res.render('addStudent', {errors:undefined, sid:"", name:"", gpa:"", });//
    //res.send("This will addStudent")
})

app.post('/addStudent', (req, res) => {
    //console.log(req.body)
    
    res.redirect('/students')//Once the submit button is pressed on the add student page it will redirect to the students list
})

app.listen(3004, () =>{
    console.log("Listening on port 3004")//Listening on localhost to display the web application
})