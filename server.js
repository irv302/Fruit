// Require Dependanceies
const { shallowCopy } = require("ejs/lib/utils");
const express = require("express");

const app = express();
const fruits = require('./modles/fruits');

// Express Web Server port Variable
const port = 3000;


app.get("/fruits/", (req, res) => {
  res.render('index.ejs', { allFruits: fruits});
});
//N

//D

//U

//C

//E

//Show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  //render is a special method that
  // informs the template engine to render a template
  // we just provided the names
 res.render('show.ejs', {
   fruit: fruits[req.params.indexOfFruitsArray],//this ref a single fruit and passes 
   //it to the template so we can access it there
 });
});
// tell the app to listen
app.listen(port, () => {
  console.log(`Listening on port`, port);
});

;