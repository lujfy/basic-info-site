
const express = require('express')
const path = require('path')



const app = express()
app.use(express.static('public'))

app.use('/' , express.static(path.join(__dirname + '/public')))

app.use((req , res) => {
    res.status(404)
    res.send(`<h1>This page does not exist </h1>`)
})

app.listen(3000 , () => {
    console.log("App listening in port 3000")
})

