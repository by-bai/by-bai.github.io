var scroll = new SmoothScroll('[data-scroll]', {
	speed: 500,
	speedAsDuration: true
});

document.getElementById('about-tab').addEventListener('click', function(e) {
	document.getElementById('section-project-gallery').style.display = 'none';
	document.getElementById('section-about').style.display = 'block'; 
  });
