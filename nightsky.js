const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 150;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createStar() {
    return {
        x: randomInt(0, canvas.width),
        y: randomInt(0, canvas.height),
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: randomInt(1, 5) / 10,
        angle: Math.random() * Math.PI * 2,
    };
}

function drawStar(star) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numStars; i++) {
        if (Math.random() < 0.02) {
            stars[i] = createStar();
        }

        const star = stars[i];
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
            stars[i] = createStar();
        }

        drawStar(star);
    }

    requestAnimationFrame(animateStars);
}

for (let i = 0; i < numStars; i++) {
    stars.push(createStar());
}

animateStars();