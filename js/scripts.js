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