const express = require('express');
const exprsBars = require('express-handlebars');
const path = require('path');

const app = express();

const users = [
    {
        username: "masha22",
        password: "bsgdhjkwdjj"
    },
    {
        username: "galia234",
        age: "hdfeveugwi8u4"
    },
];

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname, 'views'));


app.engine('.hbs', exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('main')
});

app.post('/', (req, res) => {

    const {username, password} = req.body;
    const userValidation = users.some(user => (user.username === username && user.password === password));

    if (userValidation) {
        res.render('hello', {username});
    } else {
        res.render('main', {message: 'Invalid email or password, or you are not registered!'});
    }
});


app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {

    const {username, password} = req.body;
    const userIsReg =  users.some(user => user.username === username);

    if (userIsReg) {
        res.render('register', {message: 'You are already registered.'});
    } else {
        users.push({username, password});
        res.redirect('/');
    }

});

app.get('/users', (req, res) => {
    res.render('users', {users});
});


app.listen(5555, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Hello from 5555...');
    }
});
