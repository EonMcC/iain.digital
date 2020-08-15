if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const projectOne = document.getElementById("project-one-wrapper");
    const projectTwo = document.getElementById("project-two-wrapper");

    //Back btn move to pos
    const btnContainer = document.querySelector(".btn-container");
    const btnContainerLeft = btnContainer.getBoundingClientRect().left;
    const btnContainerTop =
      btnContainer.getBoundingClientRect().top + pageYOffset + 50;
    const btnContainerActual = document.querySelector(".btn-container-actual");

    btnContainerActual.style.cssText = `top: ${btnContainerTop}px; left: ${btnContainerLeft}px;`;

    const backBtnMobile = document.querySelector(".back-btn-mobile-actual");
    const backBtnTextMobile = document.querySelector(
      ".back-btn-text-mobile-actual"
    );

    const nextBtnMobile = document.querySelector(".next-btn-mobile-actual");
    const nextBtnTextMobile = document.querySelector(
      ".next-btn-text-mobile-actual"
    );

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
