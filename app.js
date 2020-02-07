const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

//SET TEMPLATE ENGINE
app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

//SET STATIC FOLDER for public files
app.use( express.static(__dirname + '/public') );

//REGISTER THE FOLDER FOR PARTIALS
hbs.registerPartials(__dirname + '/views/partials')

//ROUTES
app.get('/users/:username', (req, res, next) => {  //Gets data from the url that is entered by user
    res.send(req.params)

});


//CREATE A BASIC FUNCTION
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
