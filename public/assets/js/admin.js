$(document).ready(() => {

     var concertName = $("#concert-name")
     var concertVenue = $("#venue")
     var concertCity = $("#city")
     var concertState = $("#state")
     var concertDate = $("#time")
    
    addConcertBtn = $('#admin-btn')
    logoutBtn = $(".logout")

    function addConcert(event){
        console.log("clicked")
        event.preventDefault();
        if(!concertName || !concertVenue || !concertCity || !concertState || !concertDate){
            alert("Please fill out all fields");
            return
        }
        $.ajax("/api/concert", {
            data: {
                artist: concertName.val(),
                venue: concertVenue.val(),
                city: concertCity.val(),
                state: concertState.val(),
                date: concertDate.val()
            },
            type: "POST"
        })
    }




    addConcertBtn.on("click", addConcert)
    
});

