const timerElement = document.querySelector('.timer');
const itemsOnScreen = document.querySelectorAll('.item');
const bottomItems = document.querySelectorAll('.bottom-item');
const selesaiBox = document.querySelector('.selesai-box');
const gameOverScreen = document.querySelector('.game-over');
const restartButton = document.querySelector('#restart-button');

let timeRemaining = 6 * 60; // 6 menit dalam detik

// Fungsi untuk memperbarui timer
function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        clearInterval(timerInterval);
        showGameOver();
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// Fungsi untuk menampilkan kotak \"Selesai\"
function checkCompletion() {
    const revealedItems = document.querySelectorAll('.bottom-item.revealed');
    if (revealedItems.length === bottomItems.length) {
        selesaiBox.style.display = 'block';
    }
}

// Fungsi untuk menampilkan layar game over
function showGameOver() {
    gameOverScreen.style.display = 'flex';
}

// Fungsi untuk mereset game
function restartGame() {
    timeRemaining = 6 * 60;
    updateTimer();
    clearInterval(timerInterval);
    setInterval(updateTimer, 1000);

    bottomItems.forEach(item => {
        item.classList.remove('revealed');
        item.classList.add('siluet');
    });

    selesaiBox.style.display = 'none';
    gameOverScreen.style.display = 'none';
}

// Tambahkan event listener ke tombol restart
restartButton.addEventListener('click', restartGame);

// Event listener untuk klik item
itemsOnScreen.forEach(item => {
    item.addEventListener('click', () => {
        const itemAlt = item.alt;
        bottomItems.forEach(bottomItem => {
            if (bottomItem.alt === itemAlt) {
                bottomItem.classList.add('revealed');
                bottomItem.classList.remove('siluet');
            }
        });
        checkCompletion();
    });
});
