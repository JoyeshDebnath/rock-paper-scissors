const startGameBtn = document.getElementById('start-game-btn');
const display_result=document.querySelector('.display');
//global variables 
const PAPER='PAPER';
const SCISSORS='SCISSORS';
const ROCK='ROCK';
const DEFAULT_USER_CHOICE=ROCK;
const PERSON_WINS='YOU WON hurra !!!!!'
const COMPUTER_WINS='OOPS COMPUTER WON!!!'
const DRAW='IT IS A TIE!!!'
let is_game_running=false;
///////
//btn event 
startGameBtn.addEventListener('click', function() {
  if(is_game_running)
  {
    return;
  }
  is_game_running=true;
  console.log('Game is starting...');
  const get_PLAYER_choice = get_player_choice();
const COMP_CHOICE=get_comp_choice();
const win_OR_lose  = win_lose(get_PLAYER_choice,COMP_CHOICE);
  console.log(COMP_CHOICE);
  console.log(get_PLAYER_choice);

  console.log(win_OR_lose);
  display_result.style.opacity=100;
  display_result.innerHTML=win_OR_lose;
});
//////////////////end of btn eevnet 

//getting player choice ...............
const get_player_choice = function(){
  const selection=prompt(`${ROCK}, ${PAPER} or ${SCISSORS} !!!` , "").toUpperCase();

  if(selection !== PAPER && 
    selection !== SCISSORS &&
     selection !== ROCK)
  {
    alert(`we have chose  default ${DEFAULT_USER_CHOICE} for you !!!`);
    return DEFAULT_USER_CHOICE;
    }
    
      return selection;
  

};
///////end of player choice 

//getting computer choice 
const get_comp_choice = function()
{
  const random_choice=Math.random();
  if(random_choice<0.34)
  {
    return PAPER;
  }
  else if(random_choice<0.67)
  {
    return SCISSORS;

  }
  else 
  {
    return ROCK;
  }
}
//end of computer choice 
//Determine the winner 

const win_lose = function(pChoice,cChoice){
  //1st >> person wins
  if(pChoice===PAPER && cChoice===ROCK || pChoice===ROCK && cChoice===SCISSORS || pChoice===SCISSORS && cChoice===PAPER)
  {
    return PERSON_WINS;
  }
  //2nd case >> COMPUTER WINS 
  if(cChoice===PAPER && pChoice===ROCK || cChoice===ROCK && pChoice===SCISSORS || cChoice===SCISSORS && pChoice===PAPER)
  {
    return COMPUTER_WINS;
  }
  //DRAW case no 3 
   if(pChoice===SCISSORS && cChoice===SCISSORS || pChoice===PAPER && cChoice===PAPER || cChoice===ROCK && pChoice===ROCK)
   {
     return DRAW;
   }
  
}

//end of determeine the winner 



const sumUP=(numbers) => {
let sum=0;

for(const nums of numbers)
{
  sum=sum+nums;
}
return sum;

}



numbers=[1,2,3,4,5,6,7,8,9,0];
const result=sumUP(numbers);
console.log(result);
