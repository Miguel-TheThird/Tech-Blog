const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const expressHandlebars = exphbs.create({}); // Create an instance of Handlebars

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');



app.engine('handlebars', expressHandlebars.engine);//engine is a call back function from handlebars that take our template and produce a result
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('App is listening to Port: ' + PORT));
});