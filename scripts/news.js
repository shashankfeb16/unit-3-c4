// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

var news = JSON.parse(localStorage.getItem("news"));

var container = document.getElementById("detailed_news")

let box = document.createElement("div");
let image = document.createElement("img");
image.src = news.urlToImage;
let Title = document.createElement("h3");
Title.innerText = news.title;
let dis = document.createElement("p");
dis.innerText = news.description;
box.append(image,Title,dis);
container.append(box);