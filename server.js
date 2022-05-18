// Require Dependanceies
const express = require("express");
const fruits = require('./modles/fruits');

const app = express();
// Express Web Server port Variable
const port = 3000;

// app.use((req, res, next) => {
//   console.log("I run for all routes")
//   next()
// });

//near the top, around other app.use() calls
// this add data to req. body so we can access it in create action
app.use(express.urlencoded({ extended: false }));

// Index
app.get("/fruits/", (req, res) => {
  res.render('index.ejs', { allFruits: fruits});
});
//N
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs")
});
//D

//U

//C

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false //do some data correction
  }
  fruits.push(req.body)
  console.log(fruits)
  res.redirect("/fruits")
})
//E

//Show
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  //render is a special method that
  // informs the template engine to render a template
  // we just provided the names
 res.render('show.ejs', {
   fruit: fruits[req.params.indexOfFruitsArray]//this ref a single fruit and passes 
   //it to the template so we can access it there
 });
});
// tell the app to listen
app.listen(port, () => {
  console.log(`Listening on port`, port);
});

;