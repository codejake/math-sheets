const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const by = urlParams.get('by');


var Numbers = {
	1: "Ones",
	2: "Twos",
	3: "Threes",
	4: "Fours",
	5: "Fives",
	6: "Sixes",
	7: "Sevens",
	8: "Eight",
	9: "Nines",
	10: "Tens",
};

function getRandomNumber() {
	return Math.floor((Math.random() * 10) +1);
}

function getBy() {
	console.log("getBy() called. Returned: " + by);
	return by;
}