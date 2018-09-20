//  WORDS
var array_of_words =["trump", "car", "nycda", "washington", "money", "elephant"];
var hints= {
    trump:['president', 'troll','billionare'],
    car: ['drive', 'wheels','stereo'],
    nycda: ['college', 'design','newyork'],
    washington: ['white house', '1600 pen ave', 'lincoln memorial'],
    money: ['green', 'paper', 'bills'],
    elephant: ['big animal', 'trunks','africa']
}
 
 

// CURRENT GAME WORD
var randm = Math.floor(Math.random()*array_of_words.length); 
var game_word = array_of_words[randm];
 console.log(game_word)

// HINT GENERATOR
function hin(){
    var randh = Math.floor(Math.random()*3); 
    var randHint = hints[game_word][randh]; 
    document.querySelector("#hint").innerHTML = randHint; 
    document.querySelector("#hint").style.backgroundColor = "lightyellow";
    }
      
 
 


// VARIABLES
var char = '';
var entered_char='';
var score =0;
var sco=0;
var doubleGameWord=game_word.split("");
var xArr=[];
var entW;

 

// GET CHAR FROM INPUT
function fecth_char() {
 entW = document.getElementById("char").value.toLowerCase(); 

    for(i=0; i<entW.length; i++){ 
        if(xArr.indexOf(entW)== -1){
            char = entW;
            match_char_p(char, game_word)
            xArr.push(entW);
        } else {
            char ='9';
            match_char_m(char, game_word)
    }
    }
  
}



//  MATCH INPUT CHAR WITH CURRENT WORD
function match_char_p(char, game_word){
    var i=0;
    while (i< game_word.length){
        if(game_word[i].toLowerCase() == char){ 
            showDiv(char)
            score+=10;
            upScore(score); 
        }  
        i++;
    } 
}

function match_char_m(char, game_word){
    var i=0;
    while (i< game_word.length){
        if(game_word[i].toLowerCase() == char){ 
            
        } else {
            score-=1;
            upScore(score);
            if(score<-20){ 
                hin();
            } 
        }
        i++;
    } 
}
 

// UPDATE SCORE
function upScore(j) {
    if (score>1) {
        document.querySelector("#score").style.backgroundColor = "green";
        document.querySelector("#score").style.color = "white";
}
    if (score<1) {
        document.querySelector("#score").style.backgroundColor = "red";
        document.querySelector("#score").style.Color = "white";
    }
    document.querySelector("#score").innerHTML = j;
}



// START GAME BY ASSINING WORD
function onLod (){
    var i=0;
    var j=0;
    var tt= game_word.length;
  
     
    while (i<tt){
    $('.words').append("<div class='mainInn' onclick='myShow(this)' )>" + game_word[i] + "</div>");
    i++;
    }
    
}


//  SHOW CORRECT NUMBER
function showDiv(w){
    var i =0;
    while (i<game_word.length){
         var x = document.querySelectorAll(".mainInn");  
         if (x[i].innerHTML == w)
         x[i].style.backgroundColor = "white"; 
         delet(w);
        i++;
    }

}

  
 
// RESTART GAME LOGIC
function delet(x){
    while(doubleGameWord.indexOf(x) !==-1){
        doubleGameWord.splice(doubleGameWord.indexOf(x),1);
    }
    if(doubleGameWord.length ==0){
        setTimeout(wait, 3000); 
    } 
}


// END RESTART TIMER
function wait(){
    location.reload();
}
 