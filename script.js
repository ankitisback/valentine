const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = translate(${x}px, ${y}px);
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <h1>Yayyy!! 💖🥰</h1>
    <p style="font-size:22px;">
      Bhoomi ❤️<br><br>
      Thank you for saying YES 💫<br>
      You just made my heart the happiest today 🥹<br><br>
      I’d love to make every Valentine special with you 🌹
    </p>

    <button onclick="document.getElementById('bgMusic').play()" 
            style="
              margin-top:20px;
              padding:12px 20px;
              border:none;
              border-radius:25px;
              background:#ff4d6d;
              color:white;
              font-size:16px;
              cursor:pointer;
            ">
      ▶️ Play our song 🎶
    </button>
  `;
});
