if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const superTrumps = document.querySelector("#super-trumps");
    const superTrumpsText = document.querySelector("#super-trumps-text");
    const superTrumpsImage = document.querySelector("#super-trumps-image");
    const superProjectArray = [superTrumpsText, superTrumps, superTrumpsImage];

    const codingLog = document.getElementById("coding-log");
    const codingLogText = document.getElementById("coding-log-text");
    const codingLogImage = document.getElementById("coding-log-image");
    const codingProjectArray = [codingLog, codingLogText, codingLogImage];

    let currentProjectArray = superProjectArray;

    const projectTwoWrapper = document.getElementById("project-two-wrapper");

    const backBtnMobile = document.querySelector(".back-btn-mobile");
    const backBtnTextMobile = document.querySelector(".back-btn-text-mobile");

    const nextBtnMobile = document.querySelector(".next-btn-mobile");
    const nextBtnTextMobile = document.querySelector(".next-btn-text-mobile");

    backBtnMobile.addEventListener("touchend", back, false);

    nextBtnMobile.addEventListener("touchend", next, false);
    backBtnTextMobile.addEventListener("touchend", back, false);
    nextBtnTextMobile.addEventListener("touchend", next, false);

    function next() {
      const firstArray = currentProjectArray;
      firstArray.forEach((object) => {
        object.style.cssText =
          "transform: translate(-100vw); opacity: 1; z-index: 10; transition: all 1s cubic-bezier(.41,-0.29,.24,.99);";
      });

      projectTwoWrapper.style.cssText = "opacity: 1;";

      setTimeout(function () {
        firstArray.forEach((object) => {
          object.style.cssText =
            "transform: translate(0vw); opacity: 0; z-index: -1;";
        });
      }, 1000);

      currentProjectArray === superProjectArray
        ? (currentProjectArray = codingProjectArray)
        : (currentProjectArray = superProjectArray);

      currentProjectArray.forEach((object) => {
        object.style.cssText = "transform: translate(100vw); opacity: 1;";
      });

      setTimeout(function () {
        currentProjectArray.forEach((object) => {
          object.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 10;  transition: all 1s cubic-bezier(.41,-0.29,.24,.99);";
        });
      }, 200);
    }

    function back() {
      const firstArray = currentProjectArray;
      firstArray.forEach((object) => {
        object.style.cssText =
          "transform: translate(100vw); opacity: 1; z-index: 10; transition: all 1s cubic-bezier(.41,-0.29,.24,.99);";
      });

      projectTwoWrapper.style.cssText = "opacity: 1;";

      setTimeout(function () {
        console.log("here");
        firstArray.forEach((object) => {
          object.style.cssText =
            "transform: translate(0vw); opacity: 0; z-index: -1; background: green;";
        });
      }, 1000);

      console.log("here2");
      currentProjectArray === superProjectArray
        ? (currentProjectArray = codingProjectArray)
        : (currentProjectArray = superProjectArray);

      currentProjectArray.forEach((object) => {
        object.style.cssText =
          "transform: translate(-100vw); opacity: 1; z-index: 10;";
      });

      setTimeout(function () {
        currentProjectArray.forEach((object) => {
          object.style.cssText =
            "transform: translate(0vw); opacity: 1; z-index: 10;  transition: all 1s cubic-bezier(.41,-0.29,.24,.99);";
        });
      }, 200);
    }
  });
}