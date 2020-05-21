var scroll = new SmoothScroll('[data-scroll]', {
	speed: 500,
	speedAsDuration: true
});


// click about-tab

aboutTab = document.getElementById('about-tab');
projectsTab = document.getElementById('projects-tab'); 
aboutSection = document.querySelector('.section-about')
projectSection = document.querySelector('.section-project-gallery'); 


aboutTab.addEventListener('click', function(e) {
	projectSection.classList.add('hide'); 
	aboutSection.classList.remove('hide');
	
  });


projectsTab.addEventListener('click', function(e) {
	aboutSection.classList.add('hide'); 
	projectSection.classList.remove('hide');

  });

