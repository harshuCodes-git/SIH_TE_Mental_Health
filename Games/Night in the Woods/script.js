const character = document.getElementById('character');
const scene = document.getElementById('scene');

let characterX = 50; // Initial character X position
let characterSpeed = 5; // Character movement speed

function moveCharacter(e) {
    switch (e.key) {
        case 'ArrowLeft':
            characterX -= characterSpeed;
            break;
        case 'ArrowRight':
            characterX += characterSpeed;
            break;
    }
    character.style.left = characterX + 'px';
}

document.addEventListener('keydown', moveCharacter);
