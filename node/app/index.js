const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    
    connection.query(`DELETE FROM people`)
    connection.query(`ALTER TABLE people AUTO_INCREMENT = 1`)

    connection.query(`INSERT INTO people(name) VALUES ('ANDRE')`)
    connection.query(`INSERT INTO people(name) VALUES ('BRUNO')`)
    connection.query(`INSERT INTO people(name) VALUES ('CAIO')`)
    connection.query(`INSERT INTO people(name) VALUES ('DIOGO')`)
    connection.query(`INSERT INTO people(name) VALUES ('EDUARDO')`)
    connection.query(`INSERT INTO people(name) VALUES ('FREDERICO')`)
    connection.query(`INSERT INTO people(name) VALUES ('GUSTAVO')`)
    connection.query(`INSERT INTO people(name) VALUES ('HERIQUE')`)

    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
          <h1>Full Cycle!</h1>
          <ol>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
          </ol>
        `)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})