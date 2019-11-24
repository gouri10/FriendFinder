
var friends = require("../data/friends");
console.log(friends);

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body);
        friends.push(req.body);

        var friend={
            name:"gouri",
            photo:"dkjcbdbjv"
        }
        res.json(friend);
    });

};
