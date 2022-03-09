  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Create array of cells from table rows
var moleArray = []

// Create function to convert HTML table and push into the array
function convertTable() {
  let moleTable = document.getElementById("moleTable")
  let moleRows = moleTable.rows
  let moleTds = []
  // Loop through each row first
  for (let i = 0; i < moleRows.length; i++) {
    moleTds = moleRows[i].cells;
    // Then through each cell of that row
    for (let j = 0; j < moleTds.length; j++) {
      // And push each to array
      moleArray.push(moleTds[j]);
    }
  }
}

convertTable()

// Create RNG for choosing cell with mole

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

// Assign random number to variable to be used as index in other functions

var randomIndex = randomNumber(25)

// Create variables to be used in assigning mole cell and whacked mole functions

var moleCell = {}
var moleImg = {}
var whackSound = {}

// Assign mole cell, give cell mole image, sound and onclick function

function assignMole() {
  moleCell = moleArray[randomIndex]
  moleImg = document.createElement("IMG");
  moleImg.setAttribute("src", "./mole.PNG");
  moleImg.setAttribute("width", "100%");
  whackSound = document.createElement("AUDIO");
  whackSound.setAttribute("src", "./whack-audio.wav")
  moleCell.appendChild(moleImg);
  moleCell.appendChild(whackSound);
  moleCell.onclick = function() {
    whackedMole()
  }
}

assignMole()

// Create function whackedMole that plays whack sound, removes mole img from current mole cell and assigns new mole cell

function whackedMole() {
  whackSound.play()
  randomIndex = randomNumber(25)
  moleCell.removeChild(moleImg)
  assignMole()
}

console.log("Whack-a-Mole!")