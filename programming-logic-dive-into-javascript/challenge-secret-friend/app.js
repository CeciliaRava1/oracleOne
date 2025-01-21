friendList = [];
sorted = false;

function cleanInput() {
    document.getElementById('inputName').value = '';
}

function assignTextToElement(elementID, text) {
    let elementHTML = document.getElementById(elementID);
    elementHTML.innerHTML = text;
}

function addFriend() {
    if (friendList.length >= 9) {
        alert('You can not enter more of 9 names');

    } else {
        let friend = document.getElementById('inputName').value;
        friendList.push(friend);

        let newName = document.createElement('p');
        newName.classList.add('paragraph');
        let newContent = document.createTextNode(friend);
        newName.appendChild(newContent);

        let currentElement = document.getElementById('button');
        document.body.insertBefore(newName, currentElement);
    }

    cleanInput();
}

function addElement(element, clas, content, currentElementID) {
    let newName = document.createElement(element);
    newName.classList.add(clas);
    let newContent = document.createTextNode(content);
    newName.appendChild(newContent);
    let currentElement = document.getElementById(currentElementID);
    document.body.insertBefore(newName, currentElement);
}

function sortFriend() {
    if (sorted == false) {
        sorted = true;
        let i = Math.round(Math.random() * (friendList.length - 1));

        let element = document.querySelector('.paragraph');
        let paragraphs = Array.prototype.slice.call(document.getElementsByClassName('paragraph'), 0);
        for (element of paragraphs) {
            element.remove();
        }

        addElement('p', 'paragraphSorted', `Sorted: ${friendList[i]}`, '#button_sort');
    }
}



function clearPage() {
    let sortedElements = document.querySelectorAll('.paragraphSorted');
    sortedElements.forEach(element => {
        element.remove();
    });

    cleanInput();
    friendList = [];
    sorted = false;
}

