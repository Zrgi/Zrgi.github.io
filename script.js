function getUser() {
    var b = localStorage.getItem("uName");
    document.getElementById('box').innerHTML = "Hello " + b;
}

