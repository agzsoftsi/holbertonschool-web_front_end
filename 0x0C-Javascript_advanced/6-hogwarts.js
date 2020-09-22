/**
  * @description - Task 6
  * @function studentHogwarts - Private methods with closure
  * @returns return an object
  */

function studentHogwarts() {
    /**
     * Declarate Private variables
     * @var {Number} privateScore
     * @var {String} name
     */
    let privateScore = 0;
	let name = null;
    
    /**
     * Private Method
     * @function changeScoreBy - increment score by points
     * @param {String} points
     */
    function changeScoreBy(points) {
        privateScore = privateScore + points;
	}

	return {
            /**
             * Public Methods that return objects
             * @function setName - Setter a Name
             * @param {String} newName
             * ***********************************
             * @function rewardStudent - Setter Reward +1
             * ***********************************
             * @function penalizeStudent - Setter a Penalize -1
             * ***********************************
             * @function getScore - Getter name + score
             * @returns string
             */
            setName(newName) {
                name = newName;
            },
    
            rewardStudent() {
                changeScoreBy(1);
            },
    
            penalizeStudent() {
                changeScoreBy(-1);
            },
            getScore() {
                return name + ": " + privateScore;
            }
	}
}

/**
 * @var {Any} harry - that is an instance of studentHogwarts
 * @var {Any} draco - that is an instance of studentHogwarts
 */
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());