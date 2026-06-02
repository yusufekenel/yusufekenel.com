const langBtn = document.getElementById("langBtn");

let currentLang = "tr";

langBtn.addEventListener("click", () => {
  if (currentLang === "tr") {
    document.querySelector(".tag").innerText = "Management Information Systems Student";
    document.querySelector("h1").innerHTML = "Hi, I'm <span>Yusuf Ekenel</span>";
    document.querySelector(".desc").innerText =
      "I am a student focused on cybersecurity, data analytics, and Unity-based augmented reality projects. I aim to develop secure, functional, and user-centered digital solutions.";

    document.querySelector("#about h2").innerText = "About Me";
    document.querySelector("#about p").innerText =
      "As a Management Information Systems student, I am interested in cybersecurity, data analytics, digital marketing, and Unity-based projects. My goal is to combine technical knowledge with user experience to create functional and innovative digital solutions.";

    document.querySelector("#projects h2").innerText = "Projects";
    document.querySelector("#blog h2").innerText = "Blog";
    document.querySelector("#contact h2").innerText = "Contact";
    document.querySelector("#contact p").innerText =
      "You can contact me through the links below.";

    langBtn.innerText = "TR";
    currentLang = "en";
  } else {
    location.reload();
  }
});