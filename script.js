// Initializing variables
let boxes = Array.from(document.getElementsByClassName("box")) 
let reset = document.getElementById("reset")
let mute_unmute = document.getElementById("mute_unmute")
let boxtext = Array.from(document.querySelectorAll('.boxtext')) 

let bgmusic = new Audio("bgmusic.mp3")
bgmusic.play();

let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"
let isover = false
// Initializing variables



// Function to change the turn
function changeTurn(){
    return turn === "X"?"0" : "X"
}
// Function to change the turn




// Function to check for a win
function checkWin(){
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 3, 1, 0],              // last 3 values of each arrays are the transform porperty values
        [3, 4, 5, 3, 10, 0],
        [6, 7, 8, 3, 20, 0],
        [0, 3, 6, -6, 11, 90],
        [1, 4, 7, 4, 11, 90],
        [2, 5, 8, 14, 11, 90],
        [0, 4, 8, 3, 10, 50],
        [2, 4, 6, 4, 10, 130]
    ]

    wins.forEach(function(e){
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML) && (boxtexts[e[0]].innerHTML !== "")){
            document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + " Won"
            isover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "23vw"
        }
    })

}
// Function to check for a win




// Game logic
boxes.forEach(function(element){
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', function(){
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML = turn     // turn = "X"
            turn = changeTurn()
            ting.play()
            checkWin()
            if(!isover){
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            } 
        }
    })
})
// Game logic

// Add onclick listener to reset button
reset.addEventListener('click', function(){
    boxtext.forEach(function(element){
        element.innerHTML = ""
    })
    turn = "X"
    isover = false
    document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vw"
 })

 // Add onclick listener to mute_unmute audio button
 mute_unmute.addEventListener('click', function(){
    if(bgmusic.paused){
        bgmusic.play();
        mute_unmute.innerHTML = "Mute"
    } else{
        bgmusic.pause();
        mute_unmute.innerHTML = "Unmute";
    }
 })



