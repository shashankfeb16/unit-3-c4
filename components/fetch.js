let countryNews = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    data = data.articles;
    return data
}

let append = (data,container)=>{
    container.innerHTML = " ";
    data.map(({title,description,urlToImage})=>{
        let box = document.createElement("div");
        let image = document.createElement("img");
        image.src = urlToImage;
        image.style.height = "400px"
        image.style.width = "500px"
        let Title = document.createElement("h3");
        Title.innerText = title;
        let dis = document.createElement("p");
        dis.innerText = description;

        let data = {
            urlToImage,
            title,
            description,
        }
        box.addEventListener("click",function(){
            news(data);
        })
        box.append(image,Title,dis);
        container.append(box);

    })
}

let news = (x)=>{
    window.location.href = "news.html";
    localStorage.setItem("news",JSON.stringify(x))
}

export{countryNews,append};