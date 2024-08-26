function revealLetter() {
    const ghost = document.querySelector('.ghost');
    const letter = document.getElementById('letterContent');
    const ghostText = document.getElementById('ghostText');

    // Move the ghost up and change the text
    ghost.classList.add('move-up');
    ghostText.textContent = "I'm Boo, the Ghost Cat!";

    // Show the letter with a glow effect
    setTimeout(() => {
        letter.classList.toggle('show');
    }, 1000); // Delay to ensure the ghost has moved up before the letter appears
}
