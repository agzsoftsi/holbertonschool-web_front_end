 /**
   * @description - Task 0
   * @function welcome - It concatenates two parameters
   * @param  {String} firstName  Space Delimited sequence of names.
   * @param  {String} lastName   A period separating the initials.
   */

   function welcome(firstName, lastName) 
    {
       /**
        * @var {String} fullName - It containts the concatenation of two arguments 
        */
        const fullName = firstName + ' ' + lastName;
       /**
        * @function displayFullName - It should display an alert with the message
        */
        function displayFullName()
            {
                alert('Welcome ' + fullName + '!');
            }
            displayFullName();
    }