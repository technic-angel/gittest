var colors = genColors(6);
var pickedColor = pickColor(6);
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1select = document.querySelector("h1");
var rest = document.querySelector("#rest");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
squares = document.querySelectorAll(".square");

colorDisplay.textContent = pickedColor;
hard.addClassList = "selected";

for(var x = 0; x < squares.length; x++){
    squares[x].style.backgroundColor = colors[x];
    squares[x].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("you picked the right color")
            messageDisplay.textContent = "correct";
            changeColor(clickedColor);
            h1select.style.backgroundColor = pickedColor;
            rest.textContent = "Play Again?";
        }
        else{
            alert("wrong");
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

hard.addEventListener("click", function(){
    colors = genColors(6);
    pickedColor = pickColor(6);
    hard.classList.add("selected")
    easy.classList.remove("selected");
    for(var x = 0; x < squares.length; x++){
        squares[x].style.backgroundColor = colors[x];
        squares[x].style.display = "block";
    }
    colorDisplay.textContent = pickedColor;
    h1select.style.backgroundColor = "steelblue";
    rest.textContent = "New Game";
    messageDisplay.textContent = "";

});

rest.addEventListener("click", function(){
    if(hard.className === "selected"){
        colors = genColors(6);
        pickedColor = pickColor(6);
        for(var x = 0; x < squares.length; x++){
            squares[x].style.backgroundColor = colors[x];
            squares[x].style.display = "block";
        }
        colorDisplay.textContent = pickedColor;
        h1select.style.backgroundColor = "steelblue";
        rest.textContent = "New Game";
        messageDisplay.textContent = "";
    }
    else{
        colors = genColors(3);
        pickedColor = pickColor(3);
        for(var x = 0; x < squares.length; x++){
            if(x < 3){
                squares[x].style.backgroundColor = colors[x];
            }
            else{
                squares[x].style.backgroundColor = "#232323";
                
            }
        }
        colorDisplay.textContent = pickedColor;
        h1select.style.backgroundColor = "";
        rest.textContent = "New Game";
        messageDisplay.textContent = "";
    }
});

easy.addEventListener("click", function(){
    colors = genColors(3);
    pickedColor = pickColor(3);
    hard.classList.remove("selected");
    easy.classList.add("selected");
    for(var x = 0; x < squares.length; x++){
        if(x < 3){
            squares[x].style.backgroundColor = colors[x];
        }
        else{
            squares[x].style.display = "none";
            
        }
    }
    colorDisplay.textContent = pickedColor;
    h1select.style.backgroundColor = "steelblue";
    rest.textContent = "New Game";
    messageDisplay.textContent = "";


})

function changeColor(color){
    for(var x = 0; x < squares.length; x++){
        squares[x].style.backgroundColor = pickedColor;
    }
};
function pickColor(num){
    return colors[Math.floor(Math.random() * num)];
};

function genColor(){
    r = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function genColors(num){
    var colors = [];
    for(var x = 0; x < num; x++){
        colors[x] = genColor();
    }
    return colors;
}

