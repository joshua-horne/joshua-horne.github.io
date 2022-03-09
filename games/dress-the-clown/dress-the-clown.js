  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Create collection of clown parts

var clownParts = document.getElementsByClassName("dress-a-parent")[0].getElementsByTagName("img")

// Create parts index and active ID tag and assign tag to first clownPart

var clownIndex = 0
clownParts[clownIndex].id = "active"

var activePart = document.getElementById("actvie")

// Set variable for option number (eg. src image = body[bodyOption].png)
var headOption = 0
var bodyOption = 0
var shoesOption = 0

// Create function to increase option of active part by 1

function increaseOption() {
  activePart = document.getElementById("active");
  if (activePart.className == "dress-an-image head") {
    headOption++;
    activePart.src = './images/head' + headOption + '.png'
  }
  if (activePart.className == "dress-an-image body") {
    bodyOption++;
    activePart.src = './images/body' + bodyOption + '.png'
  }
  if (activePart.className == "dress-an-image shoes") {
    shoesOption++;
    activePart.src = './images/shoes' + shoesOption + '.png'
  }
}

// Create function to decrease option of active part by 1

function decreaseOption() {
  activePart = document.getElementById("active");
  if (activePart.className == "dress-an-image head") {
    headOption--;
    activePart.src = './images/head' + headOption + '.png'
  }
  if (activePart.className == "dress-an-image body") {
    bodyOption--;
    activePart.src = './images/body' + bodyOption + '.png'
  }
  if (activePart.className == "dress-an-image shoes") {
    shoesOption--;
    activePart.src = './images/shoes' + shoesOption + '.png'
  }
}

// Create functions to shift active ID tag on key press

function activeIncrease() {
  let activePart = document.getElementById("active");
  if (activePart == clownParts[0]) {
    return
  } else {
    activePart.removeAttribute("id");
    clownIndex--;
    clownParts[clownIndex].id = "active"
  }
}

function activeDecrease() {
  let activePart = document.getElementById("active");
  if (activePart == clownParts[clownParts.length-1]) {
    return
  } else {
    activePart.removeAttribute("id");
    clownIndex++;
    clownParts[clownIndex].id = "active"
  }
}

// Create listener for arrow key press to change active clown part or clothing option

document.addEventListener("keydown", function(e) {
  if(e.key == "ArrowUp") {
    e.preventDefault()
    activeIncrease()
  }
  if(e.key == "ArrowDown") {
    e.preventDefault()
    activeDecrease()
  }
  if(e.key == "ArrowLeft") {
    e.preventDefault()
    decreaseOption()
  }
  if(e.key == "ArrowRight") {
    e.preventDefault()
    increaseOption()
  }
})

console.log("Dress The Clown!")