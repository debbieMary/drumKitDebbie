/*document.querySelector("button").addEventListener("click", function(){
  alert("I got clicked");
});*/




/*let numbers = [1,2,3,4,5]
numbers.forEach((number, index) => console.log(`${index}:${number}`))*/
var arrayButton = document.querySelectorAll(".drum");
Array.from(arrayButton).forEach((element, index) => {
  console.log(element + " I am pressing button number " + index);

  element.addEventListener("click", function() {
    //alert("I got clicked in button "+ index);
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 2000);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;

    case "a":
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;

    case "s":
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;

    case "d":
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;

    case "j":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;

    case "k":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;


    case "l":
      var audioKickBass = new Audio("sounds/kick-bass.mp3");
      audioKickBass.play();
      break;

    default:
      console.log(key);
  }
}
