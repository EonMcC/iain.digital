if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const elToMove = document.getElementById("el-to-move");

    const firstEl = document.getElementById("blob");
    const firstPosX = firstEl.getBoundingClientRect().left;
    const firstPosY = firstEl.getBoundingClientRect().top + pageYOffset;

    const secondEl = document.getElementById("blob-two");
    const secondPosX = secondEl.getBoundingClientRect().left;
    const secondPosY = secondEl.getBoundingClientRect().top + pageYOffset;

    const thirdEl = document.getElementById("blob-three");
    const thirdPosX = thirdEl.getBoundingClientRect().left;
    const thirdPosY = thirdEl.getBoundingClientRect().top + pageYOffset;

    const firstTriggerPos = document
      .getElementById("hello")
      .getBoundingClientRect().top;
    const secondTriggerPos = document
      .getElementById("indv-languages-wrapper")
      .getBoundingClientRect().top;

    window.addEventListener("scroll", readyFirstMove);
    window.addEventListener("scroll", readySecondMove);

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

    elToMove.style.cssText = `left: ${firstPosX}px; top: ${firstPosY}px;`;

    function firstMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 90vw;
      height: 70px;
      border-radius: 5px;
      transition: all 2s;

      background: linear-gradient(
        -135deg,
        rgba(104, 137, 150, 1) 0%,
        rgba(67, 115, 141, 1) 70%  
      );
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
      
      background: linear-gradient(
        135deg,
        rgba(104, 137, 150, 1) 0%,
        rgba(67, 115, 141, 1) 100%
      );
      box-shadow: 10px 10px 10px 5px var(--shadow);`;
    }

    function secondMove(elToMove, x, y) {
      elToMove.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 400px;
      height: 600px;
      border-radius: 50px;
      transition: all 2s;

      background: linear-gradient(
        225deg,
        rgba(104, 137, 150, 1) 0%,
        rgba(67, 115, 141, 1) 70%  
      );
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
      
      background: linear-gradient(
        -135deg,
        rgba(104, 137, 150, 1) 0%,
        rgba(67, 115, 141, 1) 100%
      );
      box-shadow: 10px 10px 10px 5px var(--shadow);`;
    }
  });
}
