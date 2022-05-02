// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { countryNews,append } from "../components/fetch.js";

let search = (e)=>{
    if(e.key=="Enter"){
        console.log("inside func")
       let query = document.getElementById("search_input").value;
       let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
       let container = document.getElementById("results");
       countryNews(url).then((res)=>{
        append(res,container);
        })

    }
}


document.getElementById("search_input").addEventListener("keydown",search)