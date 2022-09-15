const apiKeyTD = "442081-DavidHer-JPC29JEG";
const inputVal = document.getElementById('searchArtists')
const input = inputVal.value;
var searchHistory = [];
var performers = [];
var shows = [];

// #distance-data div for reset later 
// var DistanceDataOriginal = $(#distance-data").html()


// Event handler for search artists button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();

// Search values retrieved (Would need to make a form?)
    const artists = $("#searchArtists").val();
    
    //var zipCode = $("#zip-code").val().trim();
    //var distanceRadius = $("distance-data").val().trim();

// Function for returning artist recommendation
    getRecArtist(artists);

// Function for returning upcoming shows
    getSeatGeek();
});


var getRecArtist = (artists) => {
   
   // Getting the Taste Dive API data
   const app = {};
   app.apiKey = '442081-DavidHer-JPC29JEG';
   app.apiURL = 'http://tastedive.com/api/similar?info=1&q=' +  artists + '&k=442081-DavidHer-I9V9LHL5'
   app.getRelated = function (search) {
       $.ajax({
           type: 'GET',
           data: {
               k: app.apiKey,
               q: search,
               type: 'music',
               info: 1,
           },
           url: app.apiURL,
           dataType: "jsonp",
       })
       
        .then(function (data) {
           console.log(data);
           var artistList = document.querySelector(".artistList");

                for (var i = 0; i < 5; i++) {
                    var artistName = $("<li></li>");
                    let artistArray = data.Similar.Results[i].Name;
                    // console.log(artistArray);

                        $(artistList).append(artistName);
                        $(artistName).addClass("artists");
                        $(artistName).append(artistArray);

                        performers.push(data.Similar.Results[i].Name)
                        //  console.log(performers);

                        // var position = "venues?postal_code=" + zipCode; (maybe /venues?)
                        // var distance = "&range=" + distanceRadius;
                        // var seatGeekUrl = "https://api.seatgeek.com/2/performers?q=" +artistArray+ "venues?postal_code=" +zipCode+ "&range=" +distanceRadius+ "&client_id=MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1";
        }
     })
   }
   app.getRelated()
 } 


 // Getting the Seat Geek API data
function  getSeatGeek() {

    var seatGeekUrl = `https://api.seatgeek.com/2/performers?q=${performers}&type=band&per_page=2000&client_id=MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1`;

    fetch(seatGeekUrl)
       .then((response) => response.json())
       .then(function (data) {
            console.log(data)
        

                // gets performer names from seat geek 
                for( let i = 0; i < 5; i++) {
                    let sgData = data.performers[i].name;
                    // console.log(sgData)
                    shows.push(data.performers[i].name);
        }
    })
    compare()
  }


// Function to compare Taste Dive and Seat Geek results 
function compare () {
    console.log(shows)
    console.log(performers)
}


// to-do: 
// compare shows and performers together and get a match 
// display the matched shows and performers 
// filter out matched shows by zip code, or location