const images = document.querySelectorAll(".img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentImages = [...images];
let index = 0;

/* FILTER FUNCTION */
function filterImages(category) {
  currentImages = [];

  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
      currentImages.push(img);
    } else {
      img.style.display = "none";
    }
  });
}

/* OPEN IMAGE */
function showImage(i) {
  lightboxImg.src = currentImages[i].src;
  index = i;
  lightbox.style.display = "block";
}

/* CLICK IMAGE */
images.forEach(img => {
  img.addEventListener("click", () => {
    currentImages = [...document.querySelectorAll(".img")]
      .filter(i => i.style.display !== "none");

    index = currentImages.indexOf(img);
    showImage(index);
  });
});

/* CLOSE */
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

/* NEXT */
nextBtn.onclick = () => {
  index = (index + 1) % currentImages.length;
  showImage(index);
};

/* PREV */
prevBtn.onclick = () => {
  index = (index - 1 + currentImages.length) % currentImages.length;
  showImage(index);
};

/* CLOSE BACKGROUND CLICK */
lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};