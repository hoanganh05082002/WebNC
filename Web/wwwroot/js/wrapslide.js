// JavaScript cho slide
let slideIndex = 1; // Start from slide 1

function showSlide(n) {
    const slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1; // Reset to the first slide if reached the end
    }

    if (n < 1) {
        slideIndex = slides.length; // Loop to the last slide if reached the beginning
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

showSlide(slideIndex);

