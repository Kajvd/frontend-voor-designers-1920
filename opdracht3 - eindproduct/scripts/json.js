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
	


	for (let i = 0; i < movies.length; i++) {
		//console.log(movies[i]);
		var myCover = document.createElement('img');
		myCover.src = movies[i].cover;
		//        myCovers.push(myCover)
		coverChild[i].appendChild(myCover);
		
		var myTitle = document.createElement('h2');
		myTitle.innerHTML = movies[i].title;
		titleChild[i].appendChild(myTitle);
		//        myTitles.push(myTitle);

		
		var myPlot = document.createElement('p');
		myPlot.innerHTML = movies[i].plot.slice(0, 350);
		plotChild[i].appendChild(myPlot);
		//        myPlots.push(myPlot);
		
		var myDate = document.createElement('date');
		myDate.innerHTML = movies[i].release_date;
		dateChild[i].appendChild(myDate);
		//        myDates.push(myDate);
		
		
		var myActors = document.createElement('ul');
		for (let x = 0; x < movies[i].actors.length; x++) {
			let myActor = document.createElement('li');
			myActor.innerHTML = movies[i].actors[x].actor_name;
//			innerActor.push(' ' + movies[i].actors[x].actor_name + ' ');
			myActors.appendChild(myActor);
		}
		actorsChild[i].appendChild(myActors);
//		myActor.innerHTML = innerActor;
		//        myActors.push(myActor);
		
		
		var myReviews = document.createElement('ul');
		for (let x = 0; x < movies[i].reviews.length; x++) {
			let myReview = document.createElement('li');
			myReview.innerHTML = movies[i].reviews[x].score;
			myReviews.appendChild(myReview);
		}
		reviewChild[i].appendChild(myReviews);
	}