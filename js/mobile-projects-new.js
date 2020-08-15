if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const projectOne = document.getElementById("project-one-wrapper");
    const projectTwo = document.getElementById("project-two-wrapper");

    //Back btn move to pos
    const backBtnMobile = document.querySelector(".back-btn-mobile");
    const backBtnTextMobile = document.querySelector(".back-btn-text-mobile");
    const backBtnTextMobileLeft = backBtnTextMobile.getBoundingClientRect()
      .left;
    const backBtnTextMobileTop =
      backBtnTextMobile.getBoundingClientRect().top + pageYOffset;
    const backBtnTextMobileActual = document.querySelector(
      ".back-btn-text-mobile-actual"
    );

    backBtnTextMobileActual.style.cssText = `top: ${backBtnTextMobileTop}px; left: ${backBtnTextMobileLeft}px;`;

    //Next btn move to pos
    const nextBtnMobile = document.querySelector(".next-btn-mobile");
    const nextBtnTextMobile = document.querySelector(".next-btn-text-mobile");
    const nextBtnTextMobileLeft = nextBtnTextMobile.getBoundingClientRect()
      .left;
    const nextBtnTextMobileTop =
      nextBtnTextMobile.getBoundingClientRect().top + pageYOffset;
    const nextBtnTextMobileActual = document.querySelector(
      ".next-btn-text-mobile-actual"
    );

    nextBtnTextMobileActual.style.cssText = `top: ${nextBtnTextMobileTop}px; left: ${nextBtnTextMobileLeft}px;`;

    backBtnMobile.addEventListener("touchend", back, false);
    nextBtnMobile.addEventListener("touchend", next, false);
    backBtnTextMobile.addEventListener("touchend", back, false);
    nextBtnTextMobile.addEventListener("touchend", next, false);

    function back() {
      console.log("back");
      projectOne.style.cssText =
        "transform: translate(-100vw); opacity: 1; z-index: 10; transition: all 1s ease-out;";

      setTimeout(function () {
        projectOne.style.cssText =
          "transform: translate(0vw); opacity: 0; z-index: -1;";
      }, 1000);

      projectTwo.style.cssText =
        "transform: translate(-100vw); opacity: 1; z-index: 10;";

      setTimeout(function () {
        projectTwo.style.cssText =
          "transform: translate(0vw); opacity: 1; z-index: 10;  transition: all 1s ease-out;";
      }, 100);
    }

    function next() {
      console.log("next");
      projectOne.style.cssText =
        "transform: translate(-100vw); opacity: 1; z-index: 10; transition: all 1s ease-out;";

      setTimeout(function () {
        projectOne.style.cssText =
          "transform: translate(0vw); opacity: 0; z-index: -1;";
      }, 1000);

      projectTwo.style.cssText =
        "transform: translate(100vw); opacity: 1; z-index: 10;";

      setTimeout(function () {
        projectTwo.style.cssText =
          "transform: translate(0vw); opacity: 1; z-index: 10;  transition: all 1s ease-out;";
      }, 1000);
    }
  });
}
