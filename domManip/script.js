const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.style.color = "red";
redP.textContent = "Im redP";

const h3Blue = document.createElement("h3");
h3Blue.style.color = "blue";
h3Blue.textContent = "Im h3Blue";

const divCon = document.createElement("div");
divCon.classList.add("divCon");
divCon.style.border = "black 8px";
divCon.style.backgroundColor = "pink";

const h1D = document.createElement("h1");
h1D.textContent = "Im in a div";
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

divCon.append(h1D, p2);

container.appendChild(content);
container.appendChild(redP);
container.appendChild(h3Blue);
container.appendChild(divCon);
