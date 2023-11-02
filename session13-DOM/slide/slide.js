let imgFeatured = document.querySelector(".img-feature");
let listImage = document.querySelectorAll(".list-image img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let currentIndex = 0;
function updateImage(index) {
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });
  currentIndex = index;
  imgFeatured.src = listImage[index].getAttribute("src");
  listImage[index].parentElement.classList.add("active");
  clearInterval(refreshSlide);
  refreshSlide = setInterval(() => {
    if (currentIndex == listImage.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateImage(currentIndex);
  }, 3000);
}

listImage.forEach((imgE, index) => {
  imgE.addEventListener("click", (e) => {
    updateImage(index);
  });
});
prevBtn.addEventListener("click", (e) => {
  if (currentIndex == 0) {
    currentIndex = listImage.length - 1;
  } else {
    currentIndex--;
  }
  updateImage(currentIndex);
});
nextBtn.addEventListener("click", (e) => {
  if (currentIndex == listImage.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImage(currentIndex);
});
let refreshSlide = setInterval(() => {
  if (currentIndex == listImage.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImage(currentIndex);
}, 3000);
updateImage(0);
