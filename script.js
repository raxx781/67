// Create animated stars in the background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Add click interaction to boxes
document.addEventListener('DOMContentLoaded', function() {
    createStars();

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });

    // Easter egg: Press '6' and '7' together
    let keysPressed = {};
    document.addEventListener('keydown', (e) => {
        keysPressed[e.key] = true;
        if (keysPressed['6'] && keysPressed['7']) {
            document.body.style.animation = 'spinPage 0.5s ease-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        }
    });

    document.addEventListener('keyup', (e) => {
        delete keysPressed[e.key];
    });
});

// Add spin animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes spinPage {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }
    }
`;
document.head.appendChild(style);
