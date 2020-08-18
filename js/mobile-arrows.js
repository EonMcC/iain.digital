if (document.documentElement.clientWidth < 1000) {
  document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".scroll-arrows");
    console.log(arrows);

    const breakPoint = arrows[0].getBoundingClientRect().top + -300;

    document.addEventListener("scroll", fadeArrows);

    function fadeArrows() {
      if (pageYOffset > breakPoint) {
        document.removeEventListener("scroll", fadeArrows);
        arrows.forEach((arrow) => {
          arrow.style.cssText = "opacity: 0; transition: all 1s;";
        });
        document.addEventListener("scroll", unfadeArrows);
      }
    }

    function unfadeArrows() {
      if (pageYOffset < breakPoint) {
        document.removeEventListener("scroll", unfadeArrows);
        arrows.forEach((arrow) => {
          arrow.style.cssText = "opacity: 1; transition: all 1s;";
        });
        document.addEventListener("scroll", fadeArrows);
      }
    }
  });
}
