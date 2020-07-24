var startY = window.pageYOffset;
window.onscroll = function () {
  var currentY = window.pageYOffset;
  if (startY === currentY) {
    document.getElementById("arrows").style.opacity = "1";
  } else {
    document.getElementById("arrows").style.opacity = "0";
  }
};
