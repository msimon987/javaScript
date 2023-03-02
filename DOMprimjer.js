var y = document.createElement("h1");
y.innerText = "ovo je nas header";

//(1)
var div = document.getElementsByClassName("description")[0];
div.parentNode.insertBefore(y, div);
//(2)
var divInfo = document.createElement("div");
divInfo.className = "info";

var foot = document.getElementById("footer")[0];
div.parentNode.insertBefore(divInfo, foot);

