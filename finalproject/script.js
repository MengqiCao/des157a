(function () {
	'use strict';
	

window.addEventListener('load', function () {



	const posts = document.querySelectorAll('section');
	let postTops = [];
	let pageTop;
	let counter = 0;
	let prevCounter = 0;
	let doneResizing;
	const backgroundColors = ['#F3F1EF', '#F4AA5A', '#8185BB', '#DFDECC', '#312619', '#F2F1EE', '#F5DED1', '#C6AD97', '#F3F1EF'];
	const fontcolor = ['#5B5B5B', '#FFFFFF', '#FFFFFF', '#232110', '#F3EAE0', '#DFACAD', '#E99271', '#6A523B', '#5B5B5B']
	const svgPatterns = {
		1: "url('images/rabbit.svg')",
		2: "url('images/cat.svg')",
		3: "url('images/dog.svg')",
		4: "url('images/penguin.svg')",
		5: "url('images/lamb.svg')",
		6: "url('images/pig.svg')",
		7: "url('images/bear.svg')",
		// ... and so on for each section
	  };


	resetPagePosition();


	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 300;

		if (pageTop > postTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		}

		if (counter != prevCounter) {
			
			document.querySelector('figure img').className = 'sect' + counter;

			document.body.style.backgroundColor = backgroundColors[counter - 1];
			document.body.style.color = fontcolor[counter - 1];
		
			document.body.style.backgroundImage = svgPatterns[counter-1] || '';

			prevCounter = counter;
		}
	});


	window.addEventListener('resize', function () {

		clearTimeout(doneResizing);
		doneResizing = setTimeout(function () {

			resetPagePosition();

		}, 500);
	});

	function resetPagePosition() {
		postTops = [];
		posts.forEach(function (post) {
			postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
		});

		const pagePosition = window.pageYOffset + 300;
		counter = 0;

		postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

	}

	document.querySelectorAll('.navigation-buttons button').forEach(button => {
		button.addEventListener('click', function() {
		  const targetId = this.getAttribute('data-target');
		  const targetSection = document.getElementById(targetId);
	  
		  targetSection.scrollIntoView({ behavior: 'smooth' });
		});
	  });

}); 

})();