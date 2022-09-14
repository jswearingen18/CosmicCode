var artists = "";
var apiKeyTD = "442081-DavidHer-JPC29JEG";
var searchHistory = [];
const inputVal = document.getElementById('searchArtists')
const input = inputVal.value;
var performers = [];
// Event Handler for Search Artists Button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();
    var artists = $("#searchArtists").val();
    // Function for returning artist recommendation
    getRecArtist(artists);

// connecting button to api's
    getseatGeek();
});

var getRecArtist = (artists) => {
   
   // getting the tasteDive api. 
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
       }).then(function (data) {;
           console.log(data);
           var artistList = document.querySelector(".artistList");
           for (var i = 0; i < 5; i++) {
            var artistName = $("<li></li>");
               let artistArray = data.Similar.Results[i].Name;
               console.log(artistArray);
               $(artistList).append(artistName);
                $(artistName).addClass("artists");
                $(artistName).append(artistArray);
                performers.push(data.Similar.Results[i].Name)
        }
    });

   }; 
   app.getRelated()
}
function  getseatGeek() {
    console.log(performers);
    var seatgeekurl = `https://api.seatgeek.com/2/performers?q=${performers}&client_id=MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1`;
    fetch(seatgeekurl)
    .then((response) => response.json())
    .then((data) => console.log(data));
  }