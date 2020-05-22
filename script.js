// smooth scroll

var scroll = new SmoothScroll('[data-scroll]', {
	speed: 500,
	speedAsDuration: true
});

// typing animation

const texts = ["Hi, I am Bai.", "Junior Developer. I aspire to deliver smart solutions that serve the community."];
let count = 0; // 0 - h1, 1 - h2
let index = 0; // index of letters
let currentText = "";
let letter = "";
let h1 = document.querySelector('.h1-typing'); 
let h2 = document.querySelector('.h2-typing'); 
let button = document.querySelector('.view-projects'); 


(function h1type(){
	currentText = texts[count]; // start with 0 aka h1 first

	// for(let index=1; index<(currentText.length+1); index++){
	// 	letter = currentText.slice(0, index);
	// 	h1.textContent = letter; 
	// };

	letter = currentText.slice(0, ++index); 
	h1.textContent = letter; 

	if (letter.length == currentText.length) {
		h1.classList.add('hide-border'); 
		h2.style.display = 'block';
		index = 0; 
		return setTimeout(h2type, 200); 
	}
	setTimeout(h1type, 100); 

})();


function h2type(){
	currentText = texts[1]; 
	letter = currentText.slice(0, ++index); 
	h2.textContent = letter; 

	if(letter.length == currentText.length) {
		return callToAction(); 
	}

	setTimeout(h2type, 50); 

}

function callToAction(){ 
	button.style.opacity = '1'; 
	
}

// click about-tab

aboutTab = document.getElementById('about-tab');
projectsTab = document.getElementById('projects-tab'); 
aboutSection = document.querySelector('.section-about')
projectSection = document.querySelector('.section-project-gallery'); 

// modal 
projectImg = document.querySelector('.img-wrapper'); 
modal = document.querySelector('.modal'); 

aboutTab.addEventListener('click', function(e) {
	if (!aboutTab.classList.contains('current-tab')){
		aboutTab.classList.add('current-tab'); 
		projectsTab.classList.remove('current-tab'); 
	
		projectSection.classList.add('hide'); 
		aboutSection.classList.remove('hide');
	}
  });


projectsTab.addEventListener('click', function(e) {
	if (!projectsTab.classList.contains('current-tab')) {
		projectsTab.classList.add('current-tab'); 
		aboutTab.classList.remove('current-tab'); 

		aboutSection.classList.add('hide'); 
		projectSection.classList.remove('hide');

	}
  });


projectImg.addEventListener('click', function(e) {
	modal.style.display = 'block'; 

  });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}}; 