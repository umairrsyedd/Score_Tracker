// Get the input entered in the number of rounds

document.querySelector("#button-addon2").addEventListener("click",input)
function input(){
window.score = document.querySelector("#input").value;
editMaxScore();
}
function editMaxScore(){
    var text=document.querySelector("#D-score");
    text.classList.add("aligning")
    text.textContent = score;
}
// Set the input to the max score

// if player 1 button is clicked increment score p1
// if player 2 button is clicked increment score of p2
let p1=0;
let p2=0;
document.querySelector("#p1-in").addEventListener("click",function(){
    if(p1==score){
    console.log("Player 1 Has Won The Game")
    }
    else{
        p1=p1+1;
    }
    player1display();
    
})
document.querySelector("#p1-de").addEventListener("click",function(){
    if(p1<0 || p1==0) {
        p1=0;
    }
    else{
        p1=p1-1;
    }
    player1display();
    
})
document.querySelector("#p2-in").addEventListener("click",function(){
    if(p2==score)
    {
        winningmessage("Player 2  ");
    }
    else{
    p2=p2+1;
    }
    player2display()
})
document.querySelector("#p2-de").addEventListener("click",function(){
    if(p2<0 || p2==0)
    {
        p2=0;
    }
    else{
    p2=p2-1;
    }
    player2display()
})

function player1display(){
let p1score=document.querySelector(".player1");
p1score.textContent= "Score : " + p1;
}
function player2display(){
let p2score=document.querySelector(".player2");
p2score.textContent= "Score : " + p2;
}

// If any player wins the game the display the winning player 
// with a winning button symbol
function winningmessage(player){
    let victory= document.querySelector("#D-score");
    victory.textContent=player + "Won"
}
// if reset button is clicked then reset everything including the 
// player score and the max score 
document.querySelector("#reset").addEventListener("click",function(){
    location.reload();
})
