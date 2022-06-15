const body = document.body;

const article = document.createElement("article");

const div = document.createElement("div");

const pseudo = document.createElement("p");
pseudo.innerText = "Pseudo";

const sponso = document.createElement("p");
sponso.innerText = "sponsored";

const threepoint = document.createElement("p");
threepoint.innerText = "...";

const header = document.createElement("div");
header.id = "header";

const img = document.createElement("img");
img.src="img/User_Avatar_2.png";



body.appendChild(article);
article.appendChild(header);
header.appendChild(img);
header.appendChild(div);
div.appendChild(pseudo);
div.appendChild(sponso);
div.appendChild(threepoint);