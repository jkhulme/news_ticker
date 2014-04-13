//alert(height());
var newDiv = document.createElement("div");
newDiv.id = "jkhulme";
newDiv.style.position = "fixed";
newDiv.style.width = width() + "px";
newDiv.style.height = "20px";
newDiv.style.background = "red";
newDiv.style.color = "white";
newDiv.style.top = height()-20 + "px";
//newDiv.style.top = "0px";
newDiv.style.left = "0px";
newDiv.innerHTML = "Hello";
var newContent = document.createTextNode("Hi there and greetings!");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

function height(){
   return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
}

function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}
