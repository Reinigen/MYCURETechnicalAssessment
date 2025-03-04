let Data = require("../data/users.json");

module.exports.deleteDuplicateUser = (req, res) => {
  const seen = new Set();
  const filteredData = [];

  console.log(`Data length before is ${Data.length}`);

  Data.forEach((user) => {
    if (!seen.has(user.id)) {
      seen.add(user.id);
      filteredData.push(user);
    }
  });

  Data = filteredData;

  console.log(`Data length after is ${Data.length}`);
  return res.json({
    message: "Duplicate Users Deleted",
    data: Data,
  });
};

module.exports.friendToUser = (req, res) => {
  // Need to change the users friends from a list of ids to a list of objects
  const users = Data.map((user) => user);

  // 1st Step: Need to loop through the users
  // 2nd Step: Need to loop through the users friends
  // 3rd Step: Need to update the users friends to use the user object instead of just the IDs

  Data.forEach((user) => {
    let friendArr = [];
    for (let i = 0; i < user.friends.length; i++) {
      console.log(user.friends[i]);
      let friend = users.find((friend) => friend.id === user.friends[i]);
      friendArr.push(JSON.parse(JSON.stringify(friend)));
    }
    user.friends = friendArr;
  });

  return res.json({
    message: "Users Updated",
    data: Data,
  });
};
