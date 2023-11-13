(function () {
	'use strict';

	
	const captions = [
		
		'',
		'🐰🐱🐶🐧🐑🐷🐻',
		'🐰🐰🐰🐰',
		'🐱🐱🐱🐱',
		'🐶🐶🐶🐶',
		'🐧🐧🐧🐧',
		'🐑🐑🐑🐑',
		'🐷🐷🐷🐷',
		'🐻🐻🐻🐻',
		];

	let figCaption = document.querySelector('figcaption');
	figCaption.innerHTML = captions[1];



window.addEventListener('load', function () {



	const posts = document.querySelectorAll('section');
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	let doneResizing;


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

			figCaption.className = 'exit';

			// this event handler runs when the CSS animation finishes
			figCaption.addEventListener('animationend', function () {
				// Clone the figcaption
				let newCaption = document.querySelector('figcaption').cloneNode(true);
				// remove the original figcaption
				figCaption.remove();
				// add a class name to the new fig caption (the one that was cloned)
				newCaption.className = 'enter';
				// change the caption based on which section is on the screen
				newCaption.innerHTML = captions[counter];
				// put the new caption on the page
				document.querySelector('figure').appendChild(newCaption);
				// reassign the figCaption variable
				figCaption = document.querySelector('figcaption');
			});

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

}); 

})();