
(function(){

    "use strict";
    console.log('reading js');

    myform.addEventListener('submit', function(event) {
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

        let myText = ``;

        if(petName == ``){
            myText= "Please provide a pet name!"
            document.querySelector(`#petname`).focus();
        }
        else if(adjective1 == ``){
            myText= "Please provide an adjective!"
            document.querySelector(`#adjective1`).focus();
        }
        else if(verbIng1 == ``){
            myText= "Please provide a verb ending in ing!"
            document.querySelector(`#verb_ing1`).focus();
        }
        else if(verbIng2 == ``){
            myText= "Please provide a verb ending in ing!"
            document.querySelector(`#verb_ing2`).focus();
        }
        else if(color == ``){
            myText= "Please provide a color!"
            document.querySelector(`#color`).focus();
        }
        else if(location == ``){
            myText= "Please provide a location!"
            document.querySelector(`#location`).focus();
        }
        else if(verb1 == ``){
            myText= "Please provide a verb!"
            document.querySelector(`#verb1`).focus();
        }
        else if(ability == ``){
            myText= "Please provide a special ability!"
            document.querySelector(`#ability`).focus();
        }
        else if(ability == ``){
            myText= "Please provide a noun!"
            document.querySelector(`#noun`).focus();
        }
        else{
            myText = `${petName} was a/an ${adjective1} creature with a body shaped like a ${noun}. Unlike other pixel pets, its favorite activities included ${verbIng1} and ${verbIng2}. Its ${color} hue shimmered whenever it ventured into the sunlight, casting playful reflections around. It spends its time in the ${location} the most to ${verb1}. Whenever it felt particularly happy or excited, it could ${ability}.`;
            document.querySelector(`#petname`).value=``;
            document.querySelector(`#adjective1`).value=``;
            document.querySelector(`#noun`).value=``;
            document.querySelector(`#verb_ing1`).value=``;
            document.querySelector(`#verb_ing2`).value=``;
            document.querySelector(`#color`).value=``;
            document.querySelector(`#location`).value=``;
            document.querySelector(`#verb1`).value=``;
            document.querySelector(`#ability`).value=``;
        }
        

        document.getElementById('storyText').innerText = myText;

        document.getElementById('overlay').classList.remove('hidden');
    });

    document.querySelector('.close').addEventListener('click',function(event){
        document.querySelector('#overlay').className=
        'hidden';
    });
    

})();