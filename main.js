'use strict';

const pets= [
    {
        name: "Jerry",
        color: "Grey",
        specialSkill: "Specializes in observational comedy and eating cereal.",
        type: "Bird",
        imageUrl: "https://macawforsale.com/wp-content/uploads/2019/10/african-grey-parotes-600x444.jpg"

    },

    {
        name: "Elaine",
        color: "Tortoiseshell",
        specialSkill: "Queen of Snark; big hair; bad at office parties.",
        type: "Cat",
        imageUrl: "https://kittentoob.com/wp-content/uploads/2018/02/Tortoiseshell-Cat-4-750x500.jpg"

    },

    {
        name: "Newman",
        color: "Brown and White",
        specialSkill: "Engages in snooping and tormenting Jerry.",
        type: "Dog",
        imageUrl: "https://mk0vitaminsforpt67wc.kinstacdn.com/wp-content/uploads/2013/06/english_bulldog_11.jpg"

    },

    {
        name: "Kramer",
        color: "Silver",
        specialSkill: "Bursts through doors unexpectedly.",
        type: "Dog",
        imageUrl: "https://www.purina.com.au/-/media/Project/Purina/Main/Breeds/Dog/Mobile/Dog_Weimaraner_Mobile.jpg?h=300&la=en&w=375&hash=8370EDDDCA8261DE570ED454891E4D9F"


    },

    {
        name: "George",
        color: "Tabby",
        specialSkill: "Indolent loser who double-dips.",
        type: "Cat",
        imageUrl: "https://cbsnews1.cbsistatic.com/hub/i/2016/09/29/d1a671d9-556e-468d-8639-159e2842f15b/logan-new-hamshire-cat-2016-09-29.jpg"

    },

    {
        name: "Banya",
        color: "White",
        specialSkill: "Adept at being irritating and stealing comedy routines.",
        type: "Bird",
        imageUrl: "https://prod03.pspcdn.com/-/media/Images/PSP/ResourceCenter/Birds/cockatoo.ashx?la=en&modified=20161222181345"

    },
   
];

const handleButtonClick = (e) => {
    const buttonId = e.target.id;

    const selectedPets = [];
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].type === buttonId) {
            selectedPets.push(pets[i]);
        }
    }

    if (buttonId === 'All') {
        buildAdoptAPetCard(pets)
    } else {
    buildAdoptAPetCard(selectedPets); 
  }
}

const buttonEvents = () => {
    document.querySelector('#pet-buttons').addEventListener('click', handleButtonClick)

} 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
const buildAdoptAPetCard = (pets) => {
    let domString = '';
    for (let i=0; i < pets.length; i++) {
        domString +=  `<div class="pets">`;
        domString +=  `<h1 class="pet-name">${pets[i].name}</h1>`;
        domString +=  `<div class="image"><img src=${pets[i].imageUrl} alt=a pet></div>`;
        domString +=  `<h3 class="pet-color">${pets[i].color}</h3>`;
        domString +=  `<p class="pet-skills"><em>${pets[i].specialSkill}</em></p>`;
        domString +=  `<h4 class="pet-type">${pets[i].type}</h4>`;
        domString +=  `</div>`;
    }
    printToDom('petCard' , domString);
}

const init = () => {
    buttonEvents();
    buildAdoptAPetCard (pets);
}

init();