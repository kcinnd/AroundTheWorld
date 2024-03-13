// scripts.js

const images = [
  { src: "https://i.imgur.com/DfUTEVq.png", name: "eiffel tower" },
  { src: "https://i.imgur.com/omPU99l.png", name: "xian terracotta army" },
  // Add the rest of the images here
];

// Function to shuffle the images array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap
  }
}

shuffle(images);

// Function to display images in the grid
function displayImages() {
  const gallery = document.querySelector('.gallery');
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.name;
    imgElement.addEventListener('click', () => openModal(image));
    gallery.appendChild(imgElement);
  });
}

// Function to open modal with selected image
function openModal(image) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const imageInput = document.getElementById('image-input');

  modal.style.display = "block";
  modalImg.src = image.src;
  imageInput.placeholder = "Enter the name...";

  // Close modal on close button click
  const closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // Close modal on outside click
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

// Initialize the gallery display
displayImages();
