  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Run function to create unicorn objects
var unicorns = []

function createUnicorns() {
  // Loop through each image and assign a new ID
  for (let i = 0; i < document.getElementsByClassName("inflate-an-image").length; i++) {
    document.getElementsByClassName("inflate-an-image").id="unicorn" + [i];
    // Assign html image to variable
    unicorns[i] = document.getElementById("unicorn" + [i]);
    // Assign on click event function
    unicorns[i].onclick = inflate;
    // Assign inflation level
    unicorns[i].inflation = 0
  }
}

createUnicorns()

// Create function that increases unicorn inflation by 1 and updates image accordingly

function inflate(event) {
  var  unicornID = event.target
  // Loop through each image and match to click target
  for (let i = 0; i < unicorns.length; i++) {
    if (unicornID == unicorns[i]) {
      // On match increase inflation by 1 but not if already at or above 3
      if (unicorns[i].inflation < 3) {
          unicorns[i].inflation++;
          unicornUpdate()
      }
      // If fully inflated display thank you message
      if (unicorns[i].inflation == 3) {
        alert ("Unicorn " + [i] + " says thank you")
      }
    }
  }
}

// Create function that updates img source to match inflation level

function unicornUpdate() {
  for (let i = 0; i < unicorns.length; i++) {
    unicorns[i].src = "./images/unicorn-" + unicorns[i].inflation + ".png"
  }
}

// On 3rd click of unicorn, display message "unicorn x says thank you"

console.log("Inflate The Unicorn!")