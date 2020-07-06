const registrationForm = document.querySelector('#registration_form');
const registrationType = document.querySelector('#registration_type');
const classSelection = document.querySelector('#class_selection');
const competition = document.querySelector('#competition');
const errors = document.querySelector('#errors ul');

function init() {
    classSelection.classList.add('hidden');
    competition.classList.add('hidden');
    registrationType.addEventListener('change', toggle_reg_type);
    registrationForm.addEventListener('submit', validate_form);
}

function toggle_reg_type() {
    let selectedValue = registrationType.value;
    switch (selectedValue) {
        case "class_registration":
            classSelection.classList.remove('hidden');
            classSelection.classList.add('show');
            competition.classList.remove('show');
            competition.classList.add('hidden');
            break;
        case "competitive_team":
            competition.classList.remove('hidden');
            competition.classList.add('show');
            classSelection.classList.remove('show');
            classSelection.classList.add('hidden');
            break;
        case "":
            competition.classList.remove('show');
            classSelection.classList.remove('show');
            classSelection.classList.add('hidden');
            competition.classList.add('hidden');
            break;
    }
}

function validate_form(event) {
    let controlItems = document.querySelectorAll('.req');
    let form_incomplete = false;
    errors.innerHTML = "";
    for (let i = 0; i < controlItems.length; i++) {
        let current = controlItems[i];
        if (current.value === "") {
            form_incomplete = true;
            let entry = document.createElement('li');
            entry.textContent = current.id + ' is a required field';
            errors.appendChild(entry); 
        }
    }
    let term = document.getElementById('term');
    if (terms.checked === false) {
        form_incomplete = true;
        let entry = document.createElement('li');
        entry.textContent = 'You must agree to the terms and conditions before you can register';
        errors.appendChild(entry); 
    }
    if (registrationType.value === "class_registration"){
        let classRequired = document.getElementById('class_reg');   
        if (classRequired.value === "") {
            form_incomplete = true;
            let entry = document.createElement('li');
            entry.textContent = 'You must register for a class';
            errors.appendChild(entry); 
        }
    }
    if (registrationType.value === "competitive_team"){
        let levelRequired = document.getElementById('level');   
        if (levelRequired.value === "") {
            form_incomplete = true;
            let entry = document.createElement('li');
            entry.textContent = 'You must register for a level';
            errors.appendChild(entry); 
        }
    }
    if(form_incomplete === true) {
        event.preventDefault();
        errors.parentElement.classList.remove('hidden');
        errors.parentElement.classList.add('show');
    }    
}

init();