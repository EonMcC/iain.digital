const startY = window.pageYOffset;
let moveTo = 0;

document.addEventListener("DOMContentLoaded", () => {
  const blah = document.querySelector("#super-trumps-image");
  const blahImage = document.getElementById("super-trumps-full");
  blah.addEventListener("click", fullScreenFn);

  function fullScreenFn() {
    blahImage.style.cssText = "opacity: 1; z-index: 11;";
  }

  const projectOne = document.getElementById("project-one-wrapper");
  const projectTwo = document.getElementById("project-two-wrapper");

  const nextButton = document.querySelector(".next-arrow");
  nextButton.addEventListener("click", nextFn);

  function nextFn() {
    projectOne.style.cssText =
      "left: -100vw; transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99); ";
    projectTwo.style.cssText =
      "left: 0; transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
    // if (moveTo < 1) {
    //   moveTo += 1;
    // } else {
    //   moveTo = 0;
    // }
    // switch (moveTo) {
    //   case 0:
    //     handleSuperTrumps("show");
    //     handleCodingLog("hide");
    //     handlePycp("hide");
    //     handleJPark("hide");
    //     handleTravucket("hide");
    //     break;
    //   case 1:
    //     handleSuperTrumps("hide");
    //     handleCodingLog("show");
    //     handlePycp("hide");
    //     handleJPark("hide");
    //     handleTravucket("hide");
    //     break;
    // case 2:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("show");
    //   handleJPark("hide");
    //   handleTravucket("hide");
    //   break;
    // case 3:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("hide");
    //   handleJPark("show");
    //   handleTravucket("hide");
    //   break;
    // case 4:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("hide");
    //   handleJPark("hide");
    //   handleTravucket("show");
    //   break;
    // default:
    //   break;
    // }
  }
  const previousButton = document.querySelector(".back-arrow");
  previousButton.addEventListener("click", previousFn);
  function previousFn() {
    projectOne.style.cssText =
      "left: 0; transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
    projectTwo.style.cssText =
      "left: +100; transition: all 1.5s cubic-bezier(.41,-0.29,.24,.99);";
    // if (moveTo > 0) {
    //   moveTo -= 1;
    // } else {
    //   moveTo = 1;
    // }

    // switch (moveTo) {
    //   case 0:
    //     handleSuperTrumps("show");
    //     handleCodingLog("hide");
    //     handlePycp("hide");
    //     handleJPark("hide");
    //     handleTravucket("hide");
    //     break;
    //   case 1:
    //     handleSuperTrumps("hide");
    //     handleCodingLog("show");
    //     handlePycp("hide");
    //     handleJPark("hide");
    //     handleTravucket("hide");
    //     break;
    // case 2:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("show");
    //   handleJPark("hide");
    //   handleTravucket("hide");
    //   break;
    // case 3:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("hide");
    //   handleJPark("show");
    //   handleTravucket("hide");
    //   break;
    // case 4:
    //   handleSuperTrumps("hide");
    //   handleCodingLog("hide");
    //   handlePycp("hide");
    //   handleJPark("hide");
    //   handleTravucket("show");
    //   break;
    //   default:
    //     break;
    // }
  }

  function handleSuperTrumps(option) {
    const superTrumpsArray = document.querySelectorAll(
      "#super-trumps, #super-trumps-text, #super-trumps-github, #super-trumps-image"
    );
    if (option === "show") {
      superTrumpsArray.forEach(
        (e) =>
          (e.style.cssText =
            "opacity: 1; transition: all 1.5s ease-in; z-index:10;")
      );
      document.getElementById("super-trumps-image").style.position = "relative";
    } else {
      superTrumpsArray.forEach(
        (e) => (e.style.cssText = "opacity: 0; z-index: 0;")
      );
      document.getElementById("super-trumps-image").style.cssText =
        "opacity: 0; position: absolute;";
    }
  }
  function handleCodingLog(option) {
    const codingLogArray = document.querySelectorAll(
      "#coding-log, #coding-log-text, #coding-log-github, #coding-log-image"
    );
    if (option === "show") {
      codingLogArray.forEach(
        (e) =>
          (e.style.cssText =
            "opacity: 1; transition: all 1.5s ease-in; z-index:10;")
      );
      document.getElementById("coding-log-image").style.position = "relative";
    } else {
      codingLogArray.forEach(
        (e) => (e.style.cssText = "opacity: 0; z-index: 0;")
      );
      document.getElementById("coding-log-image").style.cssText =
        "opacity: 0; position: absolute;";
    }
  }
  function handlePycp(option) {
    const pycpArray = document.querySelectorAll(
      "#pycp, #pycp-text, #pycp-github, #pycp-image"
    );
    if (option === "show") {
      pycpArray.forEach(
        (e) =>
          (e.style.cssText =
            "opacity: 1; transition: all 1.5s ease-in; z-index:10;")
      );
      document.getElementById("pycp-image").style.position = "relative";
    } else {
      pycpArray.forEach((e) => (e.style.cssText = "opacity: 0; z-index: 0;"));
      document.getElementById("pycp-image").style.cssText =
        "opacity: 0; position: absolute;";
    }
  }
  function handleJPark(option) {
    const jParkArray = document.querySelectorAll(
      "#j-park, #j-park-text, #j-park-github, #j-park-image"
    );
    if (option === "show") {
      jParkArray.forEach(
        (e) =>
          (e.style.cssText =
            "opacity: 1; transition: all 1.5s ease-in; z-index:10;")
      );
      document.getElementById("j-park-image").style.position = "relative";
    } else {
      jParkArray.forEach((e) => (e.style.cssText = "opacity: 0; z-index: 0;"));
      document.getElementById("j-park-image").style.cssText =
        "opacity: 0; position: absolute;";
    }
  }
  function handleTravucket(option) {
    const travucketArray = document.querySelectorAll(
      "#travucket, #travucket-text, #travucket-github, #travucket-image"
    );
    if (option === "show") {
      travucketArray.forEach(
        (e) =>
          (e.style.cssText =
            "opacity: 1; transition: all 1.5s ease-in; z-index:10;")
      );
      document.getElementById("travucket-image").style.position = "relative";
    } else {
      travucketArray.forEach(
        (e) => (e.style.cssText = "opacity: 0; z-index: 0;")
      );
      document.getElementById("travucket-image").style.cssText =
        "opacity: 0; position: absolute;";
    }
  }

  const downArrowTop = document.querySelector(".back-arrow");
  const firstArrowPosX = downArrowTop.getBoundingClientRect().left;
  const firstArrowPosY = downArrowTop.getBoundingClientRect().top + pageYOffset;

  const downArrowBottom = document.querySelector(".next-arrow");
  const secondArrowPosX = downArrowBottom.getBoundingClientRect().left;
  const secondArrowPosY =
    downArrowBottom.getBoundingClientRect().top + pageYOffset;

  const arrowBreakPoint = document
    .querySelector("#sub-heading")
    .getBoundingClientRect().top;

  const backArrows = document.querySelector(".back-arrows");
  const backArrowsPosX = backArrows.getBoundingClientRect().left;
  const backArrowsPosY = backArrows.getBoundingClientRect().top + pageYOffset;

  const nextArrows = document.querySelector(".next-arrows");
  const nextArrowsPosX = nextArrows.getBoundingClientRect().left;
  const nextArrowsPosY = nextArrows.getBoundingClientRect().top + pageYOffset;

  const firstEl = document.getElementById("project-background");
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
  window.addEventListener("scroll", readyFirstMove);
  window.addEventListener("scroll", readySecondMove);
  window.addEventListener("scroll", readyThirdMove);

  const firstTrigger = document.getElementById("super-trumps");
  const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

  function readyArrowMove() {
    if (pageYOffset > arrowBreakPoint) {
      window.removeEventListener("scroll", readyArrowMove);
      window.addEventListener("scroll", readyReverseArrowMove);
      arrowMoveTop(downArrowTop, backArrowsPosX, backArrowsPosY);
      arrowMoveBottom(downArrowBottom, nextArrowsPosX, nextArrowsPosY);
    }
  }
  function readyReverseArrowMove() {
    if (pageYOffset < arrowBreakPoint) {
      window.removeEventListener("scroll", readyReverseArrowMove);
      window.addEventListener("scroll", readyArrowMove);
      reverseArrowMoveTop(downArrowTop, firstArrowPosX, firstArrowPosY);
      reverseArrowMoveBottom(downArrowBottom, secondArrowPosX, secondArrowPosY);
    }
  }

  function readyFirstMove() {
    if (pageYOffset > firstTriggerPos) {
      window.removeEventListener("scroll", readyFirstMove);
      window.addEventListener("scroll", reverseReadyFirstMove);
      firstMove(elToMove, secondPosX, secondPosY);
    }
  }
  function reverseReadyFirstMove() {
    if (pageYOffset < firstTriggerPos) {
      window.removeEventListener("scroll", reverseReadyFirstMove);
      window.addEventListener("scroll", readyFirstMove);
      reverseFirstMove(elToMove, firstPosX, firstPosY);
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

function arrowMoveTop(arrowToMove, x, y) {
  arrowToMove.style.cssText = `
    left: calc(${x}px - 62.5px);
    top: ${y}px;
    
    transform: rotate(90deg);
    transition: all 2s
    `;
}
function reverseArrowMoveTop(arrowToMove, x, y) {
  arrowToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  fill: var(--main);
  transform: rotate(0deg);
  transition: all 2s`;
}

function arrowMoveBottom(arrowToMove, x, y) {
  arrowToMove.style.cssText = `
    left: ${x}px;
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

function firstMove(elToMove, x, y) {
  elToMove.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: 863px;
    height: 370px;
    border-radius: 50px;
    transform: rotate(0);
    transition: all 2s`;
}
function reverseFirstMove(elToMove, x, y) {
  elToMove.style.cssText = `left: ${x}px; top: ${y}px; transition: all 1.5s`;
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
  background: linear-gradient(
    -135deg,
    rgba(104, 137, 150, 1) 0%,
    rgba(67, 115, 141, 1) 70%  
  );
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
    background: linear-gradient(
      135deg,
      rgba(67, 115, 141, 1) 100%,
      rgba(104, 137, 150, 1) 0%    
    );
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
  background: linear-gradient(
    -135deg,
    rgba(104, 137, 150, 1) 0%,
    rgba(67, 115, 141, 1) 100%  
  );
  box-shadow: -10px 10px 10px 5px var(--shadow);`;
}
