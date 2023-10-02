/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');
class Game {
    constructor(){
        this.missed = 0; 
        this.phrases = [
            new Phrase("Pumpkin spice latte"),
            new Phrase("Taco Tuesday"),
            new Phrase("Coding is fun"),
            new Phrase("Happy Coding"),
            new Phrase("Guess the phrase")
        ];
        this.activePhrase = null;
    }

    startGame(){
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase(){
        // generate random number as high as length of list and use number to index into list
        const randomInt = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomInt]
    }

    handleInteraction(button){
        button.disabled = true; 
        const letter = button.textContent;

        // check letter and change class name
        if (this.activePhrase.checkLetter(letter)) {
                button.classList.add('chosen')
            
            // show matched letter
            this.activePhrase.showMatchedLetter(letter);
            // check if all letters guessed
            if(this.checkForWin()){
                this.gameOver();
            }
        
        } else {
            // otherwise remove heart and add wronf class name 
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife(){
        // receive all the heart elements and update wrong guesses
        const lives = document.querySelectorAll('.tries img'); 
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed ++

        // check if max amount of guesses attempted
        if(this.missed === 5){
            this.gameOver();
        }
    }

    checkForWin(){
        // check if all letters have been guessed in the phrase
        const hiddenLetters = document.querySelectorAll('.letter.hide');
        return hiddenLetters.length === 0;
    }

    
    gameOver() {
        overlay.style.display = 'flex';
        // display game over message and win or lose screen 
        const gameOverMessage = document.querySelector('#game-over-message');

        // remove all class names from overlay
        overlay.classList.remove('start', 'win', 'lose')

        if (this.checkForWin()) {
            overlay.classList.add('win');
            gameOverMessage.textContent = 'Congratulations! You won!';
        } else {
            overlay.classList.add('lose');
            gameOverMessage.textContent = 'Sorry, better luck next time!';
        }

        this.resetGameboard();
    
    }

    // Function to reset the gameboard
    resetGameboard() {
        // Remove all li elements from the Phrase ul element
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = '';

        // Enable all onscreen keyboard buttons and reset their classes
        const buttons = document.querySelectorAll('.key');
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove('chosen', 'wrong');
        });

        // Reset all heart images
        const lives = document.querySelectorAll('.tries img');
        lives.forEach(life => {
            life.src = 'images/liveHeart.png';
        });

        // Reset missed guesses
        game.missed = 0;
        // overlay.classList.add('start');
    }

}