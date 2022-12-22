const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//createElement("") : html태그 추가
//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


//index.html의 body에 html코드 추가
//document.body.appendChild(bgImage);

