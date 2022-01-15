
  let yogaVid = document.getElementById("YogaVid");
  let playfulVid = document.getElementById("PlayfulVid");
  let inspireVid = document.getElementById("InspireVid");
  let quote = document.getElementById("Quotes");
  let moveVids = ["https://www.youtube.com/embed/M-8FvC3GD8c", "https://www.youtube.com/embed/HIlfzR6F2E4", "https://www.youtube.com/embed/AbVZz509E9A", "https://www.youtube.com/embed/LjRg685h5FU"]
  let funVids = ["https://www.youtube.com/embed/B1CPE6WWsAQ", "https://www.youtube.com/embed/q8Xx9ZS3FaA", "https://www.youtube.com/embed/hDJkFLnmFHU", "https://www.youtube.com/embed/R_tnko74dAo"]
  let inspireVids = ["https://www.youtube.com/embed/VxuWIXdYYyQ", "https://www.youtube.com/embed/7sxpKhIbr0E", "https://www.youtube.com/embed/QijH4UAqGD8", "https://www.youtube.com/embed/H14bBuluwB8"]

  document.getElementById("Movement").onclick = function () {
    if (playfulVid.src !== ""){
        playfulVid.style.display = "none";
    }
    if (inspireVid !== ""){
        inspireVid.style.display = "none";
    }
    yogaVid.src = moveVids[Math.floor(Math.random() * moveVids.length)];
    yogaVid.style.display = "";
}

document.getElementById("Playfulness").onclick = function () {
    if (yogaVid.src !== ""){
        yogaVid.style.display = "none";
    }
    if (inspireVid !== ""){
        inspireVid.style.display = "none";
    }
    playfulVid.src = funVids[Math.floor(Math.random() * funVids.length)];
    playfulVid.style.display = "";
}

document.getElementById("Inspiration").onclick = function () {
    if (playfulVid.src !== ""){
        playfulVid.style.display = "none";
    }
    if (yogaVid !== ""){
        yogaVid.style.display = "none";
    }
    inspireVid.src = inspireVids[Math.floor(Math.random() * inspireVids.length)];
    inspireVid.style.display = "";
}


    const url = "https://type.fit/api/quotes";
    let getQuote = () => {
        fetch(url)
            .then((data) => data.json())
            .then((item) => {
                quote.style.display = "";
                const random = Math.floor(Math.random() * (item.length));
                const text = item[random].text;
                const author = item[random].author;
                console.log(item[0])
                quote.innerText= text + "\n" + author;
            })
    }
    
    document.getElementById("QuickQuote").onclick = function (){
        if (playfulVid.src !== ""){
            playfulVid.style.display = "none";
        }
        if (yogaVid !== ""){
            yogaVid.style.display = "none";
        }
        if (inspireVid !== ""){
            inspireVid.style.display = "none";
        }
        getQuote();
};
    
   

  
