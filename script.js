var addBtn = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.getElementsByTagName('ul')[0];

// Check Length of input Field
function addItemLength() {
    return document.getElementById('userInput').ariaValueMax.length;
}
