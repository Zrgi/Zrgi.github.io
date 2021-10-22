function getUser() {
    var b = localStorage.getItem("uName");
    document.getElementById('para').innerHTML = "Hello " + b;
}

