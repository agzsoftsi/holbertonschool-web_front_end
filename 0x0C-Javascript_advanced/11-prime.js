/**
  * @description - Task 11
  * @function countPrimeNumbers - Count the number of primes from 2 to 100 100 times
  * @returns {Number} number of primes
  */


 function countPrimeNumbers() {
    /**
     * @var {Boolean} isPrime - define True if number is prime or false if not
     * @var {Number} countPrimes - counter of primes
     * @var {Number} i - iterator
     * @var {Number} end - limit of the check
     * @var {Number} mod - mod of a number
     */
    let isPrime;
    let countPrimes=0; 
	for (let i = 2; i <= 100; i++)
	{
		isPrime = true;
		let end = Math.round(Math.sqrt(i)); 
		for (let mod = 2; mod <= end; mod++) {
			if (i%mod == 0) {
				isPrime = false;
				break; 
			}
		}
		if (isPrime) {
			countPrimes = countPrimes + 1; }

	}
	console.log(countPrimes);
	return countPrimes;
}
    /**
     * API to measure the time 100 Times
     * @var {Number} startCountPrimeNumbers - define start time before execution
     * @var {Number} endCountPrimeNumbers - define end time after execution
     * @var {Number} j - Iterator
     */
let startCountPrimeNumbers = window.performance.now();
for (let j = 1; j < 101; j++){
    countPrimeNumbers();
}
let endCountPrimeNumbers = window.performance.now();

    /**
     * Changing stack order using setTimeout
     */
setTimeout (function() { 
    console.log("Execution time of calculating prime numbers 100 times was " + (endCountPrimeNumbers - startCountPrimeNumbers) + " milliseconds.");}, 0);