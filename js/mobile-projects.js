if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const projectOne = document.getElementById("project-one-wrapper");
    const projectTwo = document.getElementById("project-two-wrapper");

    projectCurShowing = "projectOne";

    // Project one swipe movement
    projectOne.addEventListener("touchstart", downOne, false);
    projectOne.addEventListener("touchend", upOne, false);
    projectOne.addEventListener("touchmove", dragOne, false);

    projectTwo.addEventListener("touchstart", downTwo, false);
    projectTwo.addEventListener("touchend", upTwo, false);
    projectTwo.addEventListener("touchmove", dragTwo, false);

    let x0 = null;
    let x1 = null;
    let xCur = null;

    function downOne(e) {
      x0 = e.touches[0].screenX;
      // console.log(x0);
    }

    function dragOne(e) {
      // console.log("drag");
      xCur = e.touches[0].screenX;
      if (x0 !== null) {
        projectOne.style.cssText = `transform: translateX(${xCur - x0}px);`;
      }
    }

    function upOne(e) {
      // console.log(e);
      // console.log("up");
      x1 = e.changedTouches[0].screenX;
      if (x1 < x0) {
        projectOne.style.cssText =
          "transform: translate(-100vw); opacity: 0; z-index: -1; transition: all 1s ease-out;";
        projectTwo.style.cssText =
          "transform: translate(100vw); opacity: 1; z-index: 10;";
        setTimeout(function () {
          projectTwo.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 1; transition: all 1s ease-out;";
        }, 100);
      } else {
        projectOne.style.cssText =
          "transform: translate(100vw); opacity: 0; z-index: -1; transition: all 1s ease-out;";

        setTimeout(function () {
          projectOne.style.cssText =
            "transform: translate(0vw); opacity: 0; z-index: -1;";
        }, 1000);

        projectTwo.style.cssText =
          "transform: translate(-100vw); opacity: 1; z-index: 10;";

        setTimeout(function () {
          projectTwo.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 10; transition: all 1s ease-out;";
        }, 100);
      }
      x0 = null;
    }
    // Project two swipe movement

    let x20 = null;
    let x21 = null;
    let x2Cur = null;

    function downTwo(e) {
      console.log("downTwo");
      x20 = e.touches[0].screenX;
    }

    function dragTwo(e) {
      x2Cur = e.touches[0].screenX;
      console.log("x2Cur", x2Cur, "x20", x20);
      if (x20 !== null) {
        console.log("dragTwo");
        projectTwo.style.cssText = `transform: translateX(${
          x2Cur - x20
        }px); opacity: 1; `;
      }
    }

    function upTwo(e) {
      console.log("uptwo");
      x21 = e.changedTouches[0].screenX;
      console.log("x21", x21, "x20", x20);
      if (x21 < x20) {
        projectOne.style.cssText =
          "transform: translate(100vw); opacity: 1; z-index: 10;";

        setTimeout(function () {
          projectOne.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 10; transition: all 1s ease-out;";
        }, 100);

        projectTwo.style.cssText =
          "transform: translate(-100vw); opacity: 0; z-index: -1; transition: all 1s ease-out;";

        setTimeout(function () {
          projectTwo.style.cssText =
            "transform: translate(0vw); opacity: 0; z-index: -1;";
        }, 1000);
      } else {
        console.log("else");
        projectOne.style.cssText =
          "transform: translate(-100vw); opacity: 1; z-index: 10;";

        setTimeout(function () {
          projectOne.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 10; transition: all 1s ease-out;";
        }, 100);

        projectTwo.style.cssText =
          "transform: translate(100vw); opacity: 0; z-index: -1; transition: all 1s ease-out;";

        setTimeout(function () {
          projectTwo.style.cssText =
            "transform: translate(0vw); opacity: 0; z-index: -1;";
        }, 1000);
      }
      x20 = null;
    }

    //Fade Image
    window.addEventListener("scroll", readyFadeImage);

    const firstTrigger = document.getElementById("super-trumps-text");
    const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

    const superTrumpsImage = document.querySelector(".super-trumps-image");
    const codinglogImage = document.querySelector("#coding-log-image");

    function readyFadeImage() {
      if (pageYOffset > firstTriggerPos) {
        window.removeEventListener("scroll", readyFadeImage);
        window.addEventListener("scroll", reverseReadyFadeImage);
        fadeImage(superTrumpsImage, codinglogImage);
      }
    }
    function reverseReadyFadeImage() {
      if (pageYOffset < firstTriggerPos) {
        window.removeEventListener("scroll", reverseReadyFadeImage);
        window.addEventListener("scroll", readyFadeImage);
        reverseFadeImage(superTrumpsImage, codinglogImage);
      }
    }

    function fadeImage(superTrumpsImage, codinglogImage) {
      superTrumpsImage.style.cssText = `
      opacity: 0;
      transition: all 1.5s`;
      codinglogImage.style.cssText = `
      opacity: 0;
      transition: all 1.5s`;
    }
    function reverseFadeImage(superTrumsImage, codinglogImage) {
      superTrumsImage.style.cssText = `opacity: 1; transition: all 1.5s`;
      codinglogImage.style.cssText = `opacity: 1; transition: all 1.5s`;
    }
  });
}
