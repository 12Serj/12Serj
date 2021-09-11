window.onload = function() {
    const footerSpan = document.querySelector(".footer-span");
    footerSpan.innerHTML = `${(new Date().getFullYear())}`;
}