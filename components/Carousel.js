/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const oneImg = document.createElement("img");
  const twoImg = document.createElement("img");
  const threeImg = document.createElement("img");
  const fourImg = document.createElement("img");
  const right = document.createElement("div");

  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");


  oneImg.setAttribute("id", "1");
  twoImg.setAttribute("id", "2");
  threeImg.setAttribute("id", "3");
  fourImg.setAttribute("id", "4");

  oneImg.src= "./assets/carousel/mountains.jpeg";
  twoImg.src= "./assets/carousel/computer.jpeg";
  threeImg.src= "./assets/carousel/trees.jpeg";
  fourImg.src= "./assets/carousel/turntable.jpeg";


  carousel.append(left, oneImg, twoImg, threeImg, fourImg, right);

  return carousel
}

var index = 1

function makeVisible () {
  if (index < 1){
    index = 4
  }
  if (index > 4){
    index = 1
  }
  const picture = document.getElementById(index.toString());
  picture.style.display = "inline"
}
//function ends

const carouselContainer = document.querySelector('.carousel-container')
  carouselContainer.append(Carousel())

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', () => {
  makeInvisible()
  index ++
  makeVisible()
})
rightButton.addEventListener('click', () => {
  makeInvisible()
  index --
  makeVisible()
  
})

makeVisible();

function makeInvisible () {
  const pickOne = document.getElementById("1")
  const pickTwo = document.getElementById("2")
  const pickThree = document.getElementById("3")
  const pickFour = document.getElementById("4")

  pickOne.style.display = "none";
  pickTwo.style.display = "none";
  pickThree.style.display = "none";
  pickFour.style.display = "none";
}