function ageInDays(){
    var birthYear = prompt("Enter the year of your birth.. ");
    var curryr = prompt("Enter Current year.. ")
    var ageInDayss = (curryr - birthYear) * 365;
    var h1 = document.createElement(h1);
    var intext = document.createTextNode("Your Age in Days is " + ageInDayss);
    h1.setAttribute('id','ageInDays');
    h1.appendChild(intext);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function catgenerator(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-box-2');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    image.width = 200;
    image.height = 200;
    div.appendChild(image);

}

function rpsGame(yourChoice){
    console.log('Your Choice : ',yourChoice.id);    

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = randomrps(randomno());
   //alert(randomrps(randomno()));
   console.log('Computer Choice : ', botChoice);

   result = resultInNum(humanChoice,botChoice);
   message = finalmessage(result);
   console.log(result);
   console.log(message);

   frontEnd(humanChoice,message,botChoice);
}

function randomno(){
    return Math.floor(Math.random() * 3);
}
function randomrps(num){
 return ['rock', 'paper', 'scissors'][num];
}

function resultInNum(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors': 1,'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var ComputerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, ComputerScore];
}

function finalmessage([yourScore, ComputerScore]){
    if(yourScore == 0 && ComputerScore == 1){
      return  {'message' : 'You Lose!!', 'color' : 'red'};
    }
    else if(yourScore == 0.5 && ComputerScore == 0.5){
        return  {'message' : 'You tied!!', 'color' : 'blue'};
    }
    else {
        return {'message' : 'You Win', 'color': 'green'};
    }
}

function frontEnd(yourImageChoice,finalMessage, computerImageChoice){
    var imageDatabase= {
        'rock' : document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var messagediv = document.createElement('div');
    var computerdiv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imageDatabase[yourImageChoice] + "' width =150 height =150 style=' box-shadow: 0px 10px 50px blue;'>";
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size : 50px; padding : 30px;'>" + finalMessage['message'] + "</h1>"
    computerdiv.innerHTML = "<img src='" + imageDatabase[computerImageChoice] + "' width =150 height =150 style=' box-shadow: 0px 10px 50px blue;'>";

    document.getElementById('flex-box-container3-div').appendChild(humandiv);
    document.getElementById('flex-box-container3-div').appendChild(messagediv);
    document.getElementById('flex-box-container3-div').appendChild(computerdiv);

}

var all_button = document.getElementsByTagName("button");

let CopyAllButtons = [];
for(let i=0; i< all_button.length; i++){
    CopyAllButtons.push(all_button[i].classList[1]);
}

function changecolor(all_button){
   if(all_button.value === 'red'){
        red_color();
   }
   else if(all_button.value === 'green'){
        green_color();
   }
   else if(all_button.value === 'reset'){
        reset_color();
   }
   else{
       random_color();
   }
}

function red_color(){
    for(let i=0; i < all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-danger");
    } 
}

function green_color(){
    for(let i=0; i < all_button.length; i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add("btn-success");
}
}

function reset_color(){
    for(let i=0; i < all_button.length; i++){
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(CopyAllButtons[i]);
}
}

function random_color(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i=0; i < all_button.length; i++){
let randomno = Math.floor(Math.random() * 4);
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[randomno]);
    }
}