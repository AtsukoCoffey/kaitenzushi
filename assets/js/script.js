////////////////////////////////////////////// Question array object
const words = [
  {
    name: 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Sweet shrimp'
  },
  {
    name: 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.webp',
    sound: 'assets/sounds/su-anago.mp3',
    english: 'Conger eel'
  },
  {
    name: 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.webp',
    sound: 'assets/sounds/su-battera.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'sabazushi',
    "kana": 'さばずし',
    image: 'assets/images/sushi_bouzushi_saba.webp',
    sound: 'assets/sounds/su-sabazushi.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.webp',
    sound: 'assets/sounds/su-buri.mp3',
    english: 'Big yellowtail'
  },
  {
    name: 'chirashizushi',
    "kana": 'ちらしずし',
    image: 'assets/images/sushi_chirashizushi.webp',
    sound: 'assets/sounds/su-chirashizushi.mp3',
    english: 'Sprinkled sushi'
  },
  {
    name: 'chutoro',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.webp',
    sound: 'assets/sounds/su-chutoro.mp3',
    english: 'Medium tuna Toro'
  },
  {
    name: 'ebi',
    "kana": 'えび',
    image: 'assets/images/sushi_ebi.webp',
    sound: 'assets/sounds/su-ebi.mp3',
    english: 'Shrimp'
  },
  {
    name: 'hamachi',
    "kana": 'はまち',
    image: 'assets/images/sushi_hamachi.webp',
    sound: 'assets/sounds/su-hamachi.mp3',
    english: 'Medium yellowtail'
  },
  {
    name: 'hanba-gu',
    "kana": 'はんばーぐ',
    image: 'assets/images/sushi_hamburg_tare.webp',
    sound: 'assets/sounds/su-hanba-gu.mp3',
    english: 'hamburg'
  },
  {
    name: 'harasu',
    "kana": 'はらす',
    image: 'assets/images/sushi_harasu.webp',
    sound: 'assets/sounds/su-harasu.mp3',
    english: 'Salmon belly'
  },
  {
    name: 'hotate',
    "kana": 'ほたて',
    image: 'assets/images/sushi_hotate.webp',
    sound: 'assets/sounds/su-hotate.mp3',
    english: 'Scallop'
  },
  {
    name: 'ika',
    "kana": 'いか',
    image: 'assets/images/sushi_ika.webp',
    sound: 'assets/sounds/su-ika.mp3',
    english: 'Squid'
  },
  {
    name: 'ikura',
    "kana": 'いくら',
    image: 'assets/images/sushi_ikura.webp',
    sound: 'assets/sounds/su-ikura.mp3',
    english: 'Salmon roe'
  },
  {
    name: 'inarizushi',
    "kana": 'いなりずし',
    image: 'assets/images/sushi_inarizushi_set.webp',
    sound: 'assets/sounds/su-inarizushi.mp3',
    english: 'Pickled fried tofu sushi'
  },
  {
    name: 'hokkigai',
    "kana": 'ほっきがい',
    image: 'assets/images/sushi_kai_hokkigai.webp',
    sound: 'assets/sounds/su-hokkigai.mp3',
    english: 'Hokkaido clam'
  },
  {
    name: 'katsuo',
    "kana": 'かつお',
    image: 'assets/images/sushi_katsuo.webp',
    sound: 'assets/sounds/su-katsuo.mp3',
    english: 'Bonito'
  },
  {
    name: 'kazunoko',
    "kana": 'かずのこ',
    image: 'assets/images/sushi_kazunoko.webp',
    sound: 'assets/sounds/su-kazunoko.mp3',
    english: 'Herring roe'
  },
  {
    name: 'kappa',
    "kana": 'かっぱ',
    image: 'assets/images/sushi_makimono_kappa.webp',
    sound: 'assets/sounds/su-kappa.mp3',
    english: 'Cucumber'
  },
  {
    name: 'nattou',
    "kana": 'なっとう',
    image: 'assets/images/sushi_makimono_nattou.webp',
    sound: 'assets/sounds/su-nattou.mp3',
    english: 'Natto'
  },
  {
    name: 'negitoro',
    "kana": 'ねぎとろ',
    image: 'assets/images/sushi_makimono_negitoro.webp',
    sound: 'assets/sounds/su-negitoro.mp3',
    english: 'Tuna & Spring onion'
  },
  {
    name: 'takuan',
    "kana": 'たくあん',
    image: 'assets/images/sushi_makimono_takuwan.webp',
    sound: 'assets/sounds/su-takuan.mp3',
    english: 'Pickled radish'
  },
  {
    name: 'torotaku',
    "kana": 'とろたく',
    image: 'assets/images/sushi_makimono_torotaku.webp',
    sound: 'assets/sounds/su-torotaku.mp3',
    english: 'Tuna & Pickled radish'
  },
  {
    name: 'sake',
    "kana": 'さけ',
    image: 'assets/images/sushi_salmon.webp',
    sound: 'assets/sounds/su-sake.mp3',
    english: 'Salmon'
  },
  {
    name: 'tai',
    "kana": 'たい',
    image: 'assets/images/sushi_tai.webp',
    sound: 'assets/sounds/su-tai.mp3',
    english: 'Sea bream'
  },
  {
    name: 'tako',
    kana: 'たこ',
    image: 'assets/images/sushi_tako.webp',
    sound: 'assets/sounds/su-tako.mp3',
    english: 'Octopus'
  },
  {
    name: 'tamago',
    kana: 'たまご',
    image: 'assets/images/sushi_tamago.webp',
    sound: 'assets/sounds/su-tamago.mp3',
    english: 'Egg'
  },
  {
    name: 'temakizushi',
    "kana": 'てまきずし',
    image: 'assets/images/sushi_temakizushi.webp',
    sound: 'assets/sounds/su-temakizushi.mp3',
    english: 'Hand-rolled sushi'
  },
  {
    name: 'uni',
    "kana": 'うに',
    image: 'assets/images/sushi_uni.webp',
    sound: 'assets/sounds/su-uni.mp3',
    english: 'Sea urchin'
  },
  // Add more data later-----
  {
    name: 'amaebi',
    "kana": 'あまえび',
    image: 'assets/images/sushi_amaebi.webp',
    sound: 'assets/sounds/su-amaebi.mp3',
    english: 'Sweet shrimp'
  },
  {
    name: 'anago',
    "kana": 'あなご',
    image: 'assets/images/sushi_anago.webp',
    sound: 'assets/sounds/su-anago.mp3',
    english: 'Conger eel'
  },
  {
    name: 'battera',
    "kana": 'ばってら',
    image: 'assets/images/sushi_battera.webp',
    sound: 'assets/sounds/su-battera.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'sabazushi',
    "kana": 'さばずし',
    image: 'assets/images/sushi_bouzushi_saba.webp',
    sound: 'assets/sounds/su-sabazushi.mp3',
    english: 'Mackerel sushi'
  },
  {
    name: 'buri',
    "kana": 'ぶり',
    image: 'assets/images/sushi_buri.webp',
    sound: 'assets/sounds/su-buri.mp3',
    english: 'Big yellowtail'
  },
  {
    name: 'chirashizushi',
    "kana": 'ちらしずし',
    image: 'assets/images/sushi_chirashizushi.webp',
    sound: 'assets/sounds/su-chirashizushi.mp3',
    english: 'Sprinkled sushi'
  },
  {
    name: 'chutoro',
    "kana": 'ちゅうとろ',
    image: 'assets/images/sushi_chutoro.webp',
    sound: 'assets/sounds/su-chutoro.mp3',
    english: 'Medium tuna Toro'
  },
];

/////////////////////////////////////////////////////////////// 
// Landing page
// Entry form automatically show up in 1 second
///////////////////////////////////////////////////////////////

// Access the screens - Modal
const landingScreen = document.getElementById('landing');
const settingScreen = document.getElementById('setting');
const gameScreen = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    landingScreen.style.display = "block";
  }, 1000);

  // Add event listeners to the buttons
  const entryButton = document.getElementById('entty-submit');
  entryButton.addEventListener('click', gamePageToggle);
  entryButton.addEventListener('click', () => {
    const userName = document.getElementById('input-name').value;
    document.getElementById('user-name').textContent = userName;
  });
  const gameStartButton = document.getElementById('game-start');
  gameStartButton.addEventListener('click', gamePageToggle);
});

// Toggle function of the screens < Landing - Setting & score - Game >
function gamePageToggle() {
  if (landingScreen.style.display === "block") {
    landingScreen.style.display = "none";
    settingScreen.style.display = "block";
    scoreDisplay.style.display = "block";
  } else if (settingScreen.style.display === "block") {
    settingScreen.style.display = "none";
    gameScreen.style.display = "block";
    loadGame();
  }
};

/////////////////////////////////////////////////////////////// 
// Audio files on off toggle function
// ON OFF check boxes are in Header nav toggle, and setting screen 
///////////////////////////////////////////////////////////////
// Access sound check boxes 
const wordSoundsCheckbox = document.getElementsByClassName('word-sound-checkbox');
const effectSoundsCheckbox = document.getElementsByClassName('effect-sound-checkbox');
const bgmSoundsCheckbox = document.getElementsByClassName('bgm-checkbox');

// Give event listener -> turnOnSounds function
// Bug - Solution from tutor support Sean using "for each" method and event listener "change" 
[...wordSoundsCheckbox].forEach(checkbox => checkbox.addEventListener("change", (event) => turnOnWords(event)));
[...effectSoundsCheckbox].forEach(checkbox => checkbox.addEventListener("change", (event) => turnOnEffect(event)));
[...bgmSoundsCheckbox].forEach(checkbox => checkbox.addEventListener("change", (event) => turnOnBgm(event)));

// Access sounds file and Effect sound files
const wordAudio = document.getElementById('wr-sound');
const effectSoundsArray = document.getElementsByClassName('effect-sounds');
const bgmAudio = document.getElementById('bgm');

/**
 * Turn on sounds function
 * give this function all the sounds checkbox and submit button 
 */
function turnOnWords(event) {
  if (event.target.checked) {
    wordAudio.muted = false;
    wordSoundsCheckbox[0].checked = true;
    wordSoundsCheckbox[1].checked = true;
  }
  else {
    wordAudio.muted = true;
    wordSoundsCheckbox[0].checked = false;
    wordSoundsCheckbox[1].checked = false;
  }
}

function turnOnEffect(event) {
  // If one of them checked -> automatically check another one and sound muted OFF
  if (event.target.checked) {
    // loop through to unmute
    for (let i = 0; i < effectSoundsArray.length; i++) {
      effectSoundsArray[i].muted = false;
      effectSoundsCheckbox[0].checked = true;
      effectSoundsCheckbox[1].checked = true;
    }
  } else {
    // loop through to mute
    for (let i = 0; i < effectSoundsArray.length; i++) {
      effectSoundsArray[i].muted = true;
      effectSoundsCheckbox[0].checked = false;
      effectSoundsCheckbox[1].checked = false;
    }
  }
}

function turnOnBgm(event) {
  if (event.target.checked) {
    bgmAudio.muted = false;
    bgmSoundsCheckbox[0].checked = true;
    bgmSoundsCheckbox[1].checked = true;
  } else {
    bgmAudio.muted = true;
    bgmSoundsCheckbox[0].checked = false;
    bgmSoundsCheckbox[1].checked = false;
  }
}


/////////////////////////////////////////////////////////////// 
// Game screen
// Choose the settings and submit to game screen 
///////////////////////////////////////////////////////////////

///////////////////////////////////////////   All the global counters and variables for game
const imageDisplay = document.getElementById('img-display');
const textDisplay = document.getElementById('text-display');
const textOver = document.getElementById('text-overlay');
const kanaDisplay = document.getElementById('kana-display');
const kanaOver = document.getElementById('kana-overlay');
const english = document.getElementById('english');
const input = document.getElementById('input'); // input box

// Game counter  
let gameCounter = 0;
// Letter counter 
let letterCounter = 0;
// let kanaLetterCounter = 0;
// Correct / Mistake Letter counter
let correctTypeCounter = 0;
let missTypeCounter = 0;
let clearWord = 0;
let missWord = 0;

// Create a shallow copy of words array, Original array is the top of the script
let shuffledWords = [...words];

/**
 *  Shuffle the question array object 
 *  Using Fisher Yates shuffle method : [BUG] article from stackoverflow
 *  */
function shuffle() {
  // for loop from last index
  for (i = shuffledWords.length - 1; i > 0; i--) {
    randomIndexOfWords = Math.floor(Math.random() * i)
    // escape value of last index of shuffledWords array
    temporaryValue = shuffledWords[i]
    // swap last index value to random value
    shuffledWords[i] = shuffledWords[randomIndexOfWords]
    // swap random index value to last index valu
    shuffledWords[randomIndexOfWords] = temporaryValue
  }
};

///////////////////////////////////////////   All the game main functions

/**
 * Load Game - from setting & score screen 
 * Reset the question contents and input text area, shuffle the question array
 * Start the global time-limit and start game
 */
function loadGame() {
  // Reset the overlay div and input with empty value
  document.getElementById('text-overlay').textContent = "";
  document.getElementById('kana-overlay').textContent = "";
  document.getElementById('input').value = "";
  // Shuffle again for new order - question array
  shuffle();
  // Start the game - question word
  nextWord();
  // Set interval and after 60 seconds finishGame()
  let timeDisplay = 20;
  document.getElementById('time-left').textContent = `${timeDisplay}`;
  // Display time limit every second
  const globalTimerId = setInterval(() => {
    timeDisplay--;
    document.getElementById('time-left').textContent = `${timeDisplay}`;
    if (timeDisplay === 0) {
      clearInterval(globalTimerId);
      finishGame();
    }
  }, 1000)
  // Focus on input area
  input.focus();
  // All the counter reset
  gameCounter = 0;
  letterCounter = 0;
  // let kanaLetterCounter = 0;
  correctTypeCounter = 0;
  missTypeCounter = 0;
  clearWord = 0;
  missWord = 0;
  // Back ground music on
  bgmAudio.play();
};

/**
 * Set one word timer and restart
 * Use variable to store Timeout for passing to clearTimeout
 * Referenced from stackoverflow and perplexity : README [BUGS]
 */
/// Variable to store the timeout identifier
let oneWordTimeoutId;

/**
 * Next word function - Start game and every time completed typing or
 * got time out executes this function for next word question
 * Display shuffled question word [game counter index]
 * Set one word timer Referenced : README [BUGS]
 */
function nextWord() {
  // Clear the previous timeout if it exists
  clearTimeout(oneWordTimeoutId);

  // Display next shuffled word
  imageDisplay.innerHTML = '<img src="' + shuffledWords[gameCounter].image + '" width="100" height="100" alt="Question word">';
  kanaDisplay.innerHTML = shuffledWords[gameCounter].kana;
  textDisplay.innerHTML = shuffledWords[gameCounter].name;
  english.innerHTML = shuffledWords[gameCounter].english;

  // Play word sound
  wordAudio.setAttribute('src', shuffledWords[gameCounter].sound);
  wordAudio.play();

  // Reset the overlay div and input with empty value
  document.getElementById('text-overlay').textContent = "";
  document.getElementById('kana-overlay').textContent = "";
  document.getElementById('input').value = "";

  // Set one word timeout
  oneWordTimeoutId = setTimeout(function () {
    // Actions when it reached time out
    document.getElementById('click-sound').play();
    // Next word
    gameCounter++;
    // Reset word counter
    letterCounter = 0;
    // Mobile user can't count miss-type at handleKeyPress function so count in this function
    missTypeCounter += textDisplay.innerText.length;
    missWord++;
    // Display score
    inputScore();
    // Next word - game restart
    nextWord();
    // Time limit 10 secounds
  }, 15000);

}

/**
 * Determine pressed key function
 * if matched change color, add counter to go next letter
 * NOT work for mobile screen keyboard --> validate function for mobile
 */
function handleKeyPress(event) {

  // Access the key that was pressed
  const key = event.target.value;

  // Check whether match the letter
  if (key == textDisplay.textContent.charAt(letterCounter)) {

    // Save the matched key into currentLetter variable
    let currentLetter = textDisplay.innerText.charAt(letterCounter);

    // typing sound for matched key
    document.getElementById('type-sound').play();

    // Add matched letter to the overlay div and update the display div
    document.getElementById('text-overlay').innerHTML = textOver.innerText += currentLetter;

    // Go to next letter
    letterCounter++;

    // When overlay text complete the word go to validate function
    if (textOver.innerText == textDisplay.innerText) {
      validateInput();
    }
    // For mobile keyboard set Return key for validate function
  } else if (key == 'return') {
    validateInput();

    // Everything else is miss typing
  } else {
    // wrong typing sound
    document.getElementById('hit-sound').play();

    // Mistake counter
    missTypeCounter++;
  }

  // Reset input box
  document.getElementById('input').value = "";
}

/**
  * Validate user entry when correct typing, go on to next
  * For keyboard user - check displayed question text and overlay text
  * For mobile user - check displayed question text and input data
  */
function validateInput() {
  if (textOver.innerText == textDisplay.innerText || input.value == textDisplay.innerText) {
    // Clear sound
    document.getElementById('clear-sound').play();
    // letter counter reset
    letterCounter = 0;
    // kanaLetterCounter = 0;
    correctTypeCounter += textDisplay.innerText.length;
    clearWord++;
    gameCounter++;
    // Next word
    nextWord();

    // Display score
    inputScore();
  }
}

/**
 * Display score function
 * This function is implemented in validateInput(), and setTimeout() in the nextWord() function
 */
function inputScore() {
  document.getElementById('clear-words').innerText = `${clearWord}`;
  document.getElementById('miss-words').innerText = `${missWord}`;
  document.getElementById('miss-type').innerText = `${missTypeCounter}`;
  // SuccessRate calculate - in case of the calculation goes 66.66666666 use Math.floor
  let successRate = Math.floor(correctTypeCounter / (correctTypeCounter + missTypeCounter) * 100);
  document.getElementById('success-rate').innerText = `${successRate}`;
}

/**
 * Finish game function
 * Clear one word timer, clear all the counters, toggle to Setting & score screen
 */
function finishGame() {
  //Clear one word time limit
  clearTimeout(oneWordTimeoutId);

  //Stop back ground music
  bgmAudio.pause();
  bgmAudio.currentTime = 0;

  textDisplay.innerHTML = "Time out";
  textOver.innerHTML = "Time out";

  // Ending sound
  document.getElementById('ending-sound').play();

  // Screen toggle to setting & score
  settingScreen.style.display = "block";
  gameScreen.style.display = "none";
  // New score display
  const newScoreContainer = document.getElementById('new-score-container');
  newScoreContainer.style.display = "block";

  /////////////////////////////////////////////////////////////// 
  // Get recent best score 
  // From local storage 
  ///////////////////////////////////////////////////////////////
  const recentUserName = localStorage.getItem('recentUserName');
  // Keys and values of stored data is string so JSON.parse to number
  const recentClearScore = JSON.parse(localStorage.getItem('recentClearScore'));
  const recentSuccessRate = JSON.parse(localStorage.getItem('recentSuccessRate'));
  // First time, if Recent score is NaN, set 0
  if (recentClearScore === NaN) {
    recentClearScore.innerText = 0;
    recentSuccessRate.innerText = 0;
  } 

  // SuccessRate calculate - in case of the calculation goes 66.66666666 use Math.floor
  const successRate = Math.floor(correctTypeCounter / (correctTypeCounter + missTypeCounter) * 100);
  const userName = document.getElementById('user-name').textContent
  document.getElementById('new-score').innerHTML = `<h3>Hooray! Your New Score!</h3><div class="new-score-display"><p>Name : ` + `${userName}` + `</p><p>Clear words : ` + `${clearWord}` + `</p><p>Missed words : ` + `${missWord}` + `</p><p>Miss type : ` + `${missTypeCounter}` + `</p><p>Success rate : ` + `${successRate}` + `%</p></div><h3>Recent Best Score</h3><div class="new-score-display"><p>Name : ` + `${recentUserName}` + `</p><p>Clear words : ` + `${recentClearScore}` + `</p><p>Success rate : ` + `${recentSuccessRate}` + `%</p><i title="Close" class="fa-solid fa-square-xmark"></i></div>`;

  // Add close X button to the New score display
  const closeX = document.getElementsByClassName('fa-square-xmark');
  closeX[0].addEventListener('click', () => {
    newScoreContainer.style.display = "none";
  })


  /////////////////////////////////////////////////////////////// 
  // Store the recent best score into local storage
  //  
  ///////////////////////////////////////////////////////////////

  // If New score is higher than Recent score, New score = Recent score
  if (clearWord > recentClearScore.innerText) {
    recentClearScore.innerText = clearWord;
    recentSuccessRate.innerText = successRate;
  }
  // Save the Recent scores into local storage
  localStorage.setItem("recentUserName", document.getElementById('input-name').value);
  localStorage.setItem("recentClearScore", JSON.stringify(recentClearScore.innerText));

  // localStorage.setItem("recentMissType", missTypeCounter);
  localStorage.setItem("recentSuccessRate", JSON.stringify(recentSuccessRate.innerText));
  // Reset the new score
  document.getElementById('clear-words').textContent = "";
  document.getElementById('miss-words').textContent = "";
  document.getElementById('miss-type').textContent = "";
  document.getElementById('success-rate').textContent = "";
}
///////////////////////////////////////////   Event listeners for catching users action

// keyboard window event
input.addEventListener('input', handleKeyPress);
// mobile device touchstart event
// input.addEventListener('touchstart', handleKeyPress);
// // Add touchend
// // input.addEventListener('change', validateInput);
// input.addEventListener("change" (event) => {
//   console.log(event.target.value)
//   });


/**
 * Difine kana alphabet
 * I will challenge this matching system if I had a time
 */
// let lastIndex = document.getElementById('text-overlay').innerText.length;
// let lastSecondIndex = document.getElementById('text-overlay').innerText.length - 1;
// let lastThirdIndex = document.getElementById('text-overlay').innerText.length - 2;
// let kanaLasT = textOver.textContent.charAt(lastThirdIndex);
// let kanaLasS = textOver.textContent.charAt(lastSecondIndex);
// let kanaLast = document.getElementById('text-overlay').innerText;
// let kana;
// kana = detectBoin();
// let hiragana;
// if (kana) {
//   hiragana = kana;
// }
// // Add matched letter to the overlay div and update the div
// document.getElementById('kana-overlay').innerHTML = kanaOver.innerText += hiragana;
// kana = "";
// hiragana = "";
/**
 * Defining kana using textOver's input data
 */
// function detectBoin() {
//   if (!lastSecondIndex || !lastThirdIndex) {
//     if (kanaLast === 'a') {
//       return "あ";
//     } else if (kanaLast === 'i') {
//       return "い";
//     } else if (kanaLast === 'u') {
//       return "う";
//     } else if (kanaLast === 'e') {
//       return "え";
//     } else if (kanaLast === 'o') {
//       return "お";
//     }
//   } else if (lastSecondIndex || lastThirdIndex) {
//     if (kanaLasS === 'm' && kanaLast === 'a') {
//       return "ま";
//     } else if (kanaLasS === 'b' && kanaLast === 'i') {
//       return "び";
//     }
//   }
// };
// else if (k === 'k' && kanaLast === 'a') {
//   return "か";
// } else if (k === 'k' && kanaLast === 'i') {
//   return "き";
// } else if (k === 'k' && kanaLast === 'u') {
//   return "く";
// } else if (k === 'k' && kanaLast === 'e') {
//   return "け";
// } else if (k === 'k' && kanaLast === 'o') {
//   return "こ";
// } else if (k === 's' && kanaLast === 'a') {
//   return "さ";
// } else if ((k === 's' && kanaLast === 'i') || (k === 's' && a === 'h' && kanaLast === 'i')) {
//   return "し";
// } else if (k === 's' && kanaLast === 'u') {
//   return "す";
// } else if (k === 's' && kanaLast === 'e') {
//   return "せ";
// } else if (k === 's' && kanaLast === 'e') {
//   return "そ";
// } else if (k === 't' && kanaLast === 'a') {
//   return "た";
// } else if ((k === 't' && kanaLast === 'u') || (k === 't' && a === 's' && kanaLast === 'u')) {
//   return "ち";
// } else if ((k === 't' && kanaLast === 'u') || (k === 't' && a === 's' && kanaLast === 'u')) {
//   return "つ";
// } else if (k === 't' && kanaLast === 'e') {
//   return "て";
// } else if (k === 't' && kanaLast === 'o') {
//   return "と";
// } else if (k === 'n' && kanaLast === 'a') {
//   return "な";
// } else if (k === 'n' && kanaLast === 'i') {
//   return "に";
// } else if (k === 'n' && kanaLast === 'u') {
//   return "ぬ";
// } else if (k === 'n' && kanaLast === 'e') {
//   return "ね";
// } else if (k === 'n' && kanaLast === 'o') {
//   return "の";
// } else if (k === 'h' && kanaLast === 'a') {
//   return "は";
// } else if (k === 'h' && kanaLast === 'i') {
//   return "ひ";
// } else if (k === 'f' && kanaLast === 'u') {
//   return "ふ";
// } else if (k === 'h' && kanaLast === 'e') {
//   return "へ";
// } else if (k === 'h' && kanaLast === 'o') {
//   return "ほ";
// } else if (k === 'm' && kanaLast === 'a') {
//   return "ま";
// } else if (k === 'm' && kanaLast === 'i') {
//   return "み";
// } else if (k === 'm' && kanaLast === 'u') {
//   return "む";
// } else if (k === 'm' && kanaLast === 'e') {
//   return "め";
// } else if (k === 'm' && kanaLast === 'o') {
//   return "も";
// } else if (k === 'y' && a === 'a') {
//   return "や";
// } else if (k === 'y' && a === 'u') {
//   return "ゆ";
// } else if (k === 'y' && a === 'o') {
//   return "よ";
// } else if (k === 'r' && a === 'a') {
//   return "ら";
// } else if (k === 'r' && a === 'i') {
//   return "り";
// } else if (k === 'r' && a === 'u') {
//   return "る";
// } else if (k === 'r' && a === 'e') {
//   return "れ";
// } else if (k === 'r' && a === 'o') {
//   return "ろ";
// } else if (k === 'w' && a === 'a') {
//   return "わ";
// } else if (k === 'n' && a === 'n') {
//   return "ん";
// } else if (a === 'a') {
//   return "あ";
// } else if (a === 'i') {
//   return "い";
// } else if (a === 'u') {
//   return "う";
// } else if (a === 'e') {
//   return "え";
// } else if (a === 'o') {
//   return "お";
// }

// (key !== ('a' || 'i' || 'u' || 'e' || 'o')) {
//   throw;
// }