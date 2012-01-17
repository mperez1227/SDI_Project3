/* Miriam Perez
January 16, 2012
Deliverable 3
"Fun Times"
*/

//alert("JavaScript works!");

//Global Variables

var movieType1 = "comedy",
	movieType2 = "action",
	movieType3 = "drama",
	actionFilm = '"Mission: Impossible"',
	comedyFilm = '"Jack & Jill"',
	dramaFilm = "Girl with the dragon tattoo",
	destination1 = "movies",
	destination2 = "dinner",
	destination3 = "play pool",
	thisWeekend = "Saturday",
	numberOfPeople = 4,
	thisSaturday = true,
	thisFriday = false;
	


var theater = {
	name:"AMC Aventura 24",
	location: "Aventura, FL.",
	price: 11,
	foods: [
		"popcorn",
		"chicken tenders",
		"pizza",
		"mozzarella sticks"
	],
	goToAventure: function () [
		console.log("We are going to the movies.");
	}
};

var key = "name";

console.log(theater[key]);

theater.goToAventura