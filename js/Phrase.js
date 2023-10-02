/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const phraseSection = document.querySelector('#phrase ul');
        const phraseLetters = this.phrase.split('');

        // loop through each letter and check if its empty or a letter 
        phraseLetters.forEach(letter => {
            const li = document.createElement('li');
            if (letter === ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
            phraseSection.appendChild(li);
        });
    }
    // if letter is in phrase return true
    checkLetter(letter){
        return this.phrase.includes(letter)
    }
    
    showMatchedLetter(letter){
        // grab all letter classes that have a letter and replace there class name to show
        const lettersPicked = document.querySelectorAll(`.letter.${letter}`);
        lettersPicked.forEach(letterPicked => {
            letterPicked.classList.replace('hide', 'show');
        })
    }
}