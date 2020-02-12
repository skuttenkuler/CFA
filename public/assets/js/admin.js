$(document).ready(() => {


    
    addConcertBtn = $('#admin-btn')

    function addConcert(event) {
        event.preventDefault();
        console.log("clicked")
    }







    addConcertBtn.on("click", addConcert)

});

