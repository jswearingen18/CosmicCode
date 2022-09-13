var artists = "";
var apiKeyTD = "442081-DavidHer-JPC29JEG";
<<<<<<< HEAD
// var apiKeyTM = "FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3";
// var tasteDiveURL = "https://tastedive.com/api/similar?q=";
// var ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=";
var searchHistory = [];



=======
var searchHistory = [];


>>>>>>> main
// Event Handler for Search Artists Button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();
    // artists = $("searchArtistsInput").val();
   const  artistInput = document.getElementById('searchArtists').value
    console.log(artistInput)
    // Function for returning artist recommendation
    getRecArtist(artists);
//  getBandShows
//  saveSearchedArtist

// connecting button to api's
    app.getRelated()
    ticketMaster();
});

var getRecArtist = (artists) => {
 // fetch function goes here
<<<<<<< HEAD
 app.getRelated()
=======
>>>>>>> main
}


// getting the tasteDive api. 
const app = {};
app.apiKey = '442081-DavidHer-JPC29JEG';
<<<<<<< HEAD
// app.apiURL = 'http://tastedive.com/api/similar?info=1&q=' + artistInput + '&k=442081-DavidHer-I9V9LHL5'
// the api gives a wikipedia link,  a teaser, a id, and a link to youtube ... but
// I am not sure how to get 'nirvana' to link to a variable input like above. ex. let userInput = document.getElementById('searchArtists').value
// but if you type in a band in the link, the api does work. 
=======
>>>>>>> main
app.apiURL = 'http://tastedive.com/api/similar?info=1&q=' + 'Nirvana' + '&k=442081-DavidHer-I9V9LHL5'
app.getRelated = function (search) {
    $.ajax({
        type: 'GET',
        data: {
            k: app.apiKey,
            q: search,
            type: 'music',
            info: 1,
<<<<<<< HEAD
            // format:"jsonp",
            // format:"jsonp"
            // callback:"jsonp_callback"
        },
        url: app.apiURL,
        dataType: "jsonp",
        // jsonpCallback: 'jsonp_callback',
        // contentType: 'application/json'
=======
        },
        url: app.apiURL,
        dataType: "jsonp",
>>>>>>> main
    }).then(function (res) {
        console.log('dataRetrieved', res);
    });
};


<<<<<<< HEAD
// not sure what this does.. if anything? 
//Document ready
// (function () {
//   app.getRelated("red hot chili peppers, pulp fiction");
// });


// getting the ticketMaster api 


// const ticketmasterURL = 'https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3';
// this is an example url with our api key below 
const ticketmasterURL = 'https://app.ticketmaster.com/discovery/v1/events.json?apikey=FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3'



function ticketMaster () {
  fetch(ticketmasterURL)
=======
// getting the ticket master api 

// key FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3
// info on api https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
// to get attraction id &attractionId='

let city = 'nashville'
ticketMasterURL = 'https://app.ticketmaster.com/discovery/v2/events.json?city=&classificationName=music&apikey=FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3';

function  ticketMaster() {
  fetch(ticketMasterURL)
>>>>>>> main
  .then((response) => response.json())
  .then((data) => console.log(data));
}

<<<<<<< HEAD
ticketMaster();
=======

>>>>>>> main
