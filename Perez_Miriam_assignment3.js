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
	cousin = "Barb",
	numberOfPeople = 4,
	thisSaturday = true,
	thisFriday = false;
	
console.log("We had so much fun on Friday, that we decided to go out again this upcoming " + thisWeekend + ".");

//Method Procedure

var theater = {
	name:"AMC Aventura 24",
	location: "Aventura, FL.",
	price: 11,
	free: false,
	foods: [
		"popcorn",
		"chicken tenders",
		"pizza",
		"mozzarella sticks"
	],
	watchMovie: function () {
		console.log("Does " + cousin + " have tickets for us again? " + theater.free);
	}
}

theater.watchMovie()

if (destination1 === "movies") {
	if (numberOfPeople === 4) {
		console.log("Not a problem.")
		console.log("We'll have to pay $" + theater.price + " per person.");
	} else {
		console.log("This is awesome, I will get to watch another movie for free!!");
	}
} else {
	console.log("We'll all have extra money!");
};

//Method Function

var ticketCounter = {
	workers = "cashiers",
	job = "sale movie tickets",
	names = [
		"Jason",
		"Amy",
		"Chris",
		"Anthony"
	],
	
	