// Get the lightbox elements
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeBtn = document.getElementsByClassName('close')[0];

// Function to open the lightbox
function openLightbox(imgSrc) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgSrc;
}

// Function to close the lightbox
closeBtn.onclick = function() {
    lightbox.style.display = 'none';
}

// Close the lightbox when clicking outside the image
lightbox.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
}

// Add event listeners to all project images
document.querySelectorAll('.project img').forEach(function(img) {
    img.addEventListener('click', function() {
        openLightbox(img.src);
    });
});