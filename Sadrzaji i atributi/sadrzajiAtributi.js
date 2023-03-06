//1
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";
console.log("h1 inner html=" + h1.innerHTML);
console.log("h1 text content=" + h1.textContent)
console.log("h1 inner text =" + h1.innerText)

//2
var divDescription = document.querySelector(".description");
console.log(divDescription.innerHTML)

divDescription.innerHTML = "Grad na <h3>5 rijeka</h3>";
console.log("inner: " + divDescription.innerHTML)

//3

var info = document.querySelector(".info");
info.textContent = "Peta rijeka je Piva"
console.log(info.textContent)

//4
var rijeke = ["Kupa", "Korana", "Dobra", "Mreznica", "Karlovacko pivo"];
var footer = document.getElementById("footer");

for (let i = 0; i < rijeke.length; i++ ) {
    footer.querySelectorAll("li")[i].innerText = rijeke[i];
}

