const number = document.querySelectorAll(".drum").length;

for(let i=0;i< number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let keypad = this.innerHTML;
        makesound(keypad);
        buttonAnimation(keypad);
});
}
// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();

document.addEventListener("keydown",(event)=>{
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound (keyvalue) {
    let audio = null;
    switch (keyvalue) 
    {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:
            console.log(keyvalue);
            break;
    }
}

function buttonAnimation(e){
     var activeButton = document.querySelector("."+e);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}