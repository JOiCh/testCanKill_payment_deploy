const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var count = 0

app.use(bodyParser.text());
// express app

// listen for requests
app.listen(3000)// 製造出server實例

app.get('/', (req, res) => {
    count = count + 1
    res.send("敲了第"+count+"次") // 等於res write + res end動作 
})

app.post('/postTest', (req, res) => {
    count = count + 1
    res.send("敲了第"+count+"次????") // 等於res write + res end動作 
    console.log(req.body)
})