# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI is able to search Spotify for songs, Bands in Town for concerts, and OMDB for movies.
 

## Prereqs

The following Node packages must be installed: 

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   

## Running a Query

**Concert-This**

Enter on command line: `node liri.js concert-this <artist>`
 
The key term: `concert-this` searches the Bands in town API for all available upcoming concerts for the artist. Retrievable Parameters include: venue, location, and date. The date will use Moment.JS to convert to desired format. 

![Concert-This demo](https://github.com/tuayang/liri-node-app/blob/master/images/concert-this.jpg?raw=true)




***

**Spotify This Song**

Enter on command line: `node liri.js spotify-this-song <song title>`
 
The key term: `spotify-this-song` retreives data from the Spotify API. All song titles that contain the search parameter or parts of it are returned. Retrievable Parameters include: artist, song title, song preview link, and the album. If there is no input, the function will return content for "The Sign" by Ace of Base. 

###

![Spotify-this-song demo](https://github.com/tuayang/liri-node-app/blob/master/images/spotify-this-song.jpg?raw=true)

![Spotify-this-song with no input](https://github.com/tuayang/liri-node-app/blob/master/images/spotify-this-song_no_input.jpg?raw=true)

***

**Movie-This**

Enter on command line: `node liri.js movie-this <movie title>`
 
The key term: `movie-this` searches for film titles via the OMDb API. Retrievable Parameters include: movie title, release year, IMDB rating, Rotten Tomatoes rating, country or countries it was filmed in, langauge(s), plot, and actors. If there is no input, the function will return content for "Mr. Nobody".

![Movie-this demo](https://github.com/tuayang/liri-node-app/blob/master/images/movie-this.jpg?raw=true)

![Movie-this with no input](https://github.com/tuayang/liri-node-app/blob/master/images/movie-this_no_input.jpg?raw=true)

***

**Do What It Says**

Enter on command line: `node liri.js do-what-it-says`

The key term: `do-what-it-says` is a command line input that executes content from the random.txt file. The default data is currently set to 'spotify-this-song, I Want It That Way'. The data set may be changed to 'concert-this, *artist name* or 'movie-this, *movie title*'. 

![Do-what-it-says demo](https://github.com/tuayang/liri-node-app/blob/master/images/do-what-it-says.jpg?raw=true)

***
