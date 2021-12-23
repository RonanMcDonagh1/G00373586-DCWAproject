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

var listModules = function () {
    return new Promise((resolve, reject) =>{

    pool.query(' select * from module')
        .then((result) => {
            resolve(result)
            //res.send(result)
        })
        .catch((error) => {
            reject(error)
           // res.send(error)
        }) 
    })
}



module.exports = { listModules }