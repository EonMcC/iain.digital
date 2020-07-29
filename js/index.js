const startY = window.pageYOffset;
let moveTo = 0;

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("next");
  nextButton.addEventListener("click", nextFn);

  function nextFn() {
    if (moveTo < 4) {
      moveTo += 1;
    } else {
      moveTo = 0;
    }
    switch (moveTo) {
      case 0:
        handleSuperTrumps("show");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 1:
        handleSuperTrumps("hide");
        handleCodingLog("show");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 2:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("show");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 3:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("show");
        handleTravucket("hide");
        break;
      case 4:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("show");
        break;
      default:
        break;
    }
  }
  const previousButton = document.getElementById("previous");
  previousButton.addEventListener("click", previousFn);
  function previousFn() {
    if (moveTo > 0) {
      moveTo -= 1;
    } else {
      moveTo = 4;
    }

    switch (moveTo) {
      case 0:
        handleSuperTrumps("show");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 1:
        handleSuperTrumps("hide");
        handleCodingLog("show");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 2:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("show");
        handleJPark("hide");
        handleTravucket("hide");
        break;
      case 3:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("show");
        handleTravucket("hide");
        break;
      case 4:
        handleSuperTrumps("hide");
        handleCodingLog("hide");
        handlePycp("hide");
        handleJPark("hide");
        handleTravucket("show");
        break;
      default:
        break;
    }
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

  const firstEl = document.getElementById("project-background");
  const firstPosX = firstEl.getBoundingClientRect().left;
  const firstPosY = firstEl.getBoundingClientRect().top + pageYOffset;

  const elToMove = document.getElementById("el-to-move");
  elToMove.style.cssText = `left: ${firstPosX}px; top: ${firstPosY}px;`;

  const secondEl = document.getElementById("blob");
  const secondPosX = secondEl.getBoundingClientRect().left + 25;
  const secondPosY = secondEl.getBoundingClientRect().top + pageYOffset;

  const thirdEl = document.getElementById("languages");
  const thirdPosX = thirdEl.getBoundingClientRect().left - 120;
  const thirdPosY = thirdEl.getBoundingClientRect().top + pageYOffset;

  const fourthEl = document.getElementById("contact-details-container");
  const fourthPosX = fourthEl.getBoundingClientRect().left - 100;
  const fourthPosY = fourthEl.getBoundingClientRect().top + pageYOffset;

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
    animation: first-circle-transition 1s;
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
  height: 570px;
  border-radius: 285px;
  transform: rotate(0);
  transition: all 2s`;
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
  transform: rotate(0);
  animation: first-circle-transition 1s;
  transition: all 2s`;
}
