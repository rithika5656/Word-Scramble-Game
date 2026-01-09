// ===== WORD DATABASE BY CATEGORY AND DIFFICULTY =====
const wordDatabase = {
    animals: {
        easy: [
            { word: 'cat', hint: 'A common pet that meows' },
            { word: 'dog', hint: 'Man\'s best friend' },
            { word: 'fish', hint: 'Lives in water' },
            { word: 'bird', hint: 'Has wings and can fly' },
            { word: 'lion', hint: 'King of the jungle' },
            { word: 'bear', hint: 'Large furry animal that hibernates' },
            { word: 'deer', hint: 'Has antlers and is graceful' },
            { word: 'frog', hint: 'Amphibian that hops' }
        ],
        medium: [
            { word: 'elephant', hint: 'Largest land animal with a trunk' },
            { word: 'giraffe', hint: 'Has the longest neck' },
            { word: 'penguin', hint: 'Bird that cannot fly but swims' },
            { word: 'dolphin', hint: 'Intelligent marine mammal' },
            { word: 'cheetah', hint: 'Fastest land animal' },
            { word: 'kangaroo', hint: 'Australian animal that hops' },
            { word: 'leopard', hint: 'Big cat with spots' },
            { word: 'monkey', hint: 'Primate that loves bananas' }
        ],
        hard: [
            { word: 'rhinoceros', hint: 'Large animal with a horn on its nose' },
            { word: 'hippopotamus', hint: 'Large semi-aquatic mammal' },
            { word: 'crocodile', hint: 'Large reptile with powerful jaws' },
            { word: 'chameleon', hint: 'Lizard that changes color' },
            { word: 'orangutan', hint: 'Great ape from Southeast Asia' },
            { word: 'flamingo', hint: 'Pink wading bird' },
            { word: 'armadillo', hint: 'Mammal with protective shell' },
            { word: 'platypus', hint: 'Egg-laying mammal with a duck bill' }
        ]
    },
    countries: {
        easy: [
            { word: 'india', hint: 'Country known for Taj Mahal' },
            { word: 'china', hint: 'Most populous country' },
            { word: 'japan', hint: 'Land of the rising sun' },
            { word: 'italy', hint: 'Country shaped like a boot' },
            { word: 'spain', hint: 'Country famous for flamenco' },
            { word: 'egypt', hint: 'Home of the pyramids' },
            { word: 'peru', hint: 'Home of Machu Picchu' },
            { word: 'cuba', hint: 'Island nation in the Caribbean' }
        ],
        medium: [
            { word: 'germany', hint: 'European country known for engineering' },
            { word: 'brazil', hint: 'Largest country in South America' },
            { word: 'canada', hint: 'Second largest country by area' },
            { word: 'mexico', hint: 'Country south of the United States' },
            { word: 'russia', hint: 'Largest country in the world' },
            { word: 'turkey', hint: 'Country spanning Europe and Asia' },
            { word: 'sweden', hint: 'Scandinavian country' },
            { word: 'norway', hint: 'Known for fjords' }
        ],
        hard: [
            { word: 'australia', hint: 'Island continent in the Southern Hemisphere' },
            { word: 'argentina', hint: 'South American country famous for tango' },
            { word: 'switzerland', hint: 'Neutral European country' },
            { word: 'netherlands', hint: 'Country known for tulips and windmills' },
            { word: 'singapore', hint: 'City-state in Southeast Asia' },
            { word: 'indonesia', hint: 'Largest archipelago in the world' },
            { word: 'philippines', hint: 'Island nation in Southeast Asia' },
            { word: 'bangladesh', hint: 'South Asian country' }
        ]
    },
    food: {
        easy: [
            { word: 'pizza', hint: 'Italian dish with cheese and toppings' },
            { word: 'bread', hint: 'Baked staple food' },
            { word: 'rice', hint: 'Staple grain in Asian cuisine' },
            { word: 'cake', hint: 'Sweet baked dessert' },
            { word: 'soup', hint: 'Liquid dish often served hot' },
            { word: 'milk', hint: 'White dairy beverage' },
            { word: 'eggs', hint: 'Common breakfast protein' },
            { word: 'meat', hint: 'Animal flesh as food' }
        ],
        medium: [
            { word: 'burger', hint: 'Sandwich with a patty' },
            { word: 'noodles', hint: 'Long thin strips of pasta' },
            { word: 'chicken', hint: 'Popular poultry meat' },
            { word: 'cheese', hint: 'Dairy product made from milk' },
            { word: 'salad', hint: 'Mixture of vegetables' },
            { word: 'cookie', hint: 'Sweet baked treat' },
            { word: 'pasta', hint: 'Italian staple food' },
            { word: 'waffle', hint: 'Grid-patterned breakfast food' }
        ],
        hard: [
            { word: 'spaghetti', hint: 'Long thin Italian pasta' },
            { word: 'chocolate', hint: 'Sweet treat made from cocoa' },
            { word: 'sandwich', hint: 'Food between two slices of bread' },
            { word: 'croissant', hint: 'French crescent-shaped pastry' },
            { word: 'pancakes', hint: 'Flat cakes cooked on a griddle' },
            { word: 'burrito', hint: 'Mexican wrapped tortilla dish' },
            { word: 'lasagna', hint: 'Layered Italian pasta dish' },
            { word: 'quesadilla', hint: 'Mexican grilled tortilla with cheese' }
        ]
    },
    technology: {
        easy: [
            { word: 'phone', hint: 'Mobile communication device' },
            { word: 'mouse', hint: 'Computer pointing device' },
            { word: 'code', hint: 'Programming instructions' },
            { word: 'data', hint: 'Information stored digitally' },
            { word: 'wifi', hint: 'Wireless internet connection' },
            { word: 'chip', hint: 'Small electronic component' },
            { word: 'byte', hint: 'Unit of digital information' },
            { word: 'disk', hint: 'Storage device' }
        ],
        medium: [
            { word: 'laptop', hint: 'Portable computer' },
            { word: 'server', hint: 'Computer that provides services' },
            { word: 'router', hint: 'Device that forwards data packets' },
            { word: 'python', hint: 'Popular programming language' },
            { word: 'memory', hint: 'Computer storage component' },
            { word: 'browser', hint: 'Software to access the web' },
            { word: 'software', hint: 'Programs and applications' },
            { word: 'network', hint: 'Connected computer systems' }
        ],
        hard: [
            { word: 'algorithm', hint: 'Step-by-step problem-solving procedure' },
            { word: 'database', hint: 'Organized collection of data' },
            { word: 'javascript', hint: 'Web programming language' },
            { word: 'encryption', hint: 'Process of encoding information' },
            { word: 'blockchain', hint: 'Distributed ledger technology' },
            { word: 'artificial', hint: 'Type of intelligence in machines' },
            { word: 'processor', hint: 'Brain of the computer' },
            { word: 'cybersecurity', hint: 'Protection of computer systems' }
        ]
    },
    sports: {
        easy: [
            { word: 'golf', hint: 'Sport played with clubs and a ball' },
            { word: 'rugby', hint: 'Contact sport with an oval ball' },
            { word: 'swim', hint: 'Moving through water' },
            { word: 'race', hint: 'Competition of speed' },
            { word: 'jump', hint: 'Leap into the air' },
            { word: 'kick', hint: 'Strike with the foot' },
            { word: 'goal', hint: 'Target to score in' },
            { word: 'team', hint: 'Group playing together' }
        ],
        medium: [
            { word: 'soccer', hint: 'Football played with feet' },
            { word: 'tennis', hint: 'Racket sport with a net' },
            { word: 'hockey', hint: 'Sport played with sticks and a puck' },
            { word: 'boxing', hint: 'Combat sport with gloves' },
            { word: 'cricket', hint: 'Bat and ball sport popular in England' },
            { word: 'baseball', hint: 'American sport with bases' },
            { word: 'cycling', hint: 'Sport on two wheels' },
            { word: 'surfing', hint: 'Riding ocean waves' }
        ],
        hard: [
            { word: 'basketball', hint: 'Sport with hoops and dribbling' },
            { word: 'volleyball', hint: 'Sport played over a net with hands' },
            { word: 'badminton', hint: 'Racket sport with a shuttlecock' },
            { word: 'gymnastics', hint: 'Sport involving flexibility and strength' },
            { word: 'wrestling', hint: 'Combat sport with grappling' },
            { word: 'marathon', hint: 'Long-distance running race' },
            { word: 'swimming', hint: 'Aquatic sport' },
            { word: 'skateboarding', hint: 'Sport on a board with wheels' }
        ]
    },
    nature: {
        easy: [
            { word: 'tree', hint: 'Tall plant with trunk and branches' },
            { word: 'leaf', hint: 'Green part of a plant' },
            { word: 'rain', hint: 'Water falling from clouds' },
            { word: 'snow', hint: 'Frozen precipitation' },
            { word: 'wind', hint: 'Moving air' },
            { word: 'rock', hint: 'Hard natural material' },
            { word: 'sand', hint: 'Tiny grains on beaches' },
            { word: 'lake', hint: 'Body of water surrounded by land' }
        ],
        medium: [
            { word: 'forest', hint: 'Large area covered with trees' },
            { word: 'mountain', hint: 'Large natural elevation' },
            { word: 'ocean', hint: 'Vast body of salt water' },
            { word: 'river', hint: 'Flowing body of water' },
            { word: 'desert', hint: 'Dry sandy region' },
            { word: 'valley', hint: 'Low area between hills' },
            { word: 'flower', hint: 'Colorful plant bloom' },
            { word: 'sunset', hint: 'Sun going down' }
        ],
        hard: [
            { word: 'waterfall', hint: 'Water cascading from height' },
            { word: 'volcano', hint: 'Mountain that erupts lava' },
            { word: 'rainbow', hint: 'Colorful arc in the sky' },
            { word: 'lightning', hint: 'Electric discharge in sky' },
            { word: 'earthquake', hint: 'Ground shaking phenomenon' },
            { word: 'hurricane', hint: 'Powerful tropical storm' },
            { word: 'glacier', hint: 'Slow-moving mass of ice' },
            { word: 'ecosystem', hint: 'Community of living organisms' }
        ]
    }
};

// ===== GAME STATE =====
let gameState = {
    difficulty: 'medium',
    category: 'all',
    currentWord: null,
    scrambledWord: '',
    score: 0,
    streak: 0,
    bestStreak: 0,
    lives: 3,
    timeLeft: 60,
    hintsUsed: 0,
    wordsCompleted: 0,
    totalWords: 10,
    correctAnswers: 0,
    wrongAnswers: 0,
    timerInterval: null,
    usedWords: []
};

// ===== DOM ELEMENTS =====
const elements = {
    // Screens
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    
    // Start screen
    difficultySelect: document.getElementById('difficulty-select'),
    categorySelect: document.getElementById('category-select'),
    startBtn: document.getElementById('start-btn'),
    
    // Game screen
    scrambledWordEl: document.getElementById('scrambled-word'),
    currentCategoryEl: document.getElementById('current-category'),
    hintSection: document.getElementById('hint-section'),
    hintText: document.getElementById('hint-text'),
    answerInput: document.getElementById('answer-input'),
    hintBtn: document.getElementById('hint-btn'),
    submitBtn: document.getElementById('submit-btn'),
    skipBtn: document.getElementById('skip-btn'),
    shuffleBtn: document.getElementById('shuffle-btn'),
    wordCount: document.getElementById('word-count'),
    progressFill: document.getElementById('progress-fill'),
    
    // Stats
    scoreEl: document.getElementById('score'),
    streakEl: document.getElementById('streak'),
    livesEl: document.getElementById('lives'),
    timerEl: document.getElementById('timer'),
    
    // Game over screen
    gameoverIcon: document.getElementById('gameover-icon'),
    gameoverTitle: document.getElementById('gameover-title'),
    gameoverSubtitle: document.getElementById('gameover-subtitle'),
    finalScore: document.getElementById('final-score'),
    finalStreak: document.getElementById('final-streak'),
    finalAccuracy: document.getElementById('final-accuracy'),
    playAgainBtn: document.getElementById('play-again-btn'),
    changeSettingsBtn: document.getElementById('change-settings-btn'),
    
    // Feedback modal
    feedbackModal: document.getElementById('feedback-modal'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackMessage: document.getElementById('feedback-message')
};

// ===== UTILITY FUNCTIONS =====

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Scramble a word ensuring it's different from original
 */
function scrambleWord(word) {
    let scrambled;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
        const letters = word.split('');
        scrambled = shuffleArray(letters).join('');
        attempts++;
    } while (scrambled === word && attempts < maxAttempts);
    
    // If word is too short and can't be scrambled differently, just reverse it
    if (scrambled === word) {
        scrambled = word.split('').reverse().join('');
    }
    
    return scrambled.toUpperCase();
}

/**
 * Get random word from database based on difficulty and category
 */
function getRandomWord() {
    let availableWords = [];
    
    // Get words based on category selection
    if (gameState.category === 'all') {
        // Combine all categories
        Object.keys(wordDatabase).forEach(cat => {
            availableWords = availableWords.concat(wordDatabase[cat][gameState.difficulty]);
        });
    } else {
        availableWords = wordDatabase[gameState.category][gameState.difficulty];
    }
    
    // Filter out already used words
    availableWords = availableWords.filter(wordObj => 
        !gameState.usedWords.includes(wordObj.word)
    );
    
    // If all words used, reset
    if (availableWords.length === 0) {
        gameState.usedWords = [];
        if (gameState.category === 'all') {
            Object.keys(wordDatabase).forEach(cat => {
                availableWords = availableWords.concat(wordDatabase[cat][gameState.difficulty]);
            });
        } else {
            availableWords = wordDatabase[gameState.category][gameState.difficulty];
        }
    }
    
    // Select random word
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    
    // Mark as used
    gameState.usedWords.push(selectedWord.word);
    
    return selectedWord;
}

/**
 * Switch between screens with animation
 */
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    setTimeout(() => {
        showScreen.classList.add('active');
    }, 300);
}

/**
 * Update stats display
 */
function updateStats() {
    elements.scoreEl.textContent = gameState.score;
    elements.streakEl.textContent = gameState.streak;
    elements.livesEl.textContent = '❤️'.repeat(gameState.lives);
    elements.timerEl.textContent = gameState.timeLeft;
    elements.wordCount.textContent = `${gameState.wordsCompleted}/${gameState.totalWords}`;
    
    // Update progress bar
    const progress = (gameState.wordsCompleted / gameState.totalWords) * 100;
    elements.progressFill.style.width = `${progress}%`;
}

/**
 * Show feedback modal
 */
function showFeedback(isCorrect, message) {
    elements.feedbackModal.classList.remove('correct', 'wrong');
    elements.feedbackModal.classList.add(isCorrect ? 'correct' : 'wrong');
    
    elements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
    elements.feedbackMessage.textContent = message;
    
    elements.feedbackModal.classList.add('show');
    
    setTimeout(() => {
        elements.feedbackModal.classList.remove('show');
    }, 1500);
}

/**
 * Get category icon and name
 */
function getCategoryDisplay(category) {
    const categoryMap = {
        all: { icon: '🎲', name: 'All Categories' },
        animals: { icon: '🦁', name: 'Animals' },
        countries: { icon: '🌍', name: 'Countries' },
        food: { icon: '🍕', name: 'Food' },
        technology: { icon: '💻', name: 'Technology' },
        sports: { icon: '⚽', name: 'Sports' },
        nature: { icon: '🌳', name: 'Nature' }
    };
    return categoryMap[category] || categoryMap.all;
}

// ===== GAME LOGIC =====

/**
 * Start a new game
 */
function startGame() {
    // Get settings
    gameState.difficulty = elements.difficultySelect.value;
    gameState.category = elements.categorySelect.value;
    
    // Reset game state
    gameState.score = 0;
    gameState.streak = 0;
    gameState.bestStreak = 0;
    gameState.lives = 3;
    gameState.timeLeft = 60;
    gameState.wordsCompleted = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.usedWords = [];
    
    // Update UI
    updateStats();
    
    // Update category badge
    const catDisplay = getCategoryDisplay(gameState.category);
    elements.currentCategoryEl.innerHTML = `
        <span class="badge-icon">${catDisplay.icon}</span>
        <span class="badge-text">${catDisplay.name}</span>
    `;
    
    // Switch to game screen
    switchScreen(elements.startScreen, elements.gameScreen);
    
    // Start timer
    startTimer();
    
    // Load first word
    loadNewWord();
}

/**
 * Start game timer
 */
function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        elements.timerEl.textContent = gameState.timeLeft;
        
        // Warning at 10 seconds
        if (gameState.timeLeft <= 10) {
            elements.timerEl.style.color = '#fee140';
        }
        
        // Time's up
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            endGame('timeout');
        }
    }, 1000);
}

/**
 * Load a new word
 */
function loadNewWord() {
    // Check if game should end
    if (gameState.wordsCompleted >= gameState.totalWords) {
        endGame('completed');
        return;
    }
    
    // Get new word
    gameState.currentWord = getRandomWord();
    gameState.scrambledWord = scrambleWord(gameState.currentWord.word);
    gameState.hintsUsed = 0;
    
    // Update UI
    elements.scrambledWordEl.textContent = gameState.scrambledWord;
    elements.answerInput.value = '';
    elements.hintSection.classList.remove('active');
    elements.hintText.textContent = 'Click the hint button below to get a clue!';
    elements.answerInput.focus();
    
    updateStats();
}

/**
 * Shuffle the current scrambled word
 */
function reshuffleWord() {
    gameState.scrambledWord = scrambleWord(gameState.currentWord.word);
    elements.scrambledWordEl.textContent = gameState.scrambledWord;
}

/**
 * Show hint to player
 */
function showHint() {
    gameState.hintsUsed++;
    
    if (gameState.hintsUsed === 1) {
        // First hint: Show word length and category hint
        elements.hintText.textContent = `💡 ${gameState.currentWord.hint} (${gameState.currentWord.word.length} letters)`;
        elements.hintSection.classList.add('active');
        
        // Deduct points for hint
        gameState.score = Math.max(0, gameState.score - 5);
        showFeedback(false, '-5 points for hint');
    } else if (gameState.hintsUsed === 2) {
        // Second hint: Reveal first letter
        const firstLetter = gameState.currentWord.word[0].toUpperCase();
        elements.hintText.textContent = `💡 ${gameState.currentWord.hint} (${gameState.currentWord.word.length} letters) | First letter: ${firstLetter}`;
        
        // Deduct more points
        gameState.score = Math.max(0, gameState.score - 10);
        showFeedback(false, '-10 points for hint');
    } else {
        // Maximum hints reached
        showFeedback(false, 'No more hints available!');
        return;
    }
    
    updateStats();
}

/**
 * Check player's answer
 */
function checkAnswer() {
    const userAnswer = elements.answerInput.value.trim().toLowerCase();
    const correctAnswer = gameState.currentWord.word.toLowerCase();
    
    if (!userAnswer) {
        showFeedback(false, 'Please enter an answer!');
        return;
    }
    
    if (userAnswer === correctAnswer) {
        // Correct answer
        handleCorrectAnswer();
    } else {
        // Wrong answer
        handleWrongAnswer();
    }
}

/**
 * Handle correct answer
 */
function handleCorrectAnswer() {
    // Calculate points based on difficulty and hints used
    let points = 10;
    if (gameState.difficulty === 'medium') points = 15;
    if (gameState.difficulty === 'hard') points = 25;
    
    // Bonus for no hints
    if (gameState.hintsUsed === 0) {
        points += 10;
    }
    
    // Streak bonus
    gameState.streak++;
    if (gameState.streak > gameState.bestStreak) {
        gameState.bestStreak = gameState.streak;
    }
    
    if (gameState.streak >= 3) {
        points += gameState.streak * 2;
    }
    
    gameState.score += points;
    gameState.correctAnswers++;
    gameState.wordsCompleted++;
    
    showFeedback(true, `+${points} points! Correct! 🎉`);
    
    // Add time bonus
    gameState.timeLeft += 5;
    
    updateStats();
    
    // Load next word after delay
    setTimeout(() => {
        loadNewWord();
    }, 1500);
}

/**
 * Handle wrong answer
 */
function handleWrongAnswer() {
    gameState.lives--;
    gameState.streak = 0;
    gameState.wrongAnswers++;
    
    showFeedback(false, `Wrong! The answer was "${gameState.currentWord.word}"`);
    
    updateStats();
    
    // Check if game over
    if (gameState.lives <= 0) {
        setTimeout(() => {
            endGame('lives');
        }, 1500);
    } else {
        // Load next word
        gameState.wordsCompleted++;
        setTimeout(() => {
            loadNewWord();
        }, 2000);
    }
}

/**
 * Skip current word
 */
function skipWord() {
    gameState.wordsCompleted++;
    gameState.streak = 0;
    
    showFeedback(false, `Skipped! The answer was "${gameState.currentWord.word}"`);
    
    // Check if game should end
    if (gameState.wordsCompleted >= gameState.totalWords) {
        setTimeout(() => {
            endGame('completed');
        }, 1500);
    } else {
        setTimeout(() => {
            loadNewWord();
        }, 1500);
    }
}

/**
 * End the game
 */
function endGame(reason) {
    // Stop timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    // Calculate accuracy
    const totalAttempts = gameState.correctAnswers + gameState.wrongAnswers;
    const accuracy = totalAttempts > 0 
        ? Math.round((gameState.correctAnswers / totalAttempts) * 100) 
        : 0;
    
    // Update final stats
    elements.finalScore.textContent = gameState.score;
    elements.finalStreak.textContent = gameState.bestStreak;
    elements.finalAccuracy.textContent = `${accuracy}%`;
    
    // Set message based on reason
    if (reason === 'timeout') {
        elements.gameoverIcon.textContent = '⏰';
        elements.gameoverTitle.textContent = 'Time\'s Up!';
        elements.gameoverSubtitle.textContent = 'You ran out of time!';
    } else if (reason === 'lives') {
        elements.gameoverIcon.textContent = '💔';
        elements.gameoverTitle.textContent = 'Game Over!';
        elements.gameoverSubtitle.textContent = 'You ran out of lives!';
    } else {
        elements.gameoverIcon.textContent = '🎉';
        elements.gameoverTitle.textContent = 'Congratulations!';
        elements.gameoverSubtitle.textContent = 'You completed all words!';
    }
    
    // Switch to game over screen
    switchScreen(elements.gameScreen, elements.gameoverScreen);
}

/**
 * Reset game and go to start screen
 */
function resetToStart() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    switchScreen(elements.gameoverScreen, elements.startScreen);
}

// ===== EVENT LISTENERS =====

// Start game
elements.startBtn.addEventListener('click', startGame);

// Game controls
elements.submitBtn.addEventListener('click', checkAnswer);
elements.hintBtn.addEventListener('click', showHint);
elements.skipBtn.addEventListener('click', skipWord);
elements.shuffleBtn.addEventListener('click', reshuffleWord);

// Answer input - submit on Enter
elements.answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Game over controls
elements.playAgainBtn.addEventListener('click', () => {
    switchScreen(elements.gameoverScreen, elements.gameScreen);
    startGame();
});

elements.changeSettingsBtn.addEventListener('click', resetToStart);

// ===== INITIALIZATION =====
console.log('🎮 Word Scramble Game Loaded!');
console.log('📚 Total words in database:', 
    Object.values(wordDatabase).reduce((total, category) => {
        return total + Object.values(category).reduce((catTotal, difficulty) => {
            return catTotal + difficulty.length;
        }, 0);
    }, 0)
);
