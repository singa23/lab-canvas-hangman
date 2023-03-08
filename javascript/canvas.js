class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here

    hangman.secretWord
    
    this.context.beginPath()
    // hangman.moveTo(500,700)
    // hangman.lineTo(250, 50);
    // hangman.stroke();
    this.context.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
this.context.lineTo(250, 100);
// .stroke() executes the drawing
this.context.stroke();

  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
