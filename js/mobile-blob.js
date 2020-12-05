if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const elToMove = document.getElementById("el-to-move");

    const minusOneEl = document.getElementById("blob-super");
    const minusOnePosX = minusOneEl.getBoundingClientRect().left + 7;
    const minusOnePosY = minusOneEl.getBoundingClientRect().top + pageYOffset;

    const pooTimerImg = document.getElementById("poo-timer-image");
    const pooTimerImgPosX = pooTimerImg.getBoundingClientRect().left;
    const pooTimerImgPosY = pooTimerImg.getBoundingClientRect().top + pageYOffset;
    console.log(pooTimerImgPosX)
    console.log(pooTimerImgPosY)

    const zeroEl = document.getElementById("coding-log-image");
    const zeroPosX = zeroEl.getBoundingClientRect().left;
    const zeroPosY = zeroEl.getBoundingClientRect().top + pageYOffset;

    const firstEl = document.getElementById("blob");
    const firstPosX = firstEl.getBoundingClientRect().left;
    const firstPosY = firstEl.getBoundingClientRect().top + pageYOffset;

    const secondEl = document.getElementById("blob-two");
    const secondPosX = secondEl.getBoundingClientRect().left;
    const secondPosY = secondEl.getBoundingClientRect().top + pageYOffset;

    const thirdEl = document.getElementById("blob-three");
    const thirdPosX = thirdEl.getBoundingClientRect().left;
    const thirdPosY = thirdEl.getBoundingClientRect().top + pageYOffset;

    const pooTimerTriggerPos =
      document.getElementById("poo-timer-image").getBoundingClientRect().top + 75;

    const minusOneTriggerPos =
      document.getElementById("super-trumps-image").getBoundingClientRect()
        .top + 75;

    const zeroTriggerPos =
      document.getElementById("coding-log-image").getBoundingClientRect().top +
      75;

    const firstTriggerPos = document
      .getElementById("hello")
      .getBoundingClientRect().top;
    const secondTriggerPos = document
      .getElementById("indv-languages-wrapper")
      .getBoundingClientRect().top;

    window.addEventListener("scroll", readyPooTimerMove);
    window.addEventListener("scroll", readyMinusOneMove);
    window.addEventListener("scroll", readyZeroMove);
    window.addEventListener("scroll", readyFirstMove);
    window.addEventListener("scroll", readySecondMove);

    // Poo Timer Move
    function readyPooTimerMove() {
      if (pageYOffset > pooTimerTriggerPos) {
        window.removeEventListener("scroll", readyPooTimerMove);
        window.addEventListener("scroll", reverseReadyPooTimerMove);
        pooTimerMove(elToMove, minusOnePosX, minusOnePosY);
      }
    }
    function reverseReadyPooTimerMove() {
      if (pageYOffset < pooTimerTriggerPos) {
        window.removeEventListener("scroll", reverseReadyPooTimerMove);
        window.addEventListener("scroll", readyPooTimerMove);
        reversePooTimerMove(elToMove, pooTimerImgPosX, pooTimerImgPosY);
      }
    }
    // minusOneMove
    function readyMinusOneMove() {
      if (pageYOffset > minusOneTriggerPos) {
        window.removeEventListener("scroll", readyMinusOneMove);
        window.addEventListener("scroll", reverseReadyMinusOneMove);
        minusOneMove(elToMove, zeroPosX, zeroPosY);
      }
    }
    function reverseReadyMinusOneMove() {
      if (pageYOffset < minusOneTriggerPos) {
        window.removeEventListener("scroll", reverseReadyMinusOneMove);
        window.addEventListener("scroll", readyMinusOneMove);
        reverseMinusOneMove(elToMove, minusOnePosX, minusOnePosY);
      }
    }
    // Zero Move
    function readyZeroMove() {
      if (pageYOffset > zeroTriggerPos) {
        window.removeEventListener("scroll", readyZeroMove);
        window.addEventListener("scroll", reverseReadyZeroMove);
        zeroMove(elToMove, firstPosX, firstPosY);
      }
    }
    function reverseReadyZeroMove() {
      if (pageYOffset < zeroTriggerPos) {
        window.removeEventListener("scroll", reverseReadyZeroMove);
        window.addEventListener("scroll", readyZeroMove);
        reverseZeroMove(elToMove, zeroPosX, zeroPosY);
      }
    }

    //First Move
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
    //Second Move
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

    elToMove.style.cssText = `left: ${pooTimerImgPosX}px; top: ${pooTimerImgPosY}px;`;

    function pooTimerMove(elToMove, x, y) {
      elToMove.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: 343.36px;
        height: 184.68px;
        transition: all 2s;
      `;
    }
    function reversePooTimerMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 129.8px;
      height: 225px;
      transition: all 2s;
      `;
    }

    function minusOneMove(elToMove, x, y) {
      elToMove.style.cssText = `
        left: 30%;
        top: ${y}px;
        width: 129.8px;
        height: 225px;
        transition: all 2s;
      `;
    }
    function reverseMinusOneMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 343.36px;
      height: 184.68px;
      transition: all 2s;
      `;
    }

    function zeroMove(elToMove, x, y) {
      elToMove.style.cssText = `
        left: ${x}px;
        top: ${y}px;
        width: 863px;
        height: 570px;
        transition: all 2s;
        transform: rotate(0deg);
        border-radius: 285px;
      `;
    }
    function reverseZeroMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: 30%;
      top: ${y}px;
      width: 129.8px;
      height: 225px;
      transition: all 2s;
      `;
    }

    function firstMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 90vw;
      height: 70px;
      border-radius: 5px;
      transition: all 2s;

      transform: rotate(0deg);
      background: var(--linGrad);
      box-shadow: -10px 10px 10px 5px var(--shadow);`;
    }

    function reverseFirstMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 863px;
      height: 570px;
      border-radius: 285px;
      transition: all 2s;
      
      transform: rotate(0deg);
      background: var(--linGrad);
      box-shadow: 10px 10px 10px 5px var(--shadow);`;
    }

    function secondMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 400px;
      height: 600px;
      border-radius: 10px;
      transition: all 2s;

      transform: rotate(0deg);
      background: var(--linGrad);
      box-shadow: -10px 10px 10px 5px var(--shadow);`;
    }

    function reverseSecondMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 90vw;
      height: 70px;
      border-radius: 5px;
      transition: all 2s;
      
      transform: rotate(0deg);
      background: var(--linGrad);
      box-shadow: 10px 10px 10px 5px var(--shadow);`;
    }
  });
}
