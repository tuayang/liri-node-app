// package to set what are known as environment variables to the global `process.env` object in node

require("dotenv").config();

// code for import 
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('Node-Spotify-API');
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require('fs');


// CLI input variables 

var task = process.argv[2];
var input = process.argv.slice(3).join(' ');

// console.log(choice);


startLiri(task)

function startLiri(task) {

    if (task === "concert-this") {
      concertThis(input);
    }
    if (task === "spotify-this-song") {
      spotifyThis(input);
    }
    if (task === "movie-this") {
      movieThis(input);
    }
    if (task === "do-what-it-says") {
      dowhatitSays();
    }
  }

// concert-this CLI code

  function concertThis(input) {

    console.log(input);
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
      function (response) {
      
        response.data.forEach(band => {
          console.log("Venue: " + band.venue.name)
          console.log("City/Region: " + band.venue.city + ", " + band.venue.region)
          console.log("Country: " + band.venue.country)

          // moment used to parse date and time and converted to local time
         
          console.log("Event Date: " + moment(band.datetime).format('MM/DD/YYYY'))
          console.log("\n=========================\n")
        })
      }
    );
  }

// spotify-this-song CLI code

  function spotifyThis(input) {

    // code for when input is left blank
    
    if (!input) {
      input = "The Sign Ace of Base";
    }

    // code for spotify search 

    spotify.search({ type: 'track', query: input }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
          console.log("\n=========================\n")
          console.log("Artist(s): " + data.tracks.items[0].artists[0].name)
          console.log("Song: " + data.tracks.items[0].name)
          console.log("Preview link: " + data.tracks.items[3].preview_url)
          console.log("Album: " + data.tracks.items[0].album.name);
          console.log("\n=========================\n")
    });
  }


// movie-this CLI code


  function movieThis(input) {

    // code for when input is left blank
    
    if (!input) {
      input = "Mr. Nobody";
    }
  
    // code for axios search on OMDB

    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=6316fd3").then(
      function (response) {
  
        console.log("\n=========================\n")
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("\n=========================\n")
      }
    )
  };
  

// do-what-it-says CLI code


function dowhatitSays() {

  fs.readFile("random.txt", "utf8", function (error, data) {
    var content = data.split(",");
    var randomTask = content[0];
    var input = content[1].split('"').join('');

    // code for random search based on content in random.txt
    
    if (error) {
      return console.log(error);
    }

    if (randomTask === "concert-this"){
      concertThis(input);
    }
    if (randomTask === "spotify-this-song"){
      spotifyThis(input);
    }
    if (randomTask === "movie-this"){
      movieThis(input);
    }

  });
}