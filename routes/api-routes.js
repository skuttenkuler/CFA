
module.exports = function(app) {

//register user and artist
app.post("/register", (req, res) => {
    console.log(req.body.type)
})
};