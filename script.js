var candy;

function getName() {
    candy = document.getElementById('box').value;
    localStorage.setItem('uName',candy);
    location.href = 'two.html';
}

function getUser() {
    var b = localStorage.getItem("uName");
    document.getElementById('placeholder').innerHTML = "Hello " + b;
}

