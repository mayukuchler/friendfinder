const fs = require("fs");
const path = require("path");
var friendsList = fs.readFileSync(path.join(__dirname, "friends.json"));
var friends = JSON.parse(friendsList);
module.exports = friends;