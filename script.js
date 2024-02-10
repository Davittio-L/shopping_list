var addBtn = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.getElementsByTagName('ul')[0];

// Check Length of input Field
function addItemLength() {
    return document.getElementById('userInput').ariaValueMax.length;
}

// Check how many list elements exist
function checkList() {
    return document.getElementsByTagName('li').length;
}

// Create new list items
function createListItem() {
    var li = document.createElement('li');
    li.classList.add('listItem');
    li.append(document.createTextNode(input.value));
    li.addEventListener('click', toggleDone);
    ul.appendChild(li);
    input.value = '';
}

// Create delete button - style it and append to li
var deleteButton = document.createElement('button');
var delX = document.createElement('i');
delX.classList.add('fas', 'fa-times');
deleteButton.classList.add('custBtn');
deleteButton.appendChild(delX);
deleteButton.addEventListener('click', delItem);
li.append(deleteButton);
