var scroll = new SmoothScroll('[data-scroll]', {
	speed: 500,
	speedAsDuration: true
});


// click about-tab

aboutTab = document.getElementById('about-tab');
projectsTab = document.getElementById('projects-tab'); 
aboutSection = document.getElementById('section-about');
projectSection = document.getElementById('section-project-gallery'); 

// aboutTab.addEventListener('click', function(e) {
// 	projectSection.classList.add('hideMe');
// 	aboutSection.classList.add('showMe')
	
//   });


aboutTab.addEventListener('click', function(e) {
	projectSection.style.opacity = '0%'; 
	
  });

projectSection.addEventListener('transitionend', function(e) {
	projectSection.style.display = 'none'; 
	aboutSection.style.opacity = '100%'; 
	aboutSection.style.display = 'block';
	// projectSection.parentElement.removeChild(projectSection)

  });

	
// function aboutSectionTransition(){
// 	aboutSection.style.opacity = '100%';
// 	aboutSection.style.display = 'block'; 
// 	console.log(aboutSection.classList)
// 	aboutSection.classList.add('show2');
// }

// click projects-tab 


