var startY = window.pageYOffset;

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", readyZeroMove);
  window.addEventListener("scroll", readyFirstMove);
  window.addEventListener("scroll", readySecondMove);

  let projectBackground = document.getElementById("project-background");
  let movingBlob = document.getElementById("blob-one");
  let blob = document.getElementById("blob");

  const zeroTrigger = document.getElementById("super-trumps");
  const zeroTriggerPos = zeroTrigger.getBoundingClientRect().top;

  function readyZeroMove() {
    if (pageYOffset > zeroTriggerPos) {
      window.removeEventListener("scroll", readyZeroMove);
      window.addEventListener("scroll", reverseReadyZeroMove);
      zeroMove(projectBackground);
    }
  }
  function reverseReadyZeroMove() {
    if (pageYOffset < zeroTriggerPos) {
      window.removeEventListener("scroll", reverseReadyZeroMove);
      window.addEventListener("scroll", readyZeroMove);
      reverseZeroMove(projectBackground);
    }
  }

  const firstTrigger = document.getElementById("super-trumps-text");
  const firstTriggerPos = firstTrigger.getBoundingClientRect().top;

  function readyFirstMove() {
    if (pageYOffset > firstTriggerPos) {
      window.removeEventListener("scroll", readyFirstMove);
      window.addEventListener("scroll", reverseReadyFirstMove);
      firstMove(movingBlob);
    }
  }
  function reverseReadyFirstMove() {
    if (pageYOffset < firstTriggerPos) {
      window.removeEventListener("scroll", reverseReadyFirstMove);
      window.addEventListener("scroll", readyFirstMove);
      reverseFirstMove(movingBlob);
    }
  }

  const secondTrigger = document.getElementById("third-break-point");
  const secondTriggerPos = secondTrigger.getBoundingClientRect().top;

  function readySecondMove() {
    if (pageYOffset > secondTriggerPos) {
      window.removeEventListener("scroll", readySecondMove);
      secondMove(blob);
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

function zeroMove(elToMove) {
  elToMove.style.cssText =
    "transform: translate(1000px); transition: transform 2s";
}
function reverseZeroMove(elToMove) {
  elToMove.style.cssText =
    "transform: translate(0), rotate(-8deg); transition: transform 2s;";
}

function firstMove(elToMove) {
  elToMove.style.cssText = `width: 863px; height: 570px; background: rgba(87, 138, 165, 0.6);  border-radius: 285px; transition: all 2s; transform: translate(578px);`;
}
function reverseFirstMove(elToMove) {
  elToMove.style.cssText = `width: 863px; height: 570px; background: rgba(87, 138, 165, 0.6);  border-radius: 285px; transition: all 2s; transform: translate(-578px);`;
}

function secondMove(elToMove) {
  const endPos = document.getElementById("blob-two");
  const start = getOffset(elToMove);
  const end = getOffset(endPos);
  console.log(start.left - start.left);
  const xTrans = start.left - start.left - start.left + end.left;
  const yTrans = end.top - start.top;
  console.log(xTrans, yTrans);
  document.getElementById("blob-one").style.cssText =
    "transition-duration: background 0s; background:none;";
  elToMove.style.cssText = `opacity: 1; transition: transform 2s; transform: translate(${xTrans}px, ${yTrans}px);`;
}
