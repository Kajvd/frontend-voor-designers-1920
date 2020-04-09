let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

//var myCovers = []
//var myTitles = []
//var myPlots = []
//var myDates = []
//var myActors = []


let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;

    // alles van de films met JS aanmaken en niet alvast in HTML zetten
    // mochten het in de toekomst ooit meer of minder films worden, dan gaat het op die manier nog steeds goed.

    for (let i = 0; i < movies.length; i++) {

        console.log(movies[i]);
        // de containers aanmaken
        let flipCardContainer = document.createElement("div");
        let flipCard = document.createElement("div");
        // een id toevoegen aan de buitenste container - je weet maar nooit of dat handig wordt
        flipCardContainer.id = "movie" + movies[i].id;
        flipCardContainer.classList.add("flip-card-container");

        flipCard.classList.add("flip-card");

        flipCardContainer.append(flipCard);

        // de voorkant van de kaart aanmaken, vullen en aan de container toevoegen	
        let cardFront = document.createElement("div");
        let figureFront = document.createElement("figure");
        let cover = document.createElement("img");
        let title = document.createElement("figcaption");

        cardFront.classList.add("card-front");

        cover.src = movies[i].cover;
        figureFront.appendChild(cover);
        title.innerHTML = movies[i].title;
        figureFront.appendChild(title);

        cardFront.appendChild(figureFront);
        flipCard.appendChild(cardFront);

        // de achterkant van de kaart aanmaken, vullen en aan de container toevoegen
        let cardBack = document.createElement("div");
        let figureBack = document.createElement("figure");


        // plot
        let plot = document.createElement("figcaption")
        plot.innerHTML = movies[i].simple_plot;
        figureBack.appendChild(plot);



        // video 
        let trailer = document.createElement("video");
        let trailerSource = document.createElement("source");
        trailerSource.src = movies[i].trailer;
        trailerSource.setAttribute("type", "video/mp4");
        trailer.appendChild(trailerSource);
        trailer.setAttribute("controls", "true");
        figureBack.appendChild(trailer);



        cardBack.classList.add("card-back");



        cardBack.appendChild(figureBack);
        flipCard.appendChild(cardBack);

        // dan nog de hele kaart aan de html toevoegen
        document.body.appendChild(flipCardContainer);
    }
}





// donker/licht functie 

var donkerKnop = document.querySelector(".dark")
var lichtKnop = document.querySelector(".licht")
var bodyElement = document.querySelector("body")

function licht(e) {
    document.body.style.backgroundColor = "white";
    document.querySelector(".text1").style.color = "#1c1e22"
    document.querySelector(".text2").style.color = "#1c1e22"
}

function donker(e) {
    document.body.style.backgroundColor = "#1c1e22";
    document.querySelector(".text1").style.color = "#fff"
    document.querySelector(".text2").style.color = "#fff"

}

function doeKeypress(e) {
    var key = event.key;
    if (key === 'd' || key === 'D') {
        donker(e);
    } else if (key === 'l' || key === 'L') {
        licht(e);
    }
}

donkerKnop.addEventListener("click", donker)
lichtKnop.addEventListener("click", licht);
bodyElement.addEventListener('keypress', doeKeypress);
