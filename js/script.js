let prevScrollPos = window.pageYOffset; // previous scroll position
// when scrolling,
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset; // current scroll position is the y offset from the top of document
  if (prevScrollPos > currentScrollPos) { // if scrolling up, show nav bar
    document.getElementById("navbar").style.top = "0";
  } else { // if scrolling down, hide nav bar
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollPos = currentScrollPos;
}