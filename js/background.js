const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

const chosenImage = images [Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.width = 1000;
bgImage.height = 800;
document.body.appendChild(bgImage);
