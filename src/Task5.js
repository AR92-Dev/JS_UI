const box = document.createElement("div");

box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "blue";
box.style.transition = "background-color 2s ease-in-out"; 

document.body.appendChild(box);

const colors = ["blue", "red", "green", "purple", "yellow"];
let currentIndex = 0;

setInterval(() => {
currentIndex++; 
if (currentIndex >= colors.length) {
    currentIndex = 0;
}
box.style.backgroundColor = colors[currentIndex];
}, 2000);