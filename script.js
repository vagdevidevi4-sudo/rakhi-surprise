/* -------------------------
   OPEN NOTIFICATION
------------------------- */

function openMessage() {

    document.getElementById("notification").style.display = "none";

    document.getElementById("message").style.display = "block";

}


/* -------------------------
   YES BUTTON
------------------------- */

function yesClicked() {

    document.getElementById("response").innerHTML =
        "YAYYYYY! 🥹❤️<br>" +
        "I knew you got it! 📿✨";


    setTimeout(function() {

        document.getElementById("message").style.display = "none";

        document.getElementById("surprise").style.display = "block";

        startCelebration();

    }, 2000);

}


/* -------------------------
   NOT YET BUTTON
------------------------- */

function noClicked() {

    document.getElementById("response").innerHTML =
        "Nice try! 😂😭<br>" +
        "Go check properly! 📿❤️";

}


/* -------------------------
   RUNNING BUTTON
------------------------- */

function moveButton() {

    const button = document.getElementById("noButton");

    const maxX = window.innerWidth - button.offsetWidth - 30;

    const maxY = window.innerHeight - button.offsetHeight - 30;

    const randomX = Math.random() * maxX;

    const randomY = Math.random() * maxY;


    button.style.position = "fixed";

    button.style.left = randomX + "px";

    button.style.top = randomY + "px";

}


/* -------------------------
   MUSIC
------------------------- */

let musicPlaying = false;


function toggleMusic() {

    const music = document.getElementById("music");

    const button = document.querySelector(".musicButton");


    if (!musicPlaying) {

        music.play();

        button.innerHTML = "🔊 Music ON";

        musicPlaying = true;

    }

    else {

        music.pause();

        button.innerHTML = "🎵 Play Music";

        musicPlaying = false;

    }

}


/* -------------------------
   FALLING HEARTS
------------------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💝",
        "✨"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";


    document.querySelector(".hearts").appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 9000);

}


setInterval(createHeart, 400);


/* -------------------------
   CELEBRATION
------------------------- */

function startCelebration() {

    for (let i = 0; i < 30; i++) {

        setTimeout(function() {

            createHeart();

        }, i * 100);

    }

}