friendList = [];

function addFriend() {
    let friend = document.getElementById('inputName').value;
    friendList.push(friend);
}

console.log(friendList);