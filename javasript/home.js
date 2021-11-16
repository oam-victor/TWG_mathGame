var playing = false;
var answers = [];
var score = 0; 

window.document.getElementById("reset").onclick = () =>{

    if(playing == true){
        location.reload(true);
        
    }else{
        playing = true;
        startGame();
        generateQuestion();
    }
}

window.document.getElementById("box1").onclick = () =>{  if(playing){ development(document.getElementById("box1").innerHTML); } } 
window.document.getElementById("box2").onclick = () =>{  if(playing){ development(document.getElementById("box2").innerHTML); } } 
window.document.getElementById("box3").onclick = () =>{  if(playing){ development(document.getElementById("box3").innerHTML); } } 
window.document.getElementById("box4").onclick = () =>{  if(playing){ development(document.getElementById("box4").innerHTML); } } 

 function startGame(){
    document.getElementById("game-over").style.display = "none";
    document.getElementById("time").style.visibility = "visible";     
    document.getElementById("reset").innerHTML = "Reset";

    timercall = setInterval(()=>{
        document.getElementById("time-remaining").innerHTML -= 1;
        if(document.getElementById("time-remaining").innerHTML == "0"){
            clearInterval(timercall);
            timeisover();
        }
    }, 1000);

 }

function timeisover(){
    document.getElementById("finalScore").innerHTML = score;
    document.getElementById("game-over").style.display = "block";
    document.getElementById("time").style.visibility = "hidden";    
}

function generateQuestion(){
    answers2 = [];
    x1 = 1+Math.round(Math.random()*9);
    y1 = 1+Math.round(Math.random()*9);

    document.getElementById("screen").innerHTML = x1+"x"+y1;

    z = 1+Math.round(Math.random()*3);
    
    document.getElementById("box"+z).innerHTML = x1*y1;
    answers2.push(x1*y1)

    for(i=1;i<5;i++){
        x2 = 1+Math.round(Math.random()*9);
        y2 = 1+Math.round(Math.random()*9);
        if((i!=z) && ((x1*y1)!=(x2*y2))){
            document.getElementById("box"+i).innerHTML = x2*y2;
            answers2.push(x2*y2)
        }else if((x1*y1)==(x2*y2)){
            i-=1;
        }
    }
    answers = answers2;
}

function development(boxAnswer){
    if(boxAnswer == answers[0]){
        score += 1;
        document.getElementById("score").innerHTML = score;
        generateQuestion();
        showBoxes(document.getElementById("correct"));
    }else{
        showBoxes(document.getElementById("mistake"));
    }
}

function showBoxes(boxes){
    boxes.style.visibility = "visible";
    setTimeout(()=>{
        boxes.style.visibility = "hidden"
    }, 100);
}

