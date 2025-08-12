
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-track .slide");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides; // tăng lên 1 là chuyển ảnh qua, % total = 0  là do nêu ở cuối thì về đầu
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    let startMouseX = 0;
    let mouseDown = false;

    track.addEventListener("mousedown", function (e) {
        mouseDown = true;
        startMouseX = e.clientX;
        e.preventDefault();
    });

    document.addEventListener("mouseup", function (e) {
        if (!mouseDown) return;
        mouseDown = false;
        const delta = e.clientX - startMouseX;
        if (delta <= -50) {
            document.querySelector(".next").click();
        } else if (delta >= 50) {
            document.querySelector(".prev").click();
        }
    });

    updateCarousel();

    window.addEventListener("resize", updateCarousel);
});