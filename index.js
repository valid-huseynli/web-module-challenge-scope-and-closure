// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * -Counter2 is a use regular function and global var. counter1 is way fancier beacuse uses high order function.
 * 2. Which of the two uses a closure? How can you tell?
 * -They both use closures, because it's a working function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 - In most scenarios counter1 is better than counter1, beacuse counter2 has global vars.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */




function inning(){
  return Math.floor(Math.random() * 3);
}
console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < numInnings; i++) {
      home += inning();
  }
  for (let i = 0; i < numInnings; i++) {
      away += inning();}
  
  return {"Home": home,"Away": away};
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inning) {
  return {home: inning(), away: inning()}
}

function scoreboard(inning,getInningScore,numInnings) {
 let awayTeam = 0
 let homeTeam = 0
  for (let i = 1; i <= numInnings; i++){
    if (i === 1) {
      awayTeam += inning(getInningScore).away;
      homeTeam += inning(getInningScore).home;
      console.log(`1st inning: ${awayTeam} - ${homeTeam}`);
    }else if (i === 2) {
      awayTeam += inning(getInningScore).away;
      homeTeam += inning(getInningScore).home;
      console.log(`2nd inning: ${awayTeam} - ${homeTeam}`);
    } else if (i === 3) {
      awayTeam += inning(getInningScore).away;
      homeTeam += inning(getInningScore).home;
      console.log(`3rd inning: ${awayTeam} - ${homeTeam}`);
    } else {
      awayTeam += inning(getInningScore).away;
      homeTeam += inning(getInningScore).home;
      console.log(`${i}st inning: ${awayTeam} - ${homeTeam}`);
    }
  }
console.log(`Final Score: ${awayTeam} - ${homeTeam}`);
}
scoreboard(getInningScore, inning, 9)


