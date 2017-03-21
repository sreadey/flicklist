

var api = {
	root: "https://api.themoviedb.org/3",
	token: "3856666bbcd0424b3579af479d1ee845" // TODO put your api key here
}
// v4 auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODU2NjY2YmJjZDA0MjRiMzU3OWFmNDc5ZDFlZTg0NSIsInN1YiI6IjU4ZDEyMjBkYzNhMzY4MzhmOTAwYTY5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P6P34El8PU411Qd45_tUYxwRIR4HhcwQOw4ruyNLCec
/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
