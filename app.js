var express = require("express"),
	app = express(),
	bodyParser = require("body-parser")
	mongoose = require("mongoose")


// APP CONFIG
mongoose.connect("mongodb+srv://dbEvelyn:51NUusrOk4QUVMPc@cluster0-9wj0x.mongodb.net/final-project?retryWrites=true&w=majority")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

var movieSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String
})

var Movie = mongoose.model("Movie", movieSchema)


// ROUTES

app.get("/", function(req, res){
	res.redirect("/movies")
})

// INDEX PAGE
app.get("/movies", function(req, res){
	Movie.find({}, function(err, movies){
		if(err){
			console.log("ERROR")
		} else {
			res.render("index", {movies: movies})
		}
	})
})

app.listen(3000, console.log("Movie App has started"))