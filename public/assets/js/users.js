concerts = $(".concerts-container")

$(document).ready(function() {



    getConcerts();
});

function getConcerts(){


    $.ajax("/api/concert", {
        type: "GET"
    }).then(res => {
        
        for( var i = 0; i< res.length; i ++){
           concertBlock = $("<li>")
            //console.log(res[i].artist)
        ticket = $("<div>").addClass("ticket");
        date = $("<div>").addClass("date");
        dateData = $("<span>").addClass("datetime").text(res[i].date);
            date.append(dateData);
        artist = $("<div>").addClass("artist");
        artistData = $("<span>").addClass("name").text(res[i].artist);
            artist.append(artistData);
        location = $("<div>").addClass("location");
        cityState = $("<span>").text(res[i].city +", "+res[i].state);
        br = $("</br>");
        venue = $("<span>").addClass("venue").text(res[i].venue);
            location.append(cityState, br, venue )
        ticket.append(date,artist,location);
        concertBlock.append(ticket)
        }
     


    })
  

   

}
