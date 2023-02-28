var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  pagination: {
    el: '.swiper-pagination'
  }
});

// Comment page
const btnComment = document.getElementsByClassName("footer-comment")[0];
const btnCloseComment = document.getElementsByClassName("comment-close")[0];
const pageComment = document.getElementsByClassName("comment-page")[0];

btnComment.addEventListener("click", showComment);
btnCloseComment.addEventListener("click", closeComment);

function showComment() {
  console.log("showComment");
  pageComment.style.height = "100%";
}
function closeComment() {
  console.log("closeComment");
  pageComment.style.height = 0;
}
