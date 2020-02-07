$(document).ready(function(){
    //ARTIST
    const artistBtn =$('#artist-btn');
    const artistType = $('#artist-type');
    const artistEmail = $('#artist-email');
    const artistPass = $('#artist-pass');
    const artistName = $('#artist-name');

    //USER
    const userBtn =$('#user-btn');
    const userType = $('#user-type');
    const userEmail = $('#user-email');
    const userPass = $('#user-pass');
    const userName = $('#user-username');

    //LOGIN
    const ArtistLoginBtn =$('#artist-login-btn');
    const UserLoginBtn =$('#user-login-btn');
    const loginEmail = $('#login-email');
    const loginPass = $('#login-pass');
    
//handle register
function handleArtistRegister(event){
    console.log("clicked")
    event.preventDefault();
    if(!artistEmail || !artistPass || !artistName){
        alert("Please fill out all fields");
        return
    }
    $.ajax('api/artists/register', {
        data: {
            type: artistType.val().trim(),
            email: artistEmail.val().trim(),
            password: artistPass.val().trim(),
            name: artistName.val().trim()
        },
        type: "POST"
    })
}
//handle user register
function handleUserRegister(event){
    console.log("clicked")
    event.preventDefault();
    if(!userEmail || !userPass || !userName){
        alert("Please fill out all fields");
        return
    }
    $.ajax('api/users/register', {
        data: {
            type: userType.val().trim(),
            email: userEmail.val().trim(),
            password: userPass.val().trim(),
            username: userName.val().trim()
        },
        type: "POST"
    })
}
//handle login
function handleArtistLogin(event){
    console.log("clicked")
    event.preventDefault();
    if(!loginEmail || !loginPass){
        alert("Please fill out all fields");
        return
    }
    $.ajax('api/artists/login', {
        data: {
            email: loginEmail.val().trim(),
            password: loginPass.val().trim(),
            
        },
        type: "POST"
    }).then(
        function(response) {
            if(response) {
                console.log(response);
                return
            }
        });
    }

//Login User
function handleUserLogin(event){
    console.log("clicked")
    event.preventDefault();
    if(!loginEmail || !loginPass){
        alert("Please fill out all fields");
        return
    }
    $.ajax('api/users/login', {
        data: {
            email: loginEmail.val().trim(),
            password: loginPass.val().trim(),
            
        },
        type: "POST"
    }).then(
        function(response) {
            if(response) {
                console.log(response);
                return
            }
        });
    }


//eventHandlers
artistBtn.on("click", handleArtistRegister);
userBtn.on("click", handleUserRegister);
ArtistLoginBtn.on("click", handleArtistLogin);
UserLoginBtn.on("click", handleUserLogin);
});
