const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();
app.use(express.static('./template'))
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(443, '0.0.0.0', () => {
    console.log(`Server started on port ${443}`)
})