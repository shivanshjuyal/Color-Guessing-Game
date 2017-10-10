var colors = generateRandomColors(6);

var numSquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
//alert(pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  h1.style.background = "steelblue";
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0; i<squares.length; i++){
    if (colors[i]){
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  h1.style.background = "steelblue";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  colors = generateRandomColors(numSquares);
  //pick a new random color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  //change colors of the squares
  for (var i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
});


for (var i=0; i<squares.length;i++){
  squares[i].style.background=colors[i];
  squares[i].addEventListener("click", function(){
    //alert("clicked a square");
    //grab color of clikced square
    var clickedColor = this.style.background;
    //alert(clickedColor);
    if (clickedColor===pickedColor) {
      //alert("Correct!");
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }
    else{
      this.style.background = "steelblue";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  for (var i=0; i<squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors

  for (var i=0; i<num; i++){
    //get random color;
    arr.push(randomColor());
  }

  //return that arrat
  return arr;
}

function randomColor(){
  //pick a red from = to 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from = to 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from = to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}
