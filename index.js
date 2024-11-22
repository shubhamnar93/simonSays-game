var greenAudio = new Audio('./sounds/green.mp3');
var redAudio = new Audio('./sounds/red.mp3');
var blueAudio = new Audio('./sounds/yellow.mp3');
var yellowAudio = new Audio('./sounds/blue.mp3');


$(".green").on("click",function(){
    greenAudio.play()
    $(this).addClass("pressed");
    setTimeout(() => {$(this).removeClass("pressed")}, 100)
})
$(".red").on("click",function(){
    redAudio.play()
    $(this).addClass("pressed");
    setTimeout(() => {$(this).removeClass("pressed")}, 100)

})
$(".blue").on("click",function(){
    blueAudio.play()
    $(this).addClass("pressed");
    setTimeout(() => {$(this).removeClass("pressed")}, 100)
})
$(".yellow").on("click",function(){
    yellowAudio.play()
    $(this).addClass("pressed");
    setTimeout(() => {$(this).removeClass("pressed")}, 100)
})

var colors=["green", "red", "blue","yellow"];
var audioObjects = { 
    "green": greenAudio, 
    "red": redAudio, 
    "blue": blueAudio, 
    "yellow": yellowAudio 
}; 

var toRemember = []
$(document).one("keydown", randomClick); 

function randomClick() {

    $("h1").text("Level: "+toRemember.length)

    var i = Math.floor(Math.random() * 4);

    var color = colors[i]; 

    var audio = audioObjects[color]; 
    audio.play(); 
    $("." + color).addClass("pressed");

    setTimeout(() => { $("." + color).removeClass("pressed"); }, 100); 
    toRemember.push(color)    
}


var j=0;
$(".btn").on("click", function () {
    var buttonId = $(this).attr('id');
    
    if (j<toRemember.length-1 && toRemember[j]===buttonId){
        console.log(buttonId);
        j++;
        
    }
    else if(j===toRemember.length-1 && toRemember[j]===buttonId){
        console.log(buttonId);
        setTimeout(randomClick, 1000); 
        j=0
    }
    else{

        wrong();

    }
});

    
function wrong(){
    j=0;
    toRemember.length=0;
    $("h1").text("Game Over, press any key to Restart");
    $(document).one("keydown", randomClick); 

}