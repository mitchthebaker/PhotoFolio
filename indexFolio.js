const express = require('express');
const PORT = process.env.PORT || 5003;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/scripts')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/main', (req, res) => res.render('pages/main1'));
app.get('/about', (req, res) => res.render('pages/about'));
app.get('/cali', (req, res) => res.render('pages/cali'));
app.get('/contact', (req, res) => res.render('pages/contact'));
app.get('/france', (req, res) => res.render('pages/france'));
app.get('/iceland', (req, res) => res.render('pages/iceland'));
app.get('/italy', (req, res) => res.render('pages/italy'));
app.get('/portraits', (req, res) => res.render('pages/portraits'));
app.get('/wildlife', (req, res) => res.render('pages/wildlife'));
app.listen(PORT);