if (document.documentElement.clientWidth > 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const projectOne = document.getElementById("project-one-wrapper");
    const projectTwo = document.getElementById("project-two-wrapper");

    projectCurShowing = "projectOne";

    function moveOrder(direction) {
      if (direction === "next") {
        if (projectCurShowing === "projectOne") {
          projectOne.style.cssText =
            "transform: translateX(-100vw); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99); ";
          projectTwo.style.cssText =
            "transform: translateX(0); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          projectCurShowing = "projectTwo";
        } else {
          projectOne.style.cssText = "transform: translateX(100vw);";
          setTimeout(function () {
            projectOne.style.cssText =
              "transform: translateX(0); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          }, 100);
          projectTwo.style.cssText =
            "transform: translateX(-100vw); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          setTimeout(function () {
            projectTwo.style.cssText = "transform: translateX(100vw);";
          }, 1500);
          projectCurShowing = "projectOne";
        }
      } else {
        if (projectCurShowing === "projectOne") {
          projectOne.style.cssText =
            "transform: translateX(100vw); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          projectTwo.style.cssText = "transform: translateX(-100vw);";
          setTimeout(function () {
            projectTwo.style.cssText =
              "transform: translateX(0); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          }, 100);
          projectCurShowing = "projectTwo";
        } else {
          projectOne.style.cssText = "transform: translateX(-100vw);";
          setTimeout(function () {
            projectOne.style.cssText =
              "transform: translateX(0); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          }, 100);
          projectTwo.style.cssText =
            "transform: translateX(100vw); transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
          projectCurShowing = "projectOne";
        }
      }
    }

    const nextButton = document.querySelector(".next-arrow");
    nextButton.addEventListener("click", nextFn);
    function nextFn() {
      moveOrder("next");
    }

    const previousButton = document.querySelector(".back-arrow");
    previousButton.addEventListener("click", previousFn);

    function previousFn() {
      moveOrder("previous");
    }

    const downArrowTop = document.querySelector(".back-arrow");
    const firstArrowPosX = downArrowTop.getBoundingClientRect().left;
    const firstArrowPosY =
      downArrowTop.getBoundingClientRect().top + pageYOffset;

    const downArrowBottom = document.querySelector(".next-arrow");
    const secondArrowPosX = downArrowBottom.getBoundingClientRect().left;
    const secondArrowPosY =
      downArrowBottom.getBoundingClientRect().top + pageYOffset;

    const arrowBreakPoint = document
      .querySelector(".heading-svg")
      .getBoundingClientRect().top;

    const superTrumpsImage = document.querySelector("#super-trumps-image");
    const codinglogImage = document.querySelector("#coding-log-image");

    const backArrows = document.querySelector(".back-arrows");
    const backArrowsPosX = backArrows.getBoundingClientRect().left;
    const backArrowsPosY = backArrows.getBoundingClientRect().top + pageYOffset;

    const nextArrows = document.querySelector(".next-arrows");
    const nextArrowsPosX = nextArrows.getBoundingClientRect().left;
    const nextArrowsPosY = nextArrows.getBoundingClientRect().top + pageYOffset;

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

    window.addEventListener("scroll", readyArrowMove);
    window.addEventListener("scroll", readyFadeImage);
    window.addEventListener("scroll", readySecondMove);
    window.addEventListener("scroll", readyThirdMove);

    const firstTrigger = document.getElementById("super-trumps");
    const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

    function readyArrowMove() {
      if (pageYOffset > arrowBreakPoint) {
        window.removeEventListener("scroll", readyArrowMove);
        window.addEventListener("scroll", readyReverseArrowMove);
        arrowMoveTop(
          downArrowTop,
          backArrowsPosX,
          backArrowsPosY,
          superTrumpsImage
        );
        arrowMoveBottom(downArrowBottom, nextArrowsPosX, nextArrowsPosY);
      }
    }
    function readyReverseArrowMove() {
      if (pageYOffset < arrowBreakPoint) {
        window.removeEventListener("scroll", readyReverseArrowMove);
        window.addEventListener("scroll", readyArrowMove);
        reverseArrowMoveTop(
          downArrowTop,
          firstArrowPosX,
          firstArrowPosY,
          superTrumpsImage
        );
        reverseArrowMoveBottom(
          downArrowBottom,
          secondArrowPosX,
          secondArrowPosY
        );
      }
    }

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

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }

  function arrowMoveTop(arrowToMove, x, y, superTrumpsImage) {
    superTrumpsImage.style.cssText =
      "opacity: 1; transition: opacity 2s ease-in-out; ";
    arrowToMove.style.cssText = `
    left: calc(${x}px - 50px);
    top: ${y}px;
    
    transform: rotate(90deg);
    transition: all 2s
    `;
  }
  function reverseArrowMoveTop(arrowToMove, x, y, superTrumpsImage) {
    superTrumpsImage.style.cssText =
      "opacity: 0; transition: opacity 2s ease-in-out; ";
    arrowToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  fill: var(--main);
  transform: rotate(0deg);
  transition: all 2s`;
  }

  function arrowMoveBottom(arrowToMove, x, y) {
    arrowToMove.style.cssText = `
    left: calc(${x}px - 50px);
    top: ${y}px;
    
    transform: rotate(-90deg);
    transition: all 2s`;
  }
  function reverseArrowMoveBottom(arrowToMove, x, y) {
    arrowToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  fill: var(--main);
  transform: rotate(0deg);
  transition: all 2s`;
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
