function a(b){
    switch(b){
        case "q":
            var audio = new Audio("audio/1-note-piano-104171.mp3");
            audio.play();
            break;
        case "w":
            var audio = new Audio("audio/070747_overall-quality-of-single-note-85290.mp3");
            audio.play();
            break;
        case "e":
            var audio = new Audio("audio/071798_overall-quality-of-single-note-85289.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("audio/074708_overall-quality-of-single-note-85235.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("audio/077027_overall-quality-of-single-note-85232.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("audio/a6-82015.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("audio/a6-102820.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("audio/b6-82017.mp3");
            audio.play();
            break;
        case "o":
            var audio = new Audio("audio/c-note-93473.mp3");
            audio.play();
            break;
        case "p":
            var audio = new Audio("audio/c3-95007.mp3");
            audio.play();
            break;
        case "[":
            var audio = new Audio("audio/c6-82019.mp3");
            audio.play();
            break;
        case "]":
            var audio = new Audio("audio/c6-102822.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("audio/d6-82018.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("audio/d6-82020.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("audio/do-35686.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("audio/do-80236.mp3");
            audio.play();
            break;
        case "g":
            var audio = new Audio("audio/e6-82016.mp3");
            audio.play();
            break;
        case "h":
            var audio = new Audio("audio/error-9-206494.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("audio/f6-102819.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("audio/fa-78409.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("audio/g6-82013.mp3");
            audio.play();
            break;
        case "1":
            var audio = new Audio("audio/glad-piano-logo-13394.mp3");
            audio.play();
            break;
        case "2":
            var audio = new Audio("audio/hi-scale-356842.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio("audio/la-80237.mp3");
            audio.play();
            break;
        case "4":
            var audio = new Audio("audio/melodica-one-note-88607.mp3");
            audio.play();
            break;
        case "5":
            var audio = new Audio("audio/music-box-note-14514.mp3");
            audio.play();
            break;
        case "6":
            var audio = new Audio("audio/piano-crash-sound-37898.mp3");
            audio.play();
            break;
        case "7":
            var audio = new Audio("audio/piano-g-6200.mp3");
            audio.play();
            break;
        case "8":
            var audio = new Audio("audio/piano-glide-259500.mp3");
            audio.play();
            break;
        case "9":
            var audio = new Audio("audio/sol-101774.mp3");
            audio.play();
            break;
        case "0":
            var audio = new Audio("audio/piano-plinks-84919.mp3");
            audio.play();
            break;
        case "-":
            var audio = new Audio("audio/piano1-93588.mp3");
            audio.play();
            break;
        case "=":
            var audio = new Audio("audio/piano2-93587.mp3");
            audio.play();
            break;
        case ",":
            var audio = new Audio("audio/re-78500.mp3");
            audio.play();
            break;
        case ".":
            var audio = new Audio("audio/si_bemol_tone_2016-82338.mp3");
            audio.play();
            break;
        case "/":
            var audio = new Audio("audio/si-80238.mp3");
            audio.play();
            break;
    }
}

for(let i = 0; i < document.querySelectorAll(".key").length; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var c = this.innerHTML.trim().toLowerCase()
        a(c);
    })
}

document.addEventListener("keypress", function(event){
    a(event.key);
})