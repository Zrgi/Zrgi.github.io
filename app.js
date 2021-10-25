var fieldValue;

function saveName() {
    fieldValue = document.getElementById('textfield').value;
    localStorage.setItem('uName',fieldValue);
    location.href = 'page2.html';
}

function getUser() {
    var b = localStorage.getItem("uName");
    document.getElementById('placeholder').innerHTML = "Hello " + b;
}

