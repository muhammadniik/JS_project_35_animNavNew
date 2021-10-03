const btnClose = document.querySelector(".close");
const nav = document.querySelector(".mian header ul");


btnClose.addEventListener("click", () => {
    btnClose.classList.toggle("active");
    nav.classList.toggle("active");
})