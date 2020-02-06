const UserForm = $('#user-form');
const ArtistForm =$('#artist-form');


UserForm.on("click", (event) => {
    console.log("clicked")
    event.preventDefault();

});
ArtistForm.on("click", (event) => {
    console.log("clicked")
    event.preventDefault();

});