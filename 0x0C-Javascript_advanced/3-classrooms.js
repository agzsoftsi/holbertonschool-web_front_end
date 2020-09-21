 /**
   * @description - Task 3
   * @function createClassRoom - create aclass room of students
   * @param {Number} numbersOfStudents number of student
   * @returns {Number} - return the number of Students
   */

function createClassRoom(numbersOfStudents){
    /**
     * @function studentSeat - define number of student seats
     * @param {Number} seat number of set
     * @returns {Number} - return the number of seats
     */
    function studentSeat(seat){
        return function(){
            return seat
        }
    }
    /**
     * @var {Array} students - number of Students
     * @var {Number} start - Iterator
     */
    let students = [];
  
    for (let start = 0; start < numbersOfStudents; start++){
        students.push(studentSeat(start+1));
    }
    return students;
}
let classRoom = createClassRoom(10);