/**
  * @description - Task 13
  * @var {object} user
  * @function logWelcomeUser - Create the welcome message
  * @param {String}  welcomeString
  * @var {String} bindLogWelcomeUser
  */
let user = {
	hobby: "Calligraphy",
	favoriteSport: "Hockey",
	astrologicalSign: "Aries",
	firstName: "Buillaume",
	lastName: "Ialva",
	location: "Telaviv",
	occupation: "Engineer"
};

function logWelcomeUser(welcomeString) {
console.log(welcomeString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Hello');