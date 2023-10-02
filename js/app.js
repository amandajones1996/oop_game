/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Event listener for the "Start Game" button
document.querySelector('#btn__reset').addEventListener('click', () => {
    // Start a new game
    overlay.classList.remove('win');
    overlay.classList.remove('lose')
    overlay.classList.add('start');
    // Create a new instance of the Game class
    const game = new Game();
    game.startGame();
});

// Event listener for onscreen keyboard buttons (using event delegation)
document.querySelector('#qwerty').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        // Call the handleInteraction method when a button is clicked
        const button = event.target;
        game.handleInteraction(button);
    }
});

