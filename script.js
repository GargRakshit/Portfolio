window.addEventListener("scroll", function() {
    const header = document.querySelector("nav");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

function openMail() {
    window.location.href = "https://mail.google.com/mail/0/deeplink/compose?to=example@email.com"
}