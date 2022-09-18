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
                        // var position = "venues?postal_code=" + zipCode; 
                        // var distance = "&range=" + distanceRadius;
                        

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
                            
                    /*    fetch(seatGeekUrl)
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
                                

                            }}); */
        
                          /*  .then(function (data) {
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
                                    
    
                                }}); */
                                
                        // var position = "venues?postal_code=" + zipCode; (maybe /venues?)
                        // var distance = "&range=" + distanceRadius;
                        // var seatGeekUrl = "https://api.seatgeek.com/2/performers?q=" +artistArray+ "venues?postal_code=" +zipCode+ "&range=" +distanceRadius+ "&client_id=MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1";
        }
     })
   }
   app.getRelated()
 } 

 $('.searchBtn').on('click', (event) => {
    const history = document.getElementsByClassName('searchHistory')
    const artists = $("#searchArtists").val();
    localStorage.setItem('artist', artists)

    let search = localStorage.getItem('artist')

   console.log(search)
   $(history).append(search);

    // let searchEl = $('<div></div>'); 
    // $(searchEl).addClass("searchHistory");   
    // const userHistory = localStorage.getItem('artist')
    // $(userHistory).append(searchEl)
    
})

let getUpcomingShow = function (data) {
    let seatGeekKey = "MjkwNjEzNzF8MTY2MzAxMTM4OC40OTQ4NTc1"
    var seatGeekUpcomingUrl = `https://api.seatgeek.com/2/events&client_id=${seatGeekKey}`;
    fetch(seatGeekUpcomingUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))
}
    getUpcomingShow()


    // const ulList = document.getElementById('city-ul-list')
    // const btn = document.createElement('button');
    // btn.setAttribute('id', 'history-button')
    // btn.textContent = userInput.toUpperCase();
    // ulList.appendChild(btn);
    






// Event handler for saving artists to local storage
//$(".saveIcon").on("click", function() })

