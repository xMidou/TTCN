const express = require('express');
const app = express();
const path = require('path');
const userRoute = require('./routes/user');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('index', {title: 'Tan ngu vl', log: 'ABCCCCCC'});
})
app.use('/user', userRoute);

app.listen(3000);