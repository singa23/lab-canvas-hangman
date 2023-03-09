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
    let x = 300

    for(let i=0 ; i< hangman.secretWord.length ; i++){
      this.context.beginPath() ;
      this.context.moveTo(x, 700) ;
      this.context.lineTo(x+50, 700) ;
      this.context.closePath ;
      this.context.stroke() ;
      x += 75;
    }
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
