let userName = 'Ramon';
userName ? console.log(`Hello, ${userName}`)
: console.log('Hello!');
let userQuestion = 'Will it snow tomorrow?';
console.log(`The question of the day is:
${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber){
  case 0:
  eightBall = 'Yes';
  break;
  case 1:
  eightBall = 'No';
  break;
  case 2:
  eightBall = 'Maybe';
  break;
  case 3:
  eightBall = 'Check the weather';
  break;
  case 4:
  eightBall = 'Ask Siri';
  break;
  case 5:
  eightBall = 'Somehow yes';
  break;
  case 6: 
  eightBall = 'It depends';
  break;
  case 7:
  eightBall = 'No way';
  break;
}

  console.log(eightBall);

// if run, the console displays:

Hello, Ramon
The question of the day is:
Will it snow tomorrow?
(a random answer from the 8 options, such as: Ask Siri)



