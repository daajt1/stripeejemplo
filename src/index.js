const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');


const app = express();

app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',expbhs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'),'layouts'),
  partialsDir: path.join(app.get('views'),'partials'),
  extname: '.hbs'
}));

app.set('view engine','.hbs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/routes'));

//static files

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=> {
    console.log('server on port',3000);
})