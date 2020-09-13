if (document.documentElement.clientWidth > 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".scroll-arrows");

    const arrowBreakPoint = document
      .querySelector(".heading-svg")
      .getBoundingClientRect().top;

    const superTrumpsImage = document.querySelector("#super-trumps-image");

    const firstEl = document.getElementById("blob");
    const firstPosX = firstEl.getBoundingClientRect().left;
    const firstPosY = firstEl.getBoundingClientRect().top + pageYOffset;

    const elToMove = document.getElementById("el-to-move");
    elToMove.style.cssText = `left: ${firstPosX}px; top: ${firstPosY}px;`;

    const secondEl = document.getElementById("blob");
    const secondPosX = secondEl.getBoundingClientRect().left + 25;
    const secondPosY = secondEl.getBoundingClientRect().top + pageYOffset;

    const thirdEl = document.getElementById("languages");
    const thirdPosX = thirdEl.getBoundingClientRect().left - 50;
    const thirdPosY = thirdEl.getBoundingClientRect().top + pageYOffset;

    const fourthEl = document.getElementById("contact-details-container");
    const fourthPosX = fourthEl.getBoundingClientRect().left - 22;
    const fourthPosY = fourthEl.getBoundingClientRect().top + pageYOffset;

    window.addEventListener("scroll", readyArrowAndImage);
    window.addEventListener("scroll", readySecondMove);
    window.addEventListener("scroll", readyThirdMove);

    const firstTrigger = document.getElementById("super-trumps");
    const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

    function readyArrowAndImage() {
      console.log("here");
      if (pageYOffset > arrowBreakPoint) {
        window.removeEventListener("scroll", readyArrowAndImage);
        window.addEventListener("scroll", readyReverseArrowAndImage);
        arrowAndImage(superTrumpsImage, arrows);
      }
    }
    function readyReverseArrowAndImage() {
      if (pageYOffset < arrowBreakPoint) {
        window.removeEventListener("scroll", readyReverseArrowAndImage);
        window.addEventListener("scroll", readyArrowAndImage);
        reverseArrowAndImage(superTrumpsImage, arrows);
      }
    }

    function readyFadeImage() {
      if (pageYOffset > firstTriggerPos) {
        window.removeEventListener("scroll", readyFadeImage);
        window.addEventListener("scroll", reverseReadyFadeImage);
        fadeImage(superTrumpsImage);
      }
    }
    function reverseReadyFadeImage() {
      if (pageYOffset < firstTriggerPos) {
        window.removeEventListener("scroll", reverseReadyFadeImage);
        window.addEventListener("scroll", readyFadeImage);
        reverseFadeImage(superTrumpsImage);
      }
    }

    const secondTrigger = document.getElementById("second-break-point");
    const secondTriggerPos = secondTrigger.getBoundingClientRect().top;

    function readySecondMove() {
      if (pageYOffset > secondTriggerPos) {
        window.removeEventListener("scroll", readySecondMove);
        window.addEventListener("scroll", reverseReadySecondMove);
        secondMove(elToMove, thirdPosX, thirdPosY);
      }
    }

    function reverseReadySecondMove() {
      if (pageYOffset < secondTriggerPos) {
        window.removeEventListener("scroll", reverseReadySecondMove);
        window.addEventListener("scroll", readySecondMove);
        reverseSecondMove(elToMove, secondPosX, secondPosY);
      }
    }

    const thirdTrigger = document.getElementById("languages");
    const thirdTriggerPos = thirdTrigger.getBoundingClientRect().top + 285;

    function readyThirdMove() {
      if (pageYOffset > thirdTriggerPos) {
        window.removeEventListener("scroll", readyThirdMove);
        window.addEventListener("scroll", reverseReadyThirdMove);
        thirdMove(elToMove, fourthPosX, fourthPosY);
      }
    }

    function reverseReadyThirdMove() {
      if (pageYOffset < thirdTriggerPos) {
        window.removeEventListener("scroll", reverseReadyThirdMove);
        window.addEventListener("scroll", readyThirdMove);
        reverseThirdMove(elToMove, thirdPosX, thirdPosY);
      }
    }
  });

  function arrowAndImage(superTrumpsImage, arrows) {
    console.log("arrows", arrows);
    superTrumpsImage.style.cssText =
      "opacity: 1; transition: opacity 2s ease-in-out; ";
    arrows.forEach((el) => {
      el.style.cssText = "opacity: 0; transition: opacity 2s ease-in-out; ";
    });
  }
  function reverseArrowAndImage(superTrumpsImage, arrows) {
    superTrumpsImage.style.cssText =
      "opacity: 0; transition: opacity 2s ease-in-out; ";
    arrows.forEach((el) => {
      el.style.cssText = "opacity: 1; transition: opacity 2s ease-in-out; ";
    });
  }

  function fadeImage(superTrumpsImage) {
    superTrumpsImage.style.cssText = `
    opacity: 0;
    transition: all 1.5s`;
  }
  function reverseFadeImage(superTrumsImage) {
    superTrumsImage.style.cssText = `opacity: 1; transition: all 1.5s`;
  }

  function secondMove(elToMove, x, y) {
    elToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  width: 863px;
  height: 370px;
  border-radius: 50px;
  transform: rotate(0);
  animation: first-circle-transition 1s;
  transition: all 2s;
  box-shadow: -10px 10px 10px 5px var(--shadow);`;
  }

  function reverseSecondMove(elToMove, x, y) {
    elToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  width: 863px;
  height: 370px;
  border-radius: 50px;
  transform: rotate(0);
  animation: first-circle-transition 1s;
  transition: all 2s`;
  }

  function thirdMove(elToMove, x, y) {
    elToMove.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: 863px;
    height: 570px;
    border-radius: 50px;
    transition: all 1.5s;
    transform: rotate(90deg);
    box-shadow: 10px 10px 10px 5px var(--shadow);
   `;
  }

  function reverseThirdMove(elToMove, x, y) {
    elToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  width: 863px;
  height: 370px;
  border-radius: 50px;
  transform: rotate(0);
  animation: first-circle-transition 1s;
  transition: all 2s;
  box-shadow: -10px 10px 10px 5px var(--shadow);`;
  }
}
