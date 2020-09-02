if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const superTrumps = document.querySelector("#super-trumps");
    const superTrumpsText = document.querySelector("#super-trumps-text");
    const superTrumpsImage = document.querySelector("#super-trumps-image");
    const superProjectArray = [superTrumpsText, superTrumps, superTrumpsImage];

    const codingLog = document.getElementById("coding-log");
    const codingLogText = document.getElementById("coding-log-text");
    const codingLogImage = document.getElementById("coding-log-image");
    // const codingLogImageWidth = codingLogImage.offsetWidth;
    const codingLogImageHeight = codingLogImage.offsetHeight;
    const codingProjectArray = [codingLog, codingLogText, codingLogImage];

    let currentProjectArray = superProjectArray;

    const projectOneWrapper = document.getElementById("project-one-wrapper");
    const projectTwoWrapper = document.getElementById("project-two-wrapper");

    const backBtnMobile = document.querySelector(".back-btn-mobile");
    const backBtnTextMobile = document.querySelector(".back-btn-text-mobile");

    const nextBtnMobile = document.querySelector(".next-btn-mobile");
    const nextBtnTextMobile = document.querySelector(".next-btn-text-mobile");

    backBtnMobile.addEventListener("touchend", back, false);

    nextBtnMobile.addEventListener("touchend", next, false);
    backBtnTextMobile.addEventListener("touchend", back, false);
    nextBtnTextMobile.addEventListener("touchend", next, false);

    const blobSuper = document.getElementById("blob-super");
    const blobSuperLeft = blobSuper.getBoundingClientRect().left;

    const blobSuperTopOffset =
      blobSuper.getBoundingClientRect().top + pageYOffset;

    const blobZero = document.getElementById("blob-zero");
    blobZero.style.cssText = `position: absolute; top: ${blobSuperTopOffset}px; left: ${
      blobSuperLeft + 10
    }px`;

    blobZeroSuperDimensions = `position: absolute; top: ${blobSuperTopOffset}px; left: ${
      blobSuperLeft + 10
    }px; width: 343.36px; height: 184.68px; transition: all 1s;`;
    blobZeroCodingDimensions = `left: 30%; top: ${
      blobSuperTopOffset - 20
    }px; width: 129.8px; height: 225px; transition: all 1s;`;

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

      if (currentProjectArray === superProjectArray) {
        blobZero.style.cssText = blobZeroCodingDimensions;
        currentProjectArray = codingProjectArray;
      } else {
        blobZero.style.cssText = blobZeroSuperDimensions;
        currentProjectArray = superProjectArray;
      }

      currentProjectArray.forEach((object) => {
        object.style.cssText =
          "transform: translate(100vw); opacity: 1; z-index: 10;";
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
            "transform: translate(0vw); opacity: 0; z-index: -1;";
        });
      }, 1000);

      if (currentProjectArray === superProjectArray) {
        blobZero.style.cssText = blobZeroCodingDimensions;
        currentProjectArray = codingProjectArray;
      } else {
        blobZero.style.cssText = blobZeroSuperDimensions;
        currentProjectArray = superProjectArray;
      }

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
