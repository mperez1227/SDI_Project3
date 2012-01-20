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
	workers: "cashiers",
	job: "sale movie tickets",
	names: [
		"Jason",
		"Amy",
		"Chris",
		"Anthony"
	],
	buyTickets: function () {
		console.log("My boyfriend will purchase his and my ticket to watch a " + movieType1 + " with my cousin and her husband.");
		console.log("He is called to the ticket counter and the cashier who attends him is " + ticketCounter.names[2] + ".");
	}

}
ticketCounter.buyTickets()
	
for (var tickets = 1; tickets < 3; tickets ++) {
	console.log(ticketCounter.names[2] + " hands my boyfriend ticket number " + tickets + ".");
	for (var voucher = 1; voucher < 2; voucher ++) {
		console.log(ticketCounter.names[2] + " also gives my boyfriend a voucher.");
	}	

};

//Method Accessor

var restaurant = {
	name: "Red Lobster", 
	server: "Marie",
	seats: 4,
	haveDinner: function() {
		console.log("We purchased our movie tickets " + restaurant.seats + " hours earlier so that we can go have dinner before watching the movie.");
	}
}
restaurant.haveDinner()

if (movieType1 === "action") {
	if (cousin !== "Barb") {
		console.log("We are so hungry!")
	} else {
		console.log("There is nowhere nearby to go eat.");
	}
} else {
	console.log("We decided to go eat at " + restaurant.name + ".");
};

//Method Mutator

var dish = {
	name: "Shrimp Alfredo",
	ingredients: [
		"shrimp",
		" linguine",
		" alfredo sauce"
	],
	dishChoice: function() {
		console.log("I chose to have " + dish.name + " for dinner.");
		console.log("It's my favorite dish, which brings " + dish.ingredients + ".");
	}
}
dish.dishChoice()