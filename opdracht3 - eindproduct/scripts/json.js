let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;


    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i]);

        var myTitel = document.createElement('h2');
        myTitel.innerHTML = movies[i].title;
        document.body.appendChild(myTitel);

        var myCover = document.createElement('img');
        myCover.src = movies[i].cover;
        document.body.appendChild(myCover);

        var myDatum = document.createElement('date');
        myDatum.innerHTML = movies[i].release_date;
        document.body.appendChild(myDatum);
    }
}


    