//loading icon
window.addEventListener('load', function(){
	const loader = document.querySelector('.loader svg');
	// first create a variable and find it within the HTML document

	loader.classList.add('loader-hidden');
	// to add a class list that is only present within the CSS file

	loader.addEventListener('transitionend', function(){
		document.body.removeChild('loader');
	});
	// add an event listener to listen for when the transition has finished and then have a function be performed
	// remove the loader from the HTML file so that it can disappear and let the rest of the content on the HTML file to appear
});
/* Reference for tutorial:
codefoxx. 2022. HTML, CSS, JavaScript - How to Create and Display a Loading Spinner on Page Load (without JQuery). YouTube video, 06:38. https://www.youtube.com/watch?v=q76TexbMXJg. */

//progress bar at the bottom of the screen
//usage of GSAP's Scroll Trigger
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
	value: 100,
	ease: 'none',
	scrollTrigger: { scrub: 0.3 },
});
/* Reference for tutorial:
Hoebregts, Louis. n.d. “Scroll Progress & Gsap ScrollTrigger.” CodePen. Accessed November 8, 2022. https://codepen.io/Mamboleoo/pen/abdwYaJ. */

// navigation code
// when the window is scrolled have the scrollFunc function occur
window.onscroll = function(){
	scrollFunc();
};
// when user scrolls scrollFunc will occur
/* this is to enable the navigation to stay in the top right corner, without having 
to use position: fixed, as this would break the design of it being in the top right corner */


function scrollFunc(){
	if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
		document.getElementById("nav").style.top = "3vw";
	}
}
// this function is basically sauing when the document moves greater than one then make the nav move 3vw


//what section (section two)
// gets the section id to assign the value within this Splide gallery
let splide = new Splide('#slider1',{
	type: 'loop',
	start: 1,
	arrows: true,
	fixedWidth: '100vw',
	fixedHeight: '80vw',
	pagination: false,
	drag: false
	// options from the Splide website
}).mount();


//second Splide used in the website
// gets the section id to assign the value within this Splide gallery
let splideTwo = new Splide('#slider2',{
	type: 'loop',
	start: 0,
	arrows: true,
	fixedWidth: '100vw',
	fixedHeight: '75vw',
	pagination: false
	// options from the Splide website
}).mount();

//third Splide used in the website
// gets the section id to assign the value within this Splide gallery
let splideThree = new Splide('#slider3', {
	perPage: 3,
	focus: 0,
	omitEnd: true,
	pagination: false,
	arrows: true
	// options from the Splide website
}).mount();


// the function that occurs when the website is loaded
// use of a GSAP function, TimelineMax
function loadScreen(){
	//gsap timeline
	const tl = new TimelineMax({delay: 0.8});
	// state the variable and it's value
	
	tl.from('.title h1', {opacity: 0, y: -50, duration: 1})
	  .from('.hero-imgs.img1', {opacity: 0, x:-50, duration: 0.5 })
	  .from('.hero-imgs.img2',{opacity: 0, y: -50, duration: 0.5 })
	  .from('.hero-imgs.img3', {opacity: 0, x: -50, duration: 0.5})
	  .from('.question-header h2', {opacity: 0, x: -100, duration: 0.5})
	  .from('.statement-header p', {opacity: 0, x: 100, duration: 0.5});
	// the from states that it occurs from where the element has been placed from the CSS file
} 

//function for the third section
// use of a GSAP function, TimelineMax
function thirdScreen() {
	const tl = new TimelineMax ({
		scrollTrigger: {
			trigger: '#why-section'
		}
	// state the variable and it's value

	});

	tl.addLabel("whySection")
		.from('.statement.one', {opacity: 0, x: -50, duration: 1})
		.from('.question.one', {opacity: 0, y:50, duration: 1});
	// the animation occurs from where the element has been placed from the CSS file
}


//function for the fourth section
// use of a GSAP function, TimelineMax
function fourthScreen(){
	const tlTwo = new TimelineMax ({
		scrollTrigger: {
			trigger: '#slider2'
		}
	// state the variable and it's value

	});
	
	tlTwo.addLabel("sliderTwo")
		.from('.statement.two', {opacity: 0, y: -50, duration: 1})
		.from('.splide__slide.two img', {opacity: 0, x: -50, duration: 1})
		.from('.splide__slide.two div', {opacity: 1, y: -500, duration: 1}, '-=1')
		.from('.question.two', {opacity: 0, y: 50, duration: 1});
		// animation occurs from where the element has been placed from the CSS file
}

//function for the example section
function exampleScreen(){
	const tlThree = new TimelineMax ({
		scrollTrigger: {
			trigger: "#slider3"
		}
	// state the variable and it's value

	});
	
	tlThree.addLabel("sliderThree")
		.from('.statement.three', {opacity: 1, xPercent: -100, duration: 1})
		.fromTo('.splide__slide.three img', {opacity: 0}, {opacity: 1, duration: 1})
		.from('.question.three', {opacity: 1, xPercent: 100, duration: 1});
		// the from states that the animation occurs from where the element has been placed within the CSS file
		/* the fromTo states that the animation occurs from one section to another, there are two parts to the 
		animation, hence two different curly brackets with a different value for the opacity */
}
	

//first dialog
const dialog = document.querySelector('.dialog-overview');
const openButton = dialog.nextElementSibling;
const closeButton = dialog.querySelector('sl-button[slot="footer"]');
// to find and give a value to the close button on the bottom right of the Shoelace dialog

openButton.addEventListener('click', () => dialog.show());
closeButton.addEventListener('click', () => dialog.hide());
// to open and close the dialog


//second dialog
const dialogTwo = document.querySelector('.dialog-overview.two');
const openButtonTwo = document.querySelector('.btn.two');
// to find and give a value to the button with a class of "btn two"
const closeButtonTwo = dialogTwo.querySelector('.closebtn.two');
// to find and give a value to the close button on the bottom right of the Shoelace dialog

openButtonTwo.addEventListener('click', () => dialogTwo.show());
closeButtonTwo.addEventListener('click', () => dialogTwo.hide());
// to open and close the dialog


//third dialog
const dialogThree = document.querySelector('.dialog-overview.three');
const openButtonThree = document.querySelector('.btn.three');
// to find and give a value to the button with a class of "btn three"
const closeButtonThree = dialogThree.querySelector('.closebtn.three');
// to find and give a value to the close button on the bottom right of the Shoelace dialog

openButtonThree.addEventListener('click', () => dialogThree.show());
closeButtonThree.addEventListener('click', () => dialogThree.hide());
// to open and close the dialog


// code for the audio
// allows the user to play, pause and resume the sound as they wish
let btnContainer = document.getElementById('sound');
let controlBtn = document.getElementById('play-pause');
// first create variables and give them a value

//create a function
function playPause(){
	if (sound.paused){
		sound.play();
		controlBtn.className = "pause";
	} else {
		sound.pause();
		controlBtn.className = "play";
	}
	/* This function says that the sound is paused when first loaded, and when the sound is played,
	allow for the pause button to appear, else if the sound is paused, let the play button appear
	onto the screen. */
}
/* Reference for this tutorial:
Kusimo, Abidemi. n.d. “Custom Audio Player Play Pause Button.” CodePen. Accessed November 10, 2022. https://codepen.io/abikuk/pen/pGzJGy. */

//This code says to listen for when the controlBtn is clicked
controlBtn.addEventListener("click", playPause);

sound.addEventListener("ended", function() {
	controlBtn.className = "play";
});
/* This code says that the sound will listen for the end of the audio and a function will occur. This
function that will occur is of the play button appearing so that the user can play the sound again. */

loadScreen();
thirdScreen();
fourthScreen();
exampleScreen();
// the functions that will occur when the page is loaded