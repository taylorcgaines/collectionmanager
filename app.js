const express = require("express");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();
// const mongoose = require("mongoose");
// const homeRoutes = require("./routes/home");
// const collectionRoutes = require("./routes/collection");
// const apiRoutes = require("./routes/api");
app.engine('mustache', mustache());
app.set("view engine", 'mustache');
// app.set("layout", 'layout');
app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/collection');

// app.use(homeRoutes);
// app.use(collectionRoutes);
// app.use(apiRoutes);


app.listen(3000, function(){
  console.log("zoomiezoom!")
});

app.get('/', function(req, res){
   res.render("index")
});
