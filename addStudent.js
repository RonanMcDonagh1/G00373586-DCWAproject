const res = require('express/lib/response');
var mysql = require('promise-mysql');

var pool

mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'collegeDB'
})
    .then((result) => {
        pool = result
    })

    .catch((error) => {
        console.log(error)
    });

var addStudent = function(sid, name, gpa) {
    return new Promise((resolve, reject) => {

       /* let mysqlQuery = {
            sql: "insert into student (sid, name, gpa) values (?, ?, ?)",
            values: [sid, name, gpa]
        }*/

        //pool.query(mysqlQuery.sql[sid, name, gpa])
        pool.query('INSERT INTO student(sid, name, gpa) VALUES(?, ?, ?)', [sid, name, gpa], (error, result))
            .then((result) => {
                resolve(result)
                res.redirect('/listStudent')
            })
            .catch((error) => {
                reject(error)
            })
    })
}

module.exports = { addStudent }