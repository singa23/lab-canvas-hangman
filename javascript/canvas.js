class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let x = 300

    for(let i = 0 ; i < hangman.secretWord.length ; i++) {
      this.context.beginPath() 
      this.context.moveTo(x, 700) 
      this.context.lineTo(x+50, 700)
      this.context.lineWidth = 2 
      this.context.closePath()
      this.context.stroke() 
      x += 75;
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let xCorrect = 310 
    for(let i = 0 ; i < hangman.secretWord.length ; i++) {
      if(hangman.secretWord[i] === index) {
        this.context.font = '50px Roboto'
        this.context.fillText(`${index}`, xCorrect + i*75, 690)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let xFalse = 600
    this.context.font = '50px Roboto'
    if(errorsLeft >= 5) {
      this.context.fillText(`${letter}`, xFalse + (10 - errorsLeft) * 75 , 200)
    } else {
      this.context.fillText(`${letter}`, xFalse + (5 - errorsLeft) * 75 , 260)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft) {
      case 9 : 
        this.context.beginPath() 
        this.context.moveTo(25, 700) 
        this.context.lineTo(225, 700) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 8 : 
        this.context.beginPath() 
        this.context.moveTo(25, 700) 
        this.context.lineTo(125, 650) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 7 : 
        this.context.beginPath() 
        this.context.moveTo(225, 700) 
        this.context.lineTo(125, 650) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 6 : 
        this.context.beginPath() 
        this.context.moveTo(125, 650) 
        this.context.lineTo(125, 100) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 5 : 
        this.context.beginPath() 
        this.context.moveTo(125, 100) 
        this.context.lineTo(425, 100) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 4 : 
        this.context.beginPath() 
        this.context.moveTo(425, 100) 
        this.context.lineTo(425, 150) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 3 : 
        this.context.beginPath()   
        this.context.arc(425, 200, 50, 0, Math.PI * 2) 
        this.context.stroke() 
        this.context.closePath 
        break
      case 2 : 
        this.context.beginPath() 
        this.context.moveTo(425, 250) 
        this.context.lineTo(425, 400) 
        this.context.closePath 
        this.context.stroke() 
        break
      case 1 : 
        this.context.beginPath() 
        this.context.moveTo(425, 400) 
        this.context.lineTo(375, 475) 
        this.context.closePath 
        this.context.stroke() 
        break 
      case 0 : 
        this.context.beginPath() 
        this.context.moveTo(425, 400) 
        this.context.lineTo(475, 475) 
        this.context.closePath 
        this.context.stroke() 
        break
  }
  }

  gameOver() {
    // ... your code goes here
    const img = new Image()
    img.src = './images/gameover.png'
    this.context.drawImage(img, 100,100)
  }

  winner() {
    // ... your code goes here
    const imgWin = new Image()
    imgWin.src = './images/awesome.png'
    this.context.drawImage(imgWin, 0, 0)
  }
}
