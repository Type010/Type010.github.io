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
