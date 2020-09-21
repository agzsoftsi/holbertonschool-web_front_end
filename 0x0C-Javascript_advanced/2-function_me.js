 /**
   * @description - Task 2
   * @function welcomeMessage - Show Alert
   * @param {String} fullname complete Name
   */

function welcomeMessage(fullName) {
	alert("Welcome " + fullName);
}

/**
 * callback guillaume - Show alert with name Guillaume
 */
guillaume = function () { 
    welcomeMessage("Guillaume")
};
/**
 * callback alex - Show alert with name Alex
 */
alex = function () {
     welcomeMessage("Alex")
};
/**
 * callback fred - Show alert with name Fred
 */
fred = function () {
     welcomeMessage("Fred")
};