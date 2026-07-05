const container = document.getElementById("love-container");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// ====== Nền sao ======
const stars = [];

for (let i = 0; i < 250; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.3,
    s: Math.random() * 0.6 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // nền hồng tím
  const g = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    100,
    canvas.width / 2,
    canvas.height / 2,
    canvas.height
  );

  g.addColorStop(0, "#ff4da6");
  g.addColorStop(0.4, "#a0005a");
  g.addColorStop(1, "#000000");

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    star.y += star.s;

    if (star.y > canvas.height) {
      star.y = -5;
      star.x = Math.random() * canvas.width;
    }

  });

  requestAnimationFrame(drawStars);
}

drawStars();

// ====== Tạo chữ bay ======
function createLove() {

  const div = document.createElement("div");

  div.className = "love";

  div.innerHTML = "💖 Anh yêu em 💖";

  div.style.left = Math.random() * 100 + "vw";

  div.style.animationDuration =
    (Math.random() * 6 + 6) + "s";

  div.style.fontSize =
    (Math.random() * 14 + 16) + "px";

  div.style.opacity =
    Math.random() * 0.7 + 0.3;

  container.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 12000);

}

setInterval(createLove, 120);

// ====== Nhạc ======
playBtn.addEventListener("click", async () => {

  try {

    if (music.paused) {

      await music.play();

      playBtn.innerHTML = "⏸";

    } else {

      music.pause();

      playBtn.innerHTML = "▶";

    }

  } catch (e) {

    alert("Hãy thêm file tim-em.mp3 vào cùng thư mục website.");

  }

});

// ====== Hiệu ứng đổi màu tiêu đề ======
const title = document.querySelector(".title");

const colors = [
  "#ffffff",
  "#ffd1ea",
  "#ff9fd0",
  "#ffc3e6"
];

let c = 0;

setInterval(() => {

  c++;

  title.style.color = colors[c % colors.length];

}, 800);
