/* ==========================================================
 * 自定义脚本
 * 参考：https://geekswg.js.cool/posts/2023/fixit-beautification/
 * ========================================================== */

/* ---- 鼠标点击 / 拖动产生的彩色粒子特效 ---- */
(function clickEffect() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "9999",
  });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const balls = [];

  function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 8;
    this.vy = (Math.random() - 0.5) * 8;
    this.r = Math.random() * 8 + 6;
    this.alpha = 1;
    this.color = colours[Math.floor(Math.random() * colours.length)];
  }

  Ball.prototype.update = function () {
    this.x += this.vx;
    this.vy += 0.6; // 重力
    this.y += this.vy;
    this.r *= 0.96;
    this.alpha -= 0.02;
    return this.alpha > 0.02 && this.r > 0.5;
  };

  Ball.prototype.draw = function () {
    ctx.globalAlpha = Math.max(this.alpha, 0);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  let pressed = false;
  let lastSpawn = 0;

  function spawn(x, y) {
    const now = Date.now();
    if (now - lastSpawn < 40) return; // 节流，避免粒子过多
    lastSpawn = now;
    for (let i = 0; i < 10; i++) balls.push(new Ball(x, y));
  }

  document.addEventListener("mousedown", function (e) {
    pressed = true;
    spawn(e.clientX, e.clientY);
  });
  document.addEventListener("mouseup", function () {
    pressed = false;
  });
  document.addEventListener("mousemove", function (e) {
    if (pressed) spawn(e.clientX, e.clientY);
  });

  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = balls.length - 1; i >= 0; i--) {
      if (!balls[i].update()) {
        balls.splice(i, 1);
        continue;
      }
      balls[i].draw();
    }
    window.requestAnimationFrame(loop);
  })();
})();

/* ---- 控制台打印 ---- */
(function myConsole() {
  const violet = "color: #9c27b0; font-weight: bold;";
  const green = "color: #3eaf7c; font-weight: bold;";
  const blue = "color: #2196f3;";
  const art = [
    " __  __                     _   ____  _     ",
    "|  \\/  | ___   ___   ___   (_) | __ )| | ___   __ _ ",
    "| |\\/| |/ _ \\ / _ \\ / _ \\  | | |  _ \\| |/ _ \\ / _` |",
    "| |  | | (_) | (_) |  __/  | | | |_) | | (_) | (_| |",
    "|_|  |_|\\___/ \\___/ \\___|  |_| |____/|_|\\___/ \\__, |",
    "                                              |___/ ",
  ].join("\n");
  console.log("%c" + art, violet);
  console.log("%cPowered by %cHugo %c& %cFixIt", green, blue, green, blue);
  console.log(
    "%c源码：%chttps://github.com/Type010/Type010.github.io",
    green,
    blue,
  );
})();

/* ---- 切到其他标签页时改变标题提醒 ---- */
(function autoSetTitle() {
  const originTitle = document.title;
  let timer;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      document.title = "😂 去哪里了！";
      clearTimeout(timer);
    } else {
      document.title = "😍 欢迎回来！";
      timer = setTimeout(function () {
        document.title = originTitle;
      }, 2000);
    }
  });
})();
