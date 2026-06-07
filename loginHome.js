const uIcon = document.getElementById("uIcon");
const userMenu = document.getElementById("userMenu");

uIcon.onclick = function () {
    userMenu.classList.toggle("hidden");

    if (userMenu.classList.contains("hidden")) {
        uIcon.setAttribute("aria-expanded", "false");
    } else {
        uIcon.setAttribute("aria-expanded", "true");
    }
};

const dialog = document.getElementById("salesDialog");
const knowMoreBtn = document.getElementById("kmbs");
const closeBtn = dialog.querySelector("#closebtn");

knowMoreBtn.addEventListener("click", () => {
    dialog.classList.remove("modalhidden");
    closeBtn.focus();
});

closeBtn.addEventListener("click", () => {
    dialog.classList.add("modalhidden");
    knowMoreBtn.focus();
});