//Holds all the routes for our app

const Profile= require('./profile');

let homeRoute = function(request, response){

	if (request.url === '/'){

		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/plain');

		//Placeholders
		response.write('Header\n');
		response.write('Search\n');
		response.write('Footer\n');
		response.write('home page pickles\n');
		response.end('Jarvis: Hello World\n');
	}

}

let userRoute = function(request, response){
	let username = request.url.replace('/','');

	if (request.url.length > 1){
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/plain');

		response.write(typeof(username));

		//Get json from Treehouse
		let studentProfile = new Profile(username);

		function test (){
			//
		}

		//end stream
		studentProfile.on("end", test);

		studentProfile.on('error', function(error){

			console.error(error.message);
		});

		response.end('Jarvis: USER PAGE SQUISHY\n');
	}
}

module.exports.home = homeRoute;
module.exports.user = userRoute;