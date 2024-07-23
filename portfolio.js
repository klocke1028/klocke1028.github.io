// Nav bar
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// Slideshow
const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");
}

init();

nextButton.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    currentSlide = 0;
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";
}

// Fun facts

let fact = document.getElementById("fact");
let viewFact = document.getElementById("fact-button");
let kateFacts = [
  "I am a drummer in a band. We even have a couple of released songs.",
  "I play the guitar and bass. I'm classically trained on the clarinet though I haven't played in many years.",
  "I love working on digital art as a hobby.",
  "My all time favorite video game series is The Elder Scrolls.",
  "Traveling to Greece is on my bucket list since I'm part Greek.",
  "Traveling to Ireland is on my bucket list.",
];

let factNumber;

function randomFact() {
  return kateFacts[factNumber];
}

viewFact.addEventListener("click", function () {
  factNumber = Math.floor(Math.random() * 6);
  fact.textContent = randomFact();
});
