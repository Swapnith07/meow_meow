function startApp() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("mainCard").classList.remove("hidden");
}

// Background Animation
function createHeart() {
  const container = document.getElementById("heartsContainer");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const items = ["💖", "🌹", "❤️", "✨"];
  heart.innerText = items[Math.floor(Math.random() * items.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

// Choice Handling
function handleResponse(type) {
  const textSection = document.getElementById("textSection");
  const imgElement = document.getElementById("displayPic");

  if (type === "yes") {
    imgElement.src = "images/cat_blush.jpg";
    textSection.innerHTML = `
            <h1 class="title">I knew it! 💕</h1>
            <p class="message" style="font-size: 1.2rem;">
                I know you’re blushing right now 😳🌹
            </p>
            <div style="font-size: 60px; margin-top: 10px;">💍💖✨</div>
        `;
    for (let i = 0; i < 30; i++) setTimeout(createHeart, i * 100);
  } else {
    imgElement.src = "images/cat_angry.jpg";
    textSection.innerHTML = `
            <h1 class="title">Wait... what? 😤</h1>
            <p class="message" style="font-size: 1.2rem;">
                Why did you click this, Bujji? <br>
                I told you there's no option! 😾👊
            </p>
            <div style="font-size: 50px; margin-top: 10px;">💢💔</div>
            <button class="btn yes-btn" style="margin-top:15px;" onclick="handleResponse('yes')">Fine, YES 💖</button>
        `;
  }
}
