const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
    // Add more image paths as needed
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');

function showImage(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        galleryImage.src = images[currentIndex];
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
}

// Initialize the gallery with the first image
showImage(currentIndex);
