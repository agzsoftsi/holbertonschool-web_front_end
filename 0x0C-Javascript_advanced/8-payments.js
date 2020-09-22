/**
  * @description - Task 8
  * @function processPayment - show the Collecting payment
  * @param {Number} amount - Value of payment
  */
function processPayment(amount) {
	console.log("Collecting payment of " + amount);
}

/**
  * @function processOrder - show the Processing payment order
  * @param {Number} amount - Value of payment
  * @param {Number} orderId - Id of the payment
  */

function processOrder(orderId, amount) {
	console.log(orderId + " is being processed");
	processPayment(amount);
	console.log(orderId + " has been fully processed");
}

/** Main part of the code - call the all process of the payment orders
 * 
 */
console.log("Processing orders");
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);
console.log("All the orders have been processed");