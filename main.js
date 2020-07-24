"use strict";

const pets= [
    {
        name: "Jerry",
        color: "Blue",
        specialSkill: "Observational comedy",
        type: "Parrot",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Anodorhynchus_hyacinthinus_-Disney_-Florida-8.jpg/1200px-Anodorhynchus_hyacinthinus_-Disney_-Florida-8.jpg"

    },

    {
        name: "Elaine",
        color: "Tortoiseshell",
        specialSkill: "Snark",
        type: "Cat",
        imageUrl: "https://kittentoob.com/wp-content/uploads/2018/02/Tortoiseshell-Cat-4-750x500.jpg"

    },

    {
        name: "Newman",
        color: "Brown and White",
        specialSkill: "Snooping",
        type: "Dog",
        imageUrl: "https://mk0vitaminsforpt67wc.kinstacdn.com/wp-content/uploads/2013/06/english_bulldog_11.jpg"

    },

    {
        name: "Kramer",
        color: "Silver",
        specialSkill: "Randomness",
        type: "Dog",
        imageUrl: "https://www.purina.com.au/-/media/Project/Purina/Main/Breeds/Dog/Mobile/Dog_Weimaraner_Mobile.jpg?h=300&la=en&w=375&hash=8370EDDDCA8261DE570ED454891E4D9F"


    },

    {
        name: "George",
        color: "Tabby",
        specialSkill: "Indolence",
        type: "Cat",
        imageUrl: "https://cbsnews1.cbsistatic.com/hub/i/2016/09/29/d1a671d9-556e-468d-8639-159e2842f15b/logan-new-hamshire-cat-2016-09-29.jpg"

    },

    {
        name: "Banya",
        color: "Brown",
        specialSkill: "Being Irritating",
        type: "Guinea Pig",
        imageUrl: "https://www.mercurynews.com/wp-content/uploads/2018/07/Ladybug-1.jpg"

    }
   
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
const buildAdoptAPetCard = () => {
    let domString = "";
    for (let i=0; i < pets.length; i++) {
        domString +=  `<div class="pets">`;
        domString +=  `<h2>${pets[i].name}</h2>`;
        domString +=  `<p>${pets[i].color}</p>`;
        domString +=  `<p>${pets[i].specialSkill}</p>`;
        domString +=  `<p>${pets[i].type}</p>`;
        domString +=  `<div>${pets[i].imageUrl}</div>`;
        domString +=  `</div>`;
    }
    printToDom("petCard" , domString);
}

buildAdoptAPetCard ();