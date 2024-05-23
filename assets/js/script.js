// Question array object
const words = [
  {
    name: 'amaebi',
    "abc": 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.webp'
  },
  {
    name: 'anago',
    "abc": 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.webp'
  },
  {
    name: 'battera',
    "abc": 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.webp'
  },
  {
    name: 'buri',
    "abc": 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.webp'
  },
  {
    name: 'kappa',
    "abc": 'buri',
    "kana": 'かっぱ',
    image: 'assets/images/makimono_kappa.webp'
  },
  {
    name: 'negitoro',
    "abc": 'buri',
    "kana": 'ねぎとろ',
    image: 'assets/images/makimono_negitoro.webp'
  },
  {
    name: 'takuwan',
    "abc": 'buri',
    "kana": 'たくあん',
    image: 'assets/images/makimono_takuwan.webp'
  },
  {
    name: 'chutoro',
    "abc": 'buri',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.webp'
  },
  {
    name: 'ebi',
    "abc": 'buri',
    "kana": 'えび',
    image: 'assets/images/sushi_ebi.webp'
  },
  {
    name: 'hamachi',
    "abc": 'buri',
    "kana": 'はまち',
    image: 'assets/images/sushi_hamachi.webp'
  },
  {
    name: 'hanba-gu',
    "abc": 'buri',
    "kana": 'はんばーぐ',
    image: 'assets/images/sushi_hamburg_tare.webp'
  },
  {
    name: 'hotate',
    "abc": 'buri',
    "kana": 'ほたて',
    image: 'assets/images/sushi_hotate.webp'
  },
  {
    name: 'ika',
    "abc": 'buri',
    "kana": 'いか',
    image: 'assets/images/sushi_ika.webp'
  },
  {
    name: 'ikura',
    "abc": 'buri',
    "kana": 'いくら',
    image: 'assets/images/sushi_ikura.webp'
  },
  {
    name: 'katsuo',
    "abc": 'buri',
    "kana": 'かつお',
    image: 'assets/images/sushi_katsuo.webp'
  },
  {
    name: 'sake',
    "abc": 'buri',
    "kana": 'さけ',
    image: 'assets/images/sushi_salmon.webp'
  },
  {
    name: 'tai',
    "abc": 'buri',
    "kana": 'たい',
    image: 'assets/images/sushi_tai.webp'
  },
  {
    name: 'tako',
    "abc": 'buri',
    "kana": 'たこ',
    image: 'assets/images/sushi_tako.webp'
  },
  {
    name: 'tamago',
    "abc": 'buri',
    "kana": 'たまご',
    image: 'assets/images/sushi_tamago.webp'
  },
  {
    name: 'inarizushi',
    "abc": 'buri',
    "kana": 'いなりずし',
    image: 'assets/images/food_inarizushi_set.webp'
  },
];


/**
 * All the global counter and variables
 */
// Get div for display questions
let imageDisplay = document.getElementById('img-display');
let textDisplay = document.getElementById('text-display');
let textOver = document.getElementById('text-overlay');
let kanaDisplay = document.getElementById('kana-display');
let kanaOver = document.getElementById('kana-overlay');
let input = document.getElementById('input'); // input box

// Game counter = Number of correct answer
let gameCounter = 0;
// Letter counter 
let letterCounter = 0;
// let kanaLetterCounter = 0;
// Correct / Mistake Letter counter
let correctTypeCounter = 0;
let missTypeCounter = 0;

/**
 * All the main functions
 *///////////////////////////////////////////////////////////////
// Shuffle the array object
// let shuffledWords = [];
// function shuffle() {
//   for (word of words) {
//     shuffledWords.push(words[Math.floor(Math.random() * 40)]);
//   }
// }

/**
 * Start game function
 * loop through the shuffled question
 */
function startGame() {
  // Display next (shuffled) words word
  imageDisplay.innerHTML = '<img src="' + words[gameCounter].image + '" width="100" height="100" alt="Question word">';
  kanaDisplay.innerHTML = words[gameCounter].kana;
  textDisplay.innerHTML = words[gameCounter].name;

  // Reset the div with empty value
  document.getElementById('text-overlay').textContent = "";
  document.getElementById('kana-overlay').textContent = "";
  document.getElementById('input').value = "";

  // // Set one word timer and restart
  // setTimeout(function () {
  //   document.getElementById('hit-sound').play();
  //   gameCounter++;
  //   letterCounter = 0;
  //   startGame();
  // }, 20000);

}

/**
 * Determine pressed key, change color, add counter to go next letter
 */
function handleKeyPress(event) {
  // submit from form
  event.preventDefault();

  // Access the key that was pressed
  const key = event.key;

  // Check whether match the letter
  if (key == textDisplay.textContent.charAt(letterCounter)) {
    // typing sound
    document.getElementById('type-sound').play();

    let currentLetter = textDisplay.innerText.charAt(letterCounter);

    // Add matched letter to the overlay div and update the div
    document.getElementById('text-overlay').innerHTML = textOver.innerText += currentLetter;

    // Go to next word
    letterCounter++;
    correctTypeCounter++;

    console.log('Letter Counter is: ', letterCounter);

    // Enter key action  // Check user input is correct for mobile user

  } else if (key === "Enter") {
    validateInput();

  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    missTypeCounter++;

  }

  // Check kana alphabet
  let kana;
  kana = detectBoin(key);
  // Add matched letter to the overlay div and update the div
  document.getElementById('kana-overlay').innerHTML = kanaOver.innerText += kana;
  kana.textContent = "";


  // Reset input box
  document.getElementById('input').value = "";

  // console the pressed key
  console.log('Key pressed: ' + key);

}

/**
  * Validate user entry when correct typing, go on to next
  *///   // Enter key action
function validateInput() {

  if (textOver.innerText == textDisplay.innerText || input.innerText == textDisplay.innerText) {

    // letter counter reset
    letterCounter = 0;
    // kanaLetterCounter = 0;
    gameCounter++;
    // Next word
    startGame();

  }
}

/**
 * Finish game function
 */
function finishGame() {
  textDisplay.innerHTML = "Time out";
  textOver.innerHTML = "Time out";

  // Ending sound
  document.getElementById('ending-sound').play();

  // Score display
  document.getElementsByTagName('main')[0].innerHTML =
    `<div><p>Menu</p><ul><li>Sushi menu</li><li>Travel in Japan</li><li>Greetings</li></ul></div><div><p>Score</p><ul><li>Clear : ${gameCounter}</li><li>Miss : 0</li><li>Success rate : %</li></ul></div>`;
}

// keyboard window event
window.addEventListener('keypress', handleKeyPress);
// Submit
input.addEventListener('submit', handleKeyPress);

// // Add event to input box -> validate and enter button action
// input.addEventListener('keypress', handleKeyPress);

// Wait for the DOM to finish loading before running the game
// Start the global time-limit and start game
document.addEventListener("DOMContentLoaded", function () {
  // shuffle();
  startGame();
  setTimeout(function () {
    finishGame();
  }, 60000);
}); //Add event listener





// kana if statement
let lastSecondIndex = textOver.length[letterCounter] - 2;
let lastIndex = textOver.length[letterCounter] -1;
let k = textOver.charAt(lastSecondIndex);;
let a = textOver.charAt(lastIndex);

function detectBoin(key) {
  if (key === 'a') {
    return "あ";
  } else if (key === 'i') {
    return "い";
  } else if (key === 'u') {
    return "う";
  } else if (key === 'e') {
    return "え";
  } else if (key === 'o') {
    return "お";
  } else if (k === 'k' && a === 'a') {
    return "か";
  } else if (k === 'k' && a === 'i') {
    return "き";
  } else if (k === 'k' && a === 'u') {
    return "く";
  } else if (k === 'k' && a === 'e') {
    return "け";
  } else if (k === 'k' && a === 'o') {
    return "こ";
  } else if (k === 's' && a === 'a') {
    return "さ";
  } else if ((k === 's' && a === 'i') || (k === 's' && a === 'h' && a === 'i')) {
    return "し";
  } else if (k === 's' && a === 'u') {
    return "す";
  } else if (k === 's' && a === 'e') {
    return "せ";
  } else if (k === 's' && a === 'e') {
    return "そ";
  } else if (k === 't' && a === 'a') {
    return "た";
  } else if ((k === 't' && a === 'u') || (k === 't' && a === 's' && a === 'u')) {
    return "ち";
  } else if ((k === 't' && a === 'u') || (k === 't' && a === 's' && a === 'u')) {
    return "つ";
  } else if (k === 't' && a === 'e') {
    return "て";
  } else if (k === 't' && a === 'o') {
    return "と";
  } else if (k === 'n' && a === 'a') {
    return "な";
  } else if (k === 'n' && a === 'i') {
    return "に";
  } else if (k === 'n' && a === 'u') {
    return "ぬ";
  } else if (k === 'n' && a === 'e') {
    return "ね";
  } else if (k === 'n' && a === 'o') {
    return "の";
  } else if (k === 'h' && a === 'a') {
    return "は";
  } else if (k === 'h' && a === 'i') {
    return "ひ";
  } else if (k === 'f' && a === 'u') {
    return "ふ";
  } else if (k === 'h' && a === 'e') {
    return "へ";
  } else if (k === 'h' && a === 'o') {
    return "ほ";
  } else if (k === 'm' && a === 'a') {
    return "ま";
  } else if (k === 'm' && a === 'i') {
    return "み";
  } else if (k === 'm' && a === 'u') {
    return "む";
  } else if (k === 'm' && a === 'e') {
    return "め";
  } else if (k === 'm' && a === 'o') {
    return "も";
  } else if(k === 'y' && a === 'a') {
    return "や";
  } else if (k === 'y' && a === 'u') {
    return "ゆ";
  } else if (k === 'y' && a === 'o') {
    return "よ";
  } else if (k === 'r' && a === 'a') {
    return "ら";
  } else if (k === 'r' && a === 'i') {
    return "り";
  } else if (k === 'r' && a === 'u') {
    return "る";
  } else if (k === 'r' && a === 'e') {
    return "れ";
  } else if (k === 'r' && a === 'o') {
    return "ろ";
  } else if (k === 'w' && a === 'a') {
    return "わ";
  } else if (k === 'n' && a === 'n') {
    return "ん";
  }
  
};