var artists = "";
var apikeyTD = "442081-DavidHer-JPC29JEG";
var apikeyTM = "FskGqxyeT5Cc6gGb9olDTAvqKCLwfpT3";
var tastediveURL = "https://tastedive.com/api/similar?q=";
var ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=";
var searchHistory = [];

// Event Handler for Search Artists Button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();
    artists = $("searchArtists").val();
    // Function for returning artist recommendation
    getRecArtist(artists);
//  getBandShows
//  saveSearchedArtist
});

var getRecArtist = (artists) => {
 // fetch function can go here 
}