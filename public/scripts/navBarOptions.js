/* I've declared an object here that I am using in order 
 * to incapsulate all of my data.. I am trying to reduce
 * the amount of global variables I am using and write 
 * cleaner code this way. I should also start looking into
 * JavaScript classes but it is not needed here as I am only
 * writing small bits of code in this app
 *
 * (**CURRENT UPDATE ON MEANINGS OF VARIABLES):
 * 
 * I was using 'isOpen' for the previous function I developed 
 * which is no longer being used. 'dropbtn' query selects the 
 * 'hamburger' class for the hamburger icon, the 'container'
 * variable selects the <div> with class 'container', the variable
 * 'navBarDiv' is now redundant, (I should remove it because it was
 * also used with the previous function but I am keeping it just as 
 * a reference to the previous code) 
 *
 * (**IMPORTANT):
 *
 * The 'navBarDiv1' variable is what I am currently using to select
 * the <div> with class name 'navBarOptions'. The variable 'navBarDiv1'
 * is used within the .addEventListener below to toggle a class onto the
 * <div> with class name 'navBarOptions' which changes the visibility of
 * this function when it is toggled on and off. 
 */
var options = {
	isOpen: false,
	dropbtn: document.querySelector('.hamburger'),
	container: document.querySelector('.container'),
	navBarDiv: document.createElement('div'),
	navBarDiv1: document.querySelector('.navBarOptions')
};

/* The function below checks whether the 'element' parameter
 * specified has the 'cls' (class name) parameter provided.
 * The function returns true or false depending on if the 
 * element contains the class name or not.
 */
function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/* Below is the .addEventListener method that waits for a 
 * click response from the navBar/hamburger icon in the top
 * right of the screen. 
 * 
 * The 'if' statement uses the hasClass() function above to
 * check whether the <div> with class name 'navBarOptions' 
 * does not have the 'showNavBar' class name included within
 * the <div>.. (**The purpose of the 'shownavBar' div is to 
 * turn the visibility of the <div> to VISIBLE) If this is true,
 * then the class 'showNavBar' is added to the 'navBarOptions' <div>
 *
 * The 'else' statement uses the same hasClass() function and 
 * checks whether the 'navBarOptions' <div> has the 'showNavBar'
 * class. The 'else' statement automatically executes by default
 * because if the 'if' statement doesn't execute, this applies that 
 * the 'navBarOptions' <div> does not have the 'showNavBar' class.
 * Within the 'else' statement, the class 'showNavBar' is then removed,
 * which turns the visibility of the <div> back to HIDDEN
 *
 * Lastly, the final line of code toggles the 'is-active' class for the
 * hamburger icon, changing the icon's look.
 */
options.dropbtn.addEventListener('click', function() {
	if(!(hasClass(options.navBarDiv1, 'showNavBar'))) {
		console.log('navBarDiv does not have showNavBar class, adding..');
		options.navBarDiv1.classList.add('showNavBar');
	} else {
		console.log('navBarDiv does have showNavBar class, removing..');
		options.navBarDiv1.classList.remove('showNavBar');
	}
	
	options.dropbtn.classList.toggle('is-active');
});

/* There is currently a small bug where even though the navBar 
 * has an opacity of 0, I am still able to click on it's options
 * when on the page. I should try to fix this using display in CSS
 
(**UPDATE) --> Fixed the note that I had included above.. The function
below was what I was using previously to create the navBar as well as
opening and closing it.. I ended up finding a much simpler way to
implement this process with much less code.. (the updated code is used
above) I am keeping the old function here within a comment so that I can
look back at the work I did if needed.. at first I was really happy that
it worked, it did it's job initially but there were a few bugs such as the
one I mentioned above where I was still able to click on the elements
even though the <div> was set at display: none. 

 function openNavBar() {
	options.navBarDiv.setAttribute("class", "navBarOptions");
	options.navBarDiv.innerHTML = '<a class="option-a" href="cali.html">' +
								  	'<span class="navLink"> Cali </span>' +
								  '</a>' +
								  '<a class="option-a" href="france.html">' +
								  	'<span class="navLink"> France </span>' +
								  '</a>' +
								  '<a class="option-a" href="iceland.html">' +
								  	'<span class="navLink"> Iceland </span>' +
								  '</a>' +
								  '<a class="option-a" href="italy.html">' +
								  	'<span class="navLink"> Italy </span>' +
								  '</a>' +
								  '<a class="option-a" href="portraits.html">' +
								  	'<span class="navLink"> Portraits </span>' +
								  '</a>' +
								  '<a class="option-a" href="wildlife.html">' +
								  	'<span class="navLink"> Wildlife </span>' +
								  '</a>' +
								  '<a class="option-a" href="contact.html">' +
								  	'<span class="navLink"> Contact </span>' +
								  '</a>' +
								  '<a class="option-a" href="about.html">' +
								  	'<span class="navLink"> About </span>' +
								  '</a>';
	console.log(options.navBarDiv);
	console.log(options.isOpen);

	if(options.isOpen == false) {
		options.navBarDiv.style.visibility = 'visible';
		options.navBarDiv.style.animation = "fadein 1s";
		document.body.appendChild(options.navBarDiv);
		

		options.navBarDiv.style.display = "block";
		options.container.style.display = "none";
		
		options.isOpen = true;
	}
	else {
		options.navBarDiv.style.visibility = 'hidden';
		options.navBarDiv.style.transition = "linear 0.8s";
		
		
		
		options.navBarDiv.style.transition = "all 1s ease-in-out";
		options.navBarDiv.style.display = "none";
		options.container.style.display = "block";
		
		options.isOpen = false;
	}
}
*/