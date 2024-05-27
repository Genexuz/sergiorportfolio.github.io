var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');
var closeBtn = document.getElementsByClassName('close')[0];

function openLightbox(imgSrc) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgSrc;
}

closeBtn.onclick = function() {
    lightbox.style.display = 'none';
}

lightbox.onclick = function(event) {
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
}

document.querySelectorAll('.project img').forEach(function(img) {
    img.addEventListener('click', function() {
        openLightbox(img.src);
    });
});