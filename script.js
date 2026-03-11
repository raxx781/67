// Create animated stars in the background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create chaotic 67s everywhere
function createChaos67s() {
    const chaosContainer = document.querySelector('.chaos-container');
    const chaosCount = 30;

    for (let i = 0; i < chaosCount; i++) {
        const chaos67 = document.createElement('div');
        chaos67.textContent = '67';
        chaos67.style.position = 'fixed';
        chaos67.style.left = Math.random() * 100 + '%';
        chaos67.style.top = Math.random() * 100 + '%';
        chaos67.style.fontSize = Math.random() * 60 + 20 + 'px';
        chaos67.style.opacity = Math.random() * 0.3 + 0.05;
        chaos67.style.fontWeight = '900';
        chaos67.style.color = 'white';
        chaos67.style.pointerEvents = 'none';
        chaos67.style.zIndex = '1';
        
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        chaos67.style.animation = `chaosFloat ${duration}s linear ${delay}s infinite`;
        
        chaosContainer.appendChild(chaos67);
    }
}

// Add chaos float animation to styles
function addChaosAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes chaosFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.05;
            }
            50% {
                opacity: 0.2;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Create matrix grid
function createMatrixGrid() {
    const matrixGrid = document.querySelector('.matrix-grid');
    for (let i = 0; i < 15; i++) {
        const item = document.createElement('div');
        item.className = 'matrix-item';
        item.textContent = '67';
        item.style.animationDelay = Math.random() * 3 + 's';
        matrixGrid.appendChild(item);
    }
}

// Create floating particles
function createParticles() {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = '67';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = '0s';
        particle.style.color = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)];
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 4000);
    }, 300);
}

// Add click interaction to boxes with MORE chaos
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createChaos67s();
    addChaosAnimations();
    createMatrixGrid();
    createParticles();

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // Shake effect
            this.style.animation = 'shake 0.5s ease-out';
            
            // Create burst of 67s
            createBurst(this);
            
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Glitch section click chaos
    const glitchSection = document.querySelector('.glitch-section');
    if (glitchSection) {
        glitchSection.addEventListener('click', function() {
            triggerChaos();
        });
    }

    // Easter egg: Press '6' and '7' together
    let keysPressed = {};
    document.addEventListener('keydown', (e) => {
        keysPressed[e.key] = true;
        if (keysPressed['6'] && keysPressed['7']) {
            triggerMegaChaos();
        }
    });

    document.addEventListener('keyup', (e) => {
        delete keysPressed[e.key];
    });

    // Random chaos every 5 seconds
    setInterval(() => {
        if (Math.random() > 0.7) {
            triggerRandomChaos();
        }
    }, 5000);
});

// Create burst of 67s on click
function createBurst(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.textContent = '67';
        burst.style.position = 'fixed';
        burst.style.left = rect.left + rect.width / 2 + 'px';
        burst.style.top = rect.top + rect.height / 2 + 'px';
        burst.style.fontSize = '2rem';
        burst.style.fontWeight = '900';
        burst.style.color = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff'][Math.floor(Math.random() * 4)];
        burst.style.pointerEvents = 'none';
        burst.style.zIndex = '100';
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        burst.style.animation = `burst 0.8s ease-out forwards`;
        burst.style.setProperty('--tx', tx + 'px');
        burst.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
    }
}

// Trigger random chaos
function triggerRandomChaos() {
    const chaosType = Math.floor(Math.random() * 3);
    if (chaosType === 0) {
        document.body.style.filter = 'hue-rotate(45deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 200);
    } else if (chaosType === 1) {
        document.body.style.transform = 'skewX(5deg)';
        setTimeout(() => {
            document.body.style.transform = '';
        }, 200);
    } else {
        document.body.style.animation = 'spinPage 0.3s ease-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 300);
    }
}

// Trigger MEGA CHAOS (6 + 7 combo)
function triggerMegaChaos() {
    document.body.style.animation = 'megaChaos 1s ease-out';
    
    // Create TONS of 67s
    const chaosContainer = document.querySelector('.chaos-container');
    for (let i = 0; i < 50; i++) {
        const mega67 = document.createElement('div');
        mega67.textContent = '67';
        mega67.style.position = 'fixed';
        mega67.style.left = Math.random() * 100 + '%';
        mega67.style.top = Math.random() * 100 + '%';
        mega67.style.fontSize = Math.random() * 100 + 40 + 'px';
        mega67.style.opacity = Math.random() * 0.5 + 0.2;
        mega67.style.fontWeight = '900';
        mega67.style.color = ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d96ff', '#ff00ff', '#00ffff'][Math.floor(Math.random() * 6)];
        mega67.style.pointerEvents = 'none';
        mega67.style.zIndex = '999';
        mega67.style.animation = `megaFloat ${Math.random() * 3 + 2}s ease-out forwards`;
        
        chaosContainer.appendChild(mega67);
        setTimeout(() => mega67.remove(), 3000);
    }
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 1000);
}

// Trigger chaos on glitch section click
function triggerChaos() {
    const colors = ['hue-rotate(360deg)', 'invert(1)', 'saturate(2)', 'blur(2px)'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            document.body.style.filter = colors[i % colors.length];
        }, i * 100);
    }
    setTimeout(() => {
        document.body.style.filter = '';
    }, 300);
}

// Add all animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes spinPage {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }
    }

    @keyframes megaChaos {
        0% { transform: rotate(0deg) scale(1); }
        25% { transform: rotate(-15deg) scale(1.05); }
        50% { transform: rotate(15deg) scale(0.95); }
        75% { transform: rotate(-10deg) scale(1.05); }
        100% { transform: rotate(0deg) scale(1); }
    }

    @keyframes burst {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0);
        }
    }
`;
document.head.appendChild(style);
