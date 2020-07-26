const startY = window.pageYOffset;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  button.addEventListener("click", switchFn);
  function switchFn() {
    document.getElementById("super-trumps-text").style.cssText =
      "opacity: 0; transition: all 2s;";
    document.getElementById("coding-log-text").style.cssText =
      "opacity: 1; transition: all 2s;";
  }

  const firstEl = document.getElementById("project-background");
  const firstPosX = firstEl.getBoundingClientRect().left;
  const firstPosY = firstEl.getBoundingClientRect().top + pageYOffset;

  const elToMove = document.getElementById("el-to-move");
  elToMove.style.cssText = `left: ${firstPosX}px; top: ${firstPosY}px;`;

  const secondEl = document.getElementById("blob");
  const secondPosX = secondEl.getBoundingClientRect().left;
  const secondPosY = secondEl.getBoundingClientRect().top + pageYOffset;

  const thirdEl = document.getElementById("blob-two");
  const thirdPosX = thirdEl.getBoundingClientRect().left;
  const thirdPosY = thirdEl.getBoundingClientRect().top + pageYOffset;

  const fourthEl = document.getElementById("contact-blob");
  const fourthPosX = fourthEl.getBoundingClientRect().left;
  const fourthPosY = fourthEl.getBoundingClientRect().top + 50 + pageYOffset;

  window.addEventListener("scroll", readyFirstMove);
  window.addEventListener("scroll", readySecondMove);
  window.addEventListener("scroll", readyThirdMove);

  const firstTrigger = document.getElementById("super-trumps");
  const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

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
  const thirdTriggerPos = thirdTrigger.getBoundingClientRect().top;

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
      reverseSecondMove(elToMove, thirdPosX, thirdPosY);
    }
  }
});

window.onscroll = function () {
  var currentY = window.pageYOffset;
  if (startY === currentY) {
    document.getElementById("arrows").style.opacity = "1";
  } else {
    document.getElementById("arrows").style.opacity = "0";
  }
};

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function firstMove(elToMove, x, y) {
  elToMove.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: 863px;
    height: 570px;
    border-radius: 285px;
    transform: rotate(0);
    transition: all 1.5s`;
}
function reverseFirstMove(elToMove, x, y) {
  elToMove.style.cssText = `left: ${x}px; top: ${y}px; transition: all 1.5s`;
}

function secondMove(elToMove, x, y) {
  elToMove.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: 863px;
    height: 570px;
    border-radius: 285px;
    transform: rotate(0);
    transition: all 1.5s`;
}

function reverseSecondMove(elToMove, x, y) {
  elToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  width: 863px;
  height: 570px;
  border-radius: 285px;
  transform: rotate(0);
  transition: all 1.5s`;
}

function thirdMove(elToMove, x, y) {
  elToMove.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    width: 863px;
    height: 570px;
    border-radius: 285px;
    transition: all 1.5s;
    transform: rotate(45deg);
   `;
}

function reverseThirdMove(elToMove, x, y) {
  elToMove.style.cssText = `
  left: ${x}px;
  top: ${y}px;
  width: 863px;
  height: 570px;
  border-radius: 285px;
  transition: all 1.5s`;
}
