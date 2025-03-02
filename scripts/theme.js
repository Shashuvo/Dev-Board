const button = document.getElementById("theme-controller-btn");
const body = document.body;
const colors = ["pink", "tomato", "skyblue", "lime",];
let i = 0; 
button.addEventListener("click", function() {
    if (i < colors.length - 1) {
        i++;
    } else {
        i= 0;
    }
    body.style.backgroundColor = colors[i];
});