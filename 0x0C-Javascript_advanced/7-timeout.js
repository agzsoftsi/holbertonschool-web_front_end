/**
  * @description - Task 7
  * @function setTimeout
  * @var {Number} i - iterator
  */
console.log("Start of the execution queue");
setTimeout (function(){ 
                        console.log("Final code block to be executed");
                      }, 0);
for (let i = 1; i < 101; i++) {
	console.log(i);
}
console.log("End of the loop printing");