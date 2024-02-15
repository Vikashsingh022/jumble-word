const words = ['javascript', 'developer', 'programming', 'web', 'html', 'css', 'code'];
let currentWord = '';

function generateNewWord() {
    currentWord = getRandomWord();
    displayJumbledWord(currentWord);
    document.getElementById('user-input').value = '';
    document.getElementById('result').innerText = '';
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayJumbledWord(word) {
    const jumbledWord = shuffleArray(word.split('')).join('');
    document.getElementById('jumbled-word').innerText = jumbledWord;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkGuess() {
    const userGuess = document.getElementById('user-input').value.toLowerCase();
    if (userGuess === currentWord) {
        document.getElementById('result').innerText = 'Congratulations! You guessed it!';
    } else {
        document.getElementById('result').innerText = 'Try again. Incorrect guess.';
    }
}

// Initialize the game
generateNewWord();
