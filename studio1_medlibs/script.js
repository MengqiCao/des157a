
(function(){

    "use strict";
    console.log('reading js');

    document.querySelector('.custom-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const petName = document.querySelector('#petname').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const verbIng1 = document.querySelector('#verb_ing1').value;
        const verbIng2 = document.querySelector('#verb_ing2').value;
        const color = document.querySelector('#color').value;
        const location = document.querySelector('#location').value;
        const verb1 = document.querySelector('#verb1').value;
        const ability = document.querySelector('#ability').value;
        const noun = document.querySelector('#noun').value;
    
        const story = `${petName} was a/an ${adjective1} creature with a body shaped like a ${noun}. Unlike other pixel pets, its favorite activities included ${verbIng1} and ${verbIng2}. Its ${color} hue shimmered whenever it ventured into the sunlight, casting playful reflections around. It spends its time in the ${location} the most to ${verb1}. Whenever it felt particularly happy or excited, it could ${ability}.`;
    
        document.getElementById('storyText').innerText = story;
        document.getElementById('overlay').classList.remove('hidden');
    });

    document.querySelector('.close').addEventListener('click', closeOverlay);
    
    function closeOverlay() {
        document.getElementById('overlay').classList.add('hidden');
    }
    

})();