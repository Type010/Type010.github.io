/* ==========================================================
 * 自定义脚本
 * 参考：https://geekswg.js.cool/posts/2023/fixit-beautification/
 * ========================================================== */

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
      document.title = "zako~zako~キモい。";
      clearTimeout(timer);
    } else {
      document.title = "お兄~daisuki！";
      timer = setTimeout(function () {
        document.title = originTitle;
      }, 2000);
    }
  });
})();

/* ---- 移动端顶栏：向上滚动立即展开 ----
 * 主题自带的 auto 模式依赖较大的滚动量，首页内容较短时（总共只能滚动几百像素）
 * 上滑往往触发不了展开，这里补一个更灵敏的判断。 */
(function mobileHeaderAutoShow() {
  const header = document.getElementById("header-mobile");
  if (!header) return;

  const THRESHOLD = 4; // 上滑超过这个像素数就展开
  let lastY = window.scrollY;
  let ticking = false;

  function update() {
    const y = window.scrollY;
    const diff = y - lastY;

    if (diff < -THRESHOLD) {
      // 向上滚动：展开
      header.classList.remove("animate__fadeOutUp");
      header.classList.add("animate__fadeInDown");
    } else if (diff > THRESHOLD && y > 80) {
      // 向下滚动且不在顶部：收起
      header.classList.remove("animate__fadeInDown");
      header.classList.add("animate__fadeOutUp");
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true },
  );
})();
