 /**
   * @description - Task 1
   * @var {String} globalVariable - it contains a text
   */

let globalVariable = "Welcome";

/**
 * @function outer - Show alert with one valiable and one function inner
 */

function outer() {
	alert(globalVariable);
	/**
     * @var {String} course - it contains a text
     */
	let course = "Holberton";

    /**
     * @function inner - Show alert with two concatenate valiables and one function inner
     */
	function inner() {
		alert(globalVariable + ' ' + course);
        /**
         * @var {String} exclamation - it contains a character
         */
		let exclamation = "!";

         /**
          * @function inception - Show alert with three concatenate valiables
          */
		function inception() {
			alert(globalVariable + ' ' + course + exclamation);
		}
		inception();
	}
	inner();
}
outer();