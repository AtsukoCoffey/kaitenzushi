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
let kanaDisplay = document.getElementById('kana-display');
let textOver = document.getElementById('text-overlay');
// let textOver = document.getElementById('text-overlay');
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
  // Access the key that was pressed
  const key = event.key;
  // let kana = detectBoin(key);

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

    // Reset input box
    document.getElementById('input').value = "";

    console.log('Letter Counter is: ', letterCounter);

    // Enter key action
  } else if (key === "Enter") {
    validateInput();

    // Check user input is correct for mobile user
  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    missTypeCounter++;

    // Reset input box
    document.getElementById('input').value = "";
  }
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

// Start and set time limit
startGame();
setTimeout(function () {
  finishGame();
}, 60000);

// keyboard window event
window.addEventListener('keypress', handleKeyPress);

// // Add event to input box -> validate and enter button action
// input.addEventListener('keypress', handleKeyPress);

