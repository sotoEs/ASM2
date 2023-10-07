const $player = document.getElementById("player");
const $obstacles = document.querySelectorAll(".obstacle");
const $messageDiv = document.getElementById("messageDiv");

let playerX = 0;
let playerY = 0;

document.addEventListener("keydown", (e) => {
    let playerRect = $player.getBoundingClientRect();
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if (e.code === "ArrowUp" && playerRect.top > 0) {
        playerY -= 10;
    }
    if (e.code === "ArrowDown" && playerRect.bottom < windowHeight) {
        playerY += 10;
    }
    if (e.code === "ArrowLeft" && playerRect.left > 0) {
        playerX -= 10;
    }
    if (e.code === "ArrowRight" && playerRect.right < windowWidth) {
        playerX += 10;
    }

    $player.style.transform = `translate(${playerX}px, ${playerY}px)`;

    if (e.code === "Space") {
        e.preventDefault();
        checkCollisionAndShowMessage();
    }
});

function checkCollisionAndShowMessage() {
    const playerRect = $player.getBoundingClientRect();

    $obstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top &&
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left
        ) {
            handleSpace(obstacle.getAttribute("data-link"));
        }
    });
}

function handleSpace(link) {
    if (link) {
        window.location.href = link; // Abre el enlace en la misma página
    }
}

$obstacles.forEach(obstacle => {
    obstacle.addEventListener("click", () => {
        handleSpace(obstacle.getAttribute("data-link"));
    });
});
