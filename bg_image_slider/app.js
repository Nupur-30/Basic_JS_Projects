let slideIndex = 1;
showSlides(slideIndex); //by default, the first slide is shown

// Function to handle next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to handle dot controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Main function to show the current slide
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides"); //total slides = 3
  const dots = document.getElementsByClassName("dot");

  // Handle  slide index overflow
  if (n > slides.length) {
    slideIndex = 1;  //the user has tried to go past the last slide, slideIndex is set to 1, looping back to the first slide.
  } else if (n < 1) {
    slideIndex = slides.length; //the user has tried to go before the first slide, slideIndex is set to the total number of slides (slides.length), looping back to the last slide.
  }

  // Hide all slides
  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  //meaning- slides is an HTMLCollection, Array.from(slides) converts the HTMLCollection into a true array, allowing the use of array methods like forEach is an array method that executes a provided function once for each array element.

  // Remove "active" class from all dots
  Array.from(dots).forEach(dot => {
    dot.className = dot.className.replace(" active", "");
  });

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
