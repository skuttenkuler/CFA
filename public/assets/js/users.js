concerts = $(".concerts-container")

$(document).ready(function() {



    getConcerts();
});

function getConcerts(){


    $.ajax("/api/concert", {
        type: "GET"
    }).then(res => {
        
        for( var i = 0; i< res.length; i ++){
            let name = res[i].artist;
            let timeday = res[i].date;
            let city = res[i].city;
            let state = res[i].state;
            let club = res[i].venue;
        

           concertBlock = $("<li>")
            //console.log(res[i].artist)
        var ticket = $("<div>").addClass("ticket");
        var date = $("<div>").addClass("date");
        var dateData = $("<span>").addClass("datetime").text(timeday);
            date.append(dateData);
        var artist = $("<div>").addClass("artist");
        var artistData = $("<span>").addClass("name").text(name);
            artist.append(artistData);
        var location = $("<div>").addClass("location");
        var cityState = $("<span>").text(city +", "+ state);
        var br = $("</br>");
        var venue = $("<span>").addClass("venue").text(club);
            location.append(cityState, br, venue )
        ticket.append(date,artist,location);
        concertBlock.append(ticket)
        concerts.append(concertBlock    )
        }
     


    })
  

   

}
