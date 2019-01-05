/* I've declared an object here that I am using in order 
 * to incapsulate all of my data.. I am trying to reduce
 * the amount of global variables I am using and write 
 * cleaner code this way. I should also start looking into
 * JavaScript classes but it is not needed here as I am only
 * writing small bits of code in this app
 */
var options = {
	isOpen: false,
	dropbtn: document.querySelector('.hamburger'),
	navBarDiv: document.createElement('div'),
	left: document.querySelector('#left'),
	right: document.querySelector('#right'),
	top: document.querySelector('#top'),
	bottom: document.querySelector('#bottom'),
	navBarDiv1: document.querySelector('.navBarOptions')
};

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

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
		options.navBarDiv.style.opacity = 1;
		options.navBarDiv.style.animation = "fadein 0.8s"; 
		options.left.style.opacity = 0;
		options.right.style.opacity = 0;
		options.top.style.opacity = 0;
		options.bottom.style.opacity = 0;
		document.body.appendChild(options.navBarDiv);
		options.isOpen = true;
	}
	else {
		options.navBarDiv.style.opacity = 0;
		options.navBarDiv.style.transition = "all 0.8s ease-in-out";
		options.left.style.opacity = 1;
		options.right.style.opacity = 1;
		options.top.style.opacity = 1;
		options.bottom.style.opacity = 1;
		options.isOpen = false;
	}
} 

 */