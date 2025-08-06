$(document).ready(function () {
    const track = $(".carousel-track");
    const slides = $(".carousel-track .slide");
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        track.css("transform", `translateX(${-currentIndex * 100}%)`);
    }

    $(".next").on("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    $(".prev").on("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Vuốt cảm ứng (touch)
    let startX = 0;
    let isDragging = false;

    track.on("touchstart", function (e) {
        isDragging = true;
        startX = e.originalEvent.touches[0].clientX;
    });

    track.on("touchmove", function (e) {
        if (!isDragging) return;
       
    });

    track.on("touchend", function (e) {
        if (!isDragging) return;
        isDragging = false;
        const endX = e.originalEvent.changedTouches[0].clientX;
        const delta = endX - startX;

        if (delta <= -50) {
            $(".next").click();
        } else if (delta >= 50) {
            $(".prev").click();
        }
    });

    // Vuốt bằng chuột (desktop) 
    let startMouseX = 0;
    let mouseDown = false;

    track.on("mousedown", function (e) {
        mouseDown = true;
        startMouseX = e.clientX;
        e.preventDefault();
    });

    $(document).on("mouseup", function (e) {
        if (!mouseDown) return;
        mouseDown = false;
        const delta = e.clientX - startMouseX;
        if (delta <= -50) $(".next").click();
        else if (delta >= 50) $(".prev").click();
    });

    // Khởi tạo vị trí ban đầu
    updateCarousel();

    //  cập nhật lại khi resize
    $(window).on("resize", updateCarousel);
});
