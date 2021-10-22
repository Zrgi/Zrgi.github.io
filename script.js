var candy;

function userName() {
    candy = document.getElementById("box").value; //saves the input of top box as [candy]
    localStorage.setItem('uName',candy); //create local storage key with value of [candy]
    location.href = "two.html"; //automatically take user to page "two.html"
}
