'use strict';
let showModel = document.querySelectorAll(".show-modal");
let closeModel = document.querySelector(".close-modal");
let textModel = document.querySelector(".modal");
let overlay=document.querySelector(".overlay");


let opentext =function(){
    textModel.classList.remove("hidden");
    overlay.classList.remove("hidden");
}



for (let i=0;i<showModel.length;i++){
    showModel[i].addEventListener("click",opentext);}

/*    ........we can use this ......... or use function......................


closeModel.addEventListener("click",function(){
    textModel.classList.add("hidden");
    overlay.classList.add("hidden");
})

overlay.addEventListener("click",function(){
    textModel.classList.add("hidden");
    overlay.classList.add("hidden");
})
*/
let exit = function(){
    textModel.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModel.addEventListener("click",exit);
overlay.addEventListener("click",exit);


//............................using keys..............................

document.addEventListener("keydown",function(e){
    console.log("key pressed");
    console.log(e.key);
    if (e.key==="Escape"&& !textModel.classList.contains("hidden")){
       exit();
    }
 
});
