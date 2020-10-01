const express = require('express');
const morgan = require('morgan');
const app = express();
// const html = require('html-template-tag');
// ^^ potentially move to different file
const layout = require('./views/layout');
const { db, Page, User } = require('./models');
// const wiki = require('./wiki.js');
// const users = require('./users.js');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
    })

app.use(express.static(__dirname + '/public'));
/* if you use path.join use a , between __dirname & 
/public, if not using path.join use a + */
app.use(express.urlencoded({extended:true}));
app.use('/wiki', require('./routes/wiki.js'));
app.use('/users', require('./routes/users.js'));

app.get('/', (req, res, next) => {
    try {
        res.send(layout(''));
    } catch (error) {
        next(error);
    }
    
})

const connect = async () => {
    await db.sync({force: true});
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    })
}

connect();

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`listening on port: ${PORT}`);
// })