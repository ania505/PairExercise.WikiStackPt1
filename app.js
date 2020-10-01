const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static(__dirname, '/public'));
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('hello world')
})


const PORT = 1337;
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})