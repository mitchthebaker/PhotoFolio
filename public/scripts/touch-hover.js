var v = {
	contactDetails: document.querySelector('.contact-details-a'),
	contactSpan: document.querySelector('.contact-span'),
	contactArrow: document.querySelector('.contact-arrow'),
	aboutSpan: document.querySelector('.about-span'),
	aboutArrow: document.querySelector('.about-arrow'),
	aboutDetails: document.querySelector('.about-details-a'),
	instaIcon: document.querySelector('.insta-icon'),
	gitIcon: document.querySelector('.git-icon'),
	aOption: document.querySelectorAll('.option-a')
};

v.aOption.forEach(function(a) {
	a.addEventListener("touchstart", function(evt) {
		var touchObj = evt.changedTouches[0];
		a.style.transition = 'linear 0.2s';
		a.style.backgroundColor = '#9A9A9A';
		a.style.color = 'black';
		console.log('start of contactDetails touch');
		/* #BBBBBB */
	}, false);
	a.addEventListener("touchend", function(evt) {
		var touchObj = evt.changedTouches[0];
		a.style.transition = 'linear 0.2s';
		a.style.backgroundColor = 'transparent';
		a.style.color = 'white';
		console.log('end of contactDetails touch');
	}, false);
});

v.contactDetails.addEventListener("touchstart", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.contactDetails.style.transition = 'linear 0.2s';
	v.contactDetails.style.backgroundColor = '#9A9A9A';
	v.contactDetails.style.color = 'black';
	v.contactSpan.style.color = 'black';
	v.contactArrow.style.color = 'black';
	console.log('start of contactDetails touch');
}, false);
v.contactDetails.addEventListener("touchend", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.contactDetails.style.transition = 'linear 0.2s';
	v.contactDetails.style.backgroundColor = 'transparent';
	v.contactDetails.style.color = 'white';
	v.contactSpan.style.color = 'white';
	v.contactArrow.style.color = 'white';
	console.log('end of contactDetails touch');
}, false);
v.aboutDetails.addEventListener("touchstart", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.aboutDetails.style.transition = 'linear 0.2s';
	v.aboutDetails.style.backgroundColor = '#9A9A9A';
	v.aboutDetails.style.color = 'black';
	v.aboutSpan.style.color = 'black';
	v.aboutArrow.style.color = 'black';
	console.log('start of aboutDetails touch');
}, false);
v.aboutDetails.addEventListener("touchend", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.aboutDetails.style.transition = 'linear 0.2s';
	v.aboutDetails.style.backgroundColor = 'transparent';
	v.aboutDetails.style.color = 'white';
	v.aboutSpan.style.color = 'white';
	v.aboutArrow.style.color = 'white';
	console.log('end of aboutDetails touch');
}, false);
v.instaIcon.addEventListener("touchstart", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.instaIcon.style.transition = 'linear 0.2s';
	v.instaIcon.style.backgroundColor = '#9A9A9A';
	v.instaIcon.style.color = 'black';
	console.log('start of instaIcon touch');
}, false);
v.instaIcon.addEventListener("touchend", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.instaIcon.style.transition = 'linear 0.2s';
	v.instaIcon.style.backgroundColor = 'transparent';
	v.instaIcon.style.color = 'white';
	console.log('end of instaIcon touch');
}, false);
v.gitIcon.addEventListener("touchstart", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.gitIcon.style.transition = 'linear 0.2s';
	v.gitIcon.style.backgroundColor = '#9A9A9A';
	v.gitIcon.style.color = 'black';
	console.log('start of gitIcon touch');
}, false);
v.gitIcon.addEventListener("touchend", function(evt) {
	var touchObj = evt.changedTouches[0];
	v.gitIcon.style.transition = 'linear 0.2s';
	v.gitIcon.style.backgroundColor = 'transparent';
	v.gitIcon.style.color = 'white';
	console.log('end of gitIcon touch');
}, false);
console.log("initialized.");