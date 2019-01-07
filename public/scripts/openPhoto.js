/* The object below is where I have all of my variables stored.
 * 'cell' is declaring a variable that query selects all of the 
 * div's in my HTML pages that have the '.cell' class. I have 
 * used the 'cellArray' array to iterate through all of the 
 * aformentioned div's.. I have used the 'cellArray' array in order
 * to use the back/forward arrows that show up on the overlay
 * element that appears. The 'id' variable is used to set the current
 * id attribute of the element clicked by the user. The 
 * 'previous/current/nextId' variables are used to select the 'id'  
 * attribute dedicated to each div, and the 'previous/current/nextPic'  
 * variables are query selectors for the span elements contained within  
 * the overlay div. 
 *
 * (**IMPORTANT UPDATE ON VARIABLE NAMES EXPLAINED BELOW):
 *
 * The 'cellArrayToArray' variable below is the most current variable
 * used by the code in this file. 'cellArray' is ONLY used to 
 * .querySelectorAll() the '.cell' <div>'s,  the job of 'cellArrayToArray'
 * converts 'cellArray' to a manipulatible array that I can apply indexOf()
 * method to. The 'cellArray' variable has an ARRAY-LIKE node-list, but I 
 * can't use the .indexOf() method on a node-list, which was necessary to
 * use in order to iterate through the array of <img> photos.
 *
 * The 'id' variable holds the current 'id' attribute of the <img> element
 * clicked by the user. 
 * 
 * The 'currentIndex' holds the current index value
 * in the 'cellArrayToArray' variable which represents the array of <img>
 * elements.
 *
 * I currently don't use the 'previousId' or 'nextId' variables, but I am
 * keeping them as a reference for the future if needed. Their purpose was 
 * originally to select the ID attributes of the previous and next <img>'s
 * when opening up the overlay div.. They ended up not being used.
 *
 * The 'currentId' is used to select the ID attribute if the current <img>
 * tag
 *
 * The 'previous/current/nextPic' variables are to select the <span> tags 
 * within the overlay <div>. I will explain below how these variables are 
 * used in order to change the <img>'s dynamically within the overlay <div> 
 */
var overlayOptions = {
	TF: false,
	cell: document.querySelector('.cell'),
	cellArray: document.querySelectorAll('.cell'),
	cellArrayToArray: function() {
		return Array.prototype.slice.call(this.cellArray);
	},
	id: null,
	currentIndex: 0,
	previousId: null,
	currentId: null,
	nextId: null,
	previousPic: document.querySelector('#previousPic'),
	currentPic: document.querySelector('#currentPic'),
	nextPic: document.querySelector('#nextPic')
};

/* The function below takes the cellArray array, which contains all of 
 * the div elements that contain PATH's to their specific image files.
 * The function's purpose allows the overlay to appear with each image
 * on the page. I had to create this because by only using 
 * 'document.querySelector('.cell')', this only queries the first div
 * located on the page. The function allows all div's to be clicked in 
 * order to activate the overlay element.
 *
 * (**IMPORTANT**) Additionally, the '.showOverlay' class is enabled here,
 * enabling the overlay <div> to appear. Otherwise, it is hidden when
 * no images are clicked.
 */
const openEvent = function() {
	overlayOptions.cellArray.forEach(() => document.querySelector('.overlay').classList.add('showOverlay'));
	overlayOptions.TF = true;
}

/* The function below receives the 'el' element that was clicked by the 
 * user with an .addEventListener method. Line 90 sets the 'currentIndex'
 * variable to the index of the 'el' element which the user clicked.
 *
 * Next, the 'id' variable is set to the ID attribute of the 'el' element.
 * After, the 'currentId' variable is set to full name of the current cell
 * element. The 'id' variable is only set to the name (ie. cell1) but not
 * its full name (ie. #cell1). After this line, the 'currentPic' variable's
 * innerHTML is set to the <img> tag and all of it's attributes within the 
 * current 'el' that was clicked by the user. 
 */
const getCellId = function(event) {
	var eventId = event.target.parentElement.getAttribute('id').toString();
	var newEventId = eventId.substring(4);
	overlayOptions.currentIndex = newEventId - 1;
	overlayOptions.currentId = document.querySelector('#' + event.target.parentElement.id + '');
	overlayOptions.currentPic.innerHTML = event.target.outerHTML;
	overlayOptions.cellArrayToArray().forEach(function(el) {
		el.addEventListener('click', function() {
			console.log(overlayOptions.cellArrayToArray().indexOf(el));
			overlayOptions.currentIndex = overlayOptions.cellArrayToArray().indexOf(el);
			overlayOptions.id = el.getAttribute('id');
			console.log(overlayOptions.id);
			overlayOptions.currentId = document.querySelector('#' + overlayOptions.id + '');
			overlayOptions.currentPic.innerHTML = overlayOptions.currentId.getElementsByTagName('img')[0].outerHTML;
			console.log(overlayOptions.currentPic);
		})
	});
}

/* The .addEventListener methods below are what allow any of the 
 * <div> elements contained within the '.row' <div> to all be clicked
 * in order to display the overlay <div>. 
 */
document.querySelector('.row').addEventListener('click', openEvent, false);
document.querySelector('.row').addEventListener('click', getCellId, false);

/* The function below query selects the overlay <div> and sets the 
 * '.showOverlay' class off. This turns the visibility for the 
 * overlay <div> as hidden by removing the 'showOverlay' class .
 */
const closeEvent = function() {
	document.querySelector('.overlay').classList.remove('showOverlay');
	overlayOptions.TF = false;
}

/* Below is the .addEventListener method that waits until the <button>
 * tag with the class name '.closeOverlay' is clicked. This calls the 
 * 'closeEvent()' function above, which removes the 'showoverlay' class
 * from the overlay <div>
 */
document.querySelector('#closeOverlay').addEventListener('click', closeEvent, false);

/* The purpose of the function below is the iterate through the array
 * of <img> tags. Within the function, the local variable cellList is 
 * set to the array 'cellArrayToArray()'.
 *
 * The only purpose of the 'if' is to provide a test for whether or not 
 * the 'currentIndex' variable is equal to 0. This signifies that there 
 * are no more pictures to iterate through. 
 *
 * When the 'currentIndex' variable is anything else other than one, the 
 * 'else' statement sets the .innerHTML of the 'currentPic' to the <img> 
 * tag of the 'currentIndex' of the 'cellArrayToArray()' variable. The 
 * next line reduces the value of 'currentIndex' variable by one so that
 * when the 'previousPhoto' <span> is clicked, the previous photo in the
 * 'cellArrayToArray()' array appears. 
 */
const previousPhoto = function() {
	let cellList = overlayOptions.cellArrayToArray();
	console.log(cellList[overlayOptions.currentIndex - 1]);
	if(overlayOptions.currentIndex == 0) {
		overlayOptions.currentIndex = 0;
	}
	else {
		overlayOptions.currentPic.innerHTML = cellList[overlayOptions.currentIndex - 1].getElementsByTagName('img')[0].outerHTML;
		overlayOptions.currentIndex -= 1;
	}
	console.log(overlayOptions.currentIndex);
}
/* The .addEventListener method below activates when the 'previousPhoto'
 * <span> is clicked 
 */
overlayOptions.previousPic.addEventListener('click', previousPhoto, false);

/* The function below activates when the 'nextPhoto' <span> tag is 
 * clicked. It has the same concept as the previousPhoto() function
 * above, so refer to the comment above if you are lost. The function
 * below is different in which instead of looking at the 'currentIndex'
 * variable being at 0, we look at the 'cellArrayToArray().length'. 
 *
 * So, within the 'if' statement, if the 'currentIndex' variable is set 
 * to '.cellArrayToArray.length', then the 'currentIndex' is set to this 
 * value.  
 *
 * The 'else' statement sets the .innerHTML of the 'currentPic' to the <img> 
 * tag of the 'currentIndex' of the 'cellArrayToArray()' variable. The 
 * next line increases the value of 'currentIndex' variable by one so that
 * when the 'nextPhoto' <span> is clicked, the next photo in the
 * 'cellArrayToArray()' array appears. 
 */
const nextPhoto = function() {
	let cellList = overlayOptions.cellArrayToArray();
	console.log(overlayOptions.cellArrayToArray().length);
	if(overlayOptions.currentIndex == overlayOptions.cellArrayToArray().length) {
		overlayOptions.currentIndex = overlayOptions.cellArrayToArray().length;
	}
	else {
		overlayOptions.currentPic.innerHTML = cellList[overlayOptions.currentIndex + 1].getElementsByTagName('img')[0].outerHTML;
		overlayOptions.currentIndex += 1;
	}
	console.log(overlayOptions.currentIndex);
}
overlayOptions.nextPic.addEventListener('click', nextPhoto, false);

/*

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function findPreviousImg(value) {

}
overlayOptions.previousPic = overlayOptions.cellArray.reduce(findPreviousImg);

function findCurrentImg() {
	
}
overlayOptions.currentPic = overlayOptions.cellArray.reduce(findCurrentImg);

el.addEventListener("touchcancel", handleCancel, false);
	el.addEventListener("touchmove", handleMove, false);

function handleStart(evt) {
	evt.preventDefault();
	console.log("touchstart event.");
	var el = document.querySelectorAll('.cell');
	var ctx = el.getContext("2d");
	var touches = evt.changedTouches;


	for(let i = 0; i < touches.length; i++) {
		console.log("touchstart: " + i + "...");
		ongoingTouches.push(copyTouch(touches[i]));

	}
}

function handleEnd(evt) {
	evt.preventDefault();
	console.log("touchend");
	var el = document.querySelectorAll('.cell');
	var ctx = el.getContext("2d");
	var touches = evt.changedTouches;
}

function handleCancel(evt) {
	evt.preventDefault();
  	console.log("touchcancel.");
  	var touches = evt.changedTouches;
  
  	for (var i = 0; i < touches.length; i++) {
    	var idx = ongoingTouchIndexById(touches[i].identifier);
    	ongoingTouches.splice(idx, 1);  
  }
}
*/