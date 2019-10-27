//take data from choice list and populate DOM with radio buttons.  this will be iterated over api data in runs.js


function createChoice(choice) {
    //create DOM element
    const label = document.createElement('label');
    //add class to it
    label.classList.add('choice');

    //create radio buttons
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = 'true';
    radio.value = choice.id;

    //add to DOM
    label.appendChild(radio);
    //add descriptions to radio options
    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);
    
    return label;
}

export default createChoice;