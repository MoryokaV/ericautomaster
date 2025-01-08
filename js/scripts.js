//remove a div element
let categoryBlocks = document.querySelectorAll(".category-block")
categoryBlocks[3].remove()	


//set inner html of an element
const footer = document.querySelector("#footer div");
footer.innerHTML = `@ ${new Date().getFullYear()} toate drepurile rezervate <a href="ericautomaster.ro">ericautomaster.ro</a>`;


document.getElementsByClassName("card")[0].addEventListener("mouseover", function() {
    this.style.backgroundColor = "#f1f3f5";
});

document.getElementById("animated-box").classList += "mt-2";

document.getElementsByClassName("card")[0].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        alert("Enter key pressed!");
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const id = Math.floor(Math.random() * 10000)
    const name = document.getElementById("name").value;
    const plan = document.getElementById("plan").value;
    const data = (new Date()).toISOString();

    const user = {id, name, plan, data};

    localStorage.setItem("user", JSON.stringify(user));

    console.log("Loading...")
    setTimeout(() => console.log("User inregistrat:", user), 3000);

    // Optionally, you can submit the form data via AJAX here
});


// CANVAS

const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Desenează corpul mașinii
    ctx.fillStyle = "red";
    ctx.fillRect(100, 150, 300, 50);

    // Desenează partea de sus a mașinii
    ctx.fillStyle = "lightblue";
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(200, 100);
    ctx.lineTo(300, 100);
    ctx.lineTo(350, 150);
    ctx.closePath();
    ctx.fill();

    // Desenează roțile
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(150, 210, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(350, 210, 20, 0, Math.PI * 2);
    ctx.fill();