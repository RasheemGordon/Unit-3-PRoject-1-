let optioneOneScreen = document.querySelector(".option-one-screen");
let optionetwoScreen = document.querySelector(".option-two-screen");
let optiononEend = document.querySelector(".option-one-end");
let optionTwoend = document.querySelector(".option-two-end");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let storyopening = document.querySelector(".story-opening");
let optionThree = document.querySelector(".option-three");
let optionfour = document.querySelector(".option-three");
button1.onclick = function(){
  optioneOneScreen.style.display = "block";
  storyopening.style.display = "none";
}


button2.onclick = function(){
  optionetwoScreen.style.display = "block";
  storyopening.style.display = "none";
}

optionThree.onclick = function(){
 optionTwoend.style.display = "block";
optionetwoScreen.style.display = "none";
}



 /* 
 INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
