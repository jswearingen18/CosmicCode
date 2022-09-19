const inputVal = document.getElementById('searchArtists')
const input = inputVal.value;
let searchHistory = [];
let performers = [];
let shows = [];

// #distance-data div for reset later 
// var DistanceDataOriginal = $(#distance-data").html()

// Event handler for search artists button
$(".searchBtn").on("click", (event) => {
    event.preventDefault();

// Search values retrieved 
    const artists = $("#searchArtists").val();
    
    //var zipCode = $("#zip-code").val().trim();
    //var distanceRadius = $("distance-data").val().trim();

// Function for returning artist recommendation
    getRecArtist(artists);
    findEvents ();

});

let getRecArtist = (artists) => {
   
   // Getting the Taste Dive API data
   const app = {};
   app.apiKey = '442081-DavidHer-I9V9LHL5';
   app.apiURL = `http://tastedive.com/api/similar?info=1&q=${artists}&k=${app.apiKey}`
   app.getRelated = function (search) {
       $.ajax({
           type: 'GET',
           url: app.apiURL,
           dataType: "jsonp",
       })
        .then(function (data) {
           let artistList = document.querySelector(".artistList");
            
                for (var i = 0; i < 30; i++) {
                
                    let artistArray = data.Similar.Results[i].Name;
                        performers.push(data.Similar.Results[i].Name)
                        
                        let seatGeekKey = "MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1"
                        let seatGeekUrl = `https://api.seatgeek.com/2/performers?q=${artistArray}&client_id=${seatGeekKey}`;
                       
                        fetch(seatGeekUrl)
                        .then((response) => response.json())
                        .then(function (data) {
                            let artistName = $("<a href = " + data.performers[0].url + " target=_blank></a>");
                            let artistBox = $('<div></div>'); 
                            let saveIcon = $("<button>+</button>");
                            if (data.performers[0].has_upcoming_events) { 
                                $(artistList).append(artistBox);
                                $(artistBox).addClass("artists");
                                $(artistBox).append(artistName)
                                $(artistName).append(artistArray);
                                $(artistName).attr(data.performers[0].url)
                                $(artistBox).append(saveIcon);
                                $(saveIcon).addClass("icon");                           
                             }});
        }
     })
   }
   app.getRelated()
 } 

 $('.searchBtn').on('click', (event) => {
    const history = document.getElementsByClassName('searchHistory')
    const artists = $("#searchArtists").val();
    localStorage.setItem('artist', artists)


   const historyList = document.querySelector('.searchHistory ul')
   const search = $("#searchArtists").val().toUpperCase();
   let newLi = document.createElement('li')  // Creates <li></li>
   newLi.innerText = search
   historyList.appendChild(newLi)
   localStorage.setItem('artist', search)
//    $(history).append(search);
})


function findEvents (data) {
    let seatGeekKey = "MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1";
    let eventsUrl = `https://api.seatgeek.com/2/venues?per_page=500&country=US&client_id=${seatGeekKey}`;
    fetch(eventsUrl)
    .then((response) => response.json())
    .then(function (data) {
        for (var i = 0; i < 500; i++) {
        if (data.venues[i].has_upcoming_events) {
            console.log(data.venues[i]);
        } 
    }
    })   
}

