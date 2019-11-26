
var friends = require("../data/friends");
console.log(friends);

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        //console.log(req.body);   
        var newFriend = req.body;
        console.log(newFriend.name);
        console.log(newFriend.photo);
        console.log(newFriend.scores);

        var closestMatch = 100000;
        var bestMatch=newFriend;
        for (var i = 0; i < friends.length; i++) {
            var differenceSum = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                if (friends[i].scores[j] > newFriend.scores[j]) {
                    differenceSum += friends[i].scores[j] - newFriend.scores[j];
                }
                else {
                    differenceSum += newFriend.scores[j] - friends[i].scores[j];
                }

            }

            if (differenceSum < closestMatch) {
                closestMatch = differenceSum;
                bestMatch = {
                    name: friends[i].name,
                    photo: friends[i].photo
                }
            }

        }

        friends.push(req.body);        
        res.json(bestMatch);
    });

};
