// Keşfet butonuna tıklayınca mesaj göster
function showMessage() {
    alert("Seni çok seviyorum hayatımın anlamısı bebeğim benim!!❤️");
}

// Kalp animasyonları
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

const specialDate = new Date("2025-05-06");

function updateCountdown() {
    const now = new Date();
    const diff = specialDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").textContent = `${days} gün kaldı!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
