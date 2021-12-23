const  MongoClient  = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'collegeDB'
const collName = 'college'

var collegeDB
var college

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((client)=>{
        collegeDB = client.db(dbName)
    })
    .then((error)=>{
        console.log(error)
    })


    var