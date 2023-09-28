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

    checkLetter(letter){
        return this.phrase.includes(letter)
    }

    showMatchedLetter(letter){
        const lettersPicked = document.querySelectorAll(`.letter.${letter}`);
        lettersPicked.forEach(letterPicked => {
            letterPicked.classList.replace('hide', 'show');
        })
    }
}