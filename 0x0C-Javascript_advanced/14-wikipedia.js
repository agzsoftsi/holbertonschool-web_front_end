/**
  * @description - Task 14
  * @function createElement - Create Paragraph on body
  * @param {String}  data - text of the response
  */

function createElement(data) {

    /**
     * @var {Object}  paragraph - create paragraph
     * @var {Object}  content - create text
     */
    
    let paragraph = document.createElement("p");
	let content = document.createTextNode(data);
	paragraph.appendChild(content);
	document.body.appendChild(paragraph);
}

/**
  * @function queryWikipedia - Simple callback
  * @param {Object}  callback - text of the response
  * @var {Object} request - data of API resquest
  */

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    request.onreadystatechange = function (event) {
      if(request.readyState === 4) {
            if(request.status === 200) { callback(JSON.parse(request.responseText).query.pages[21721040].extract) } 
            else {
                const error = new Error('Error');
                return callback(error, null);
                }
      }
    }
    request.send();
}

queryWikipedia(createElement);