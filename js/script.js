var btnShowLess = document.getElementById("textControl");
var content = document.getElementsByClassName("postContent");
var textDisplayed = false   ;
console.log("ok");


btnShowLess.onclick = function (){
    if(textDisplayed){
        btnShowLess.innerHTML = "SHOW LESS";
        content[0].style.height = "auto";
    } else {
        btnShowLess.innerHTML = "SHOW MORE";
        content[0].style.height="150px";
    }

    textDisplayed = !textDisplayed;
    
}


var svg = document.getElementsByClassName("svgClass");

svg.forEach( 
    function(currentValue, currentIndex, listObj) { 
      console.log(currentValue + ', ' + currentIndex + ', ' + this); 
    },
    'myThisArg'
  );
