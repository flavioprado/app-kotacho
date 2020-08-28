const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
 
app.use(express.static(path.join(__dirname, 'dist', 'app-kotacho')))
 
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'dist', 'app-kotacho', 'index.html'))
})

console.log('listen on port '+port)
 
app.listen(port)
