const images = [
  { src: "https://i.imgur.com/DfUTEVq.png", name: "eiffel tower" },
  { src: "https://i.imgur.com/omPU99l.png", name: "xian terracotta army" },
  { src: "https://i.imgur.com/EAs0cOb.png", name: "edinburgh castle" },
  { src: "https://i.imgur.com/66Hnqi7.png", name: "el castillo" },
  { src: "https://i.imgur.com/aOuKFNQ.png", name: "hagia sofia" },
  { src: "https://i.imgur.com/hPBCQwD.png", name: "red square" },
  { src: "https://i.imgur.com/H477vww.png", name: "petra" },
  { src: "https://i.imgur.com/0XgL5j1.png", name: "louvre" },
  { src: "https://i.imgur.com/nMkwNOx.png", name: "easter island" },
  { src: "https://i.imgur.com/aUwYnRk.png", name: "great wall of china" },
  { src: "https://i.imgur.com/UnwcAOt.png", name: "leaning tower of pisa" },
  { src: "https://i.imgur.com/NQku9P9.png", name: "big ben" },
  { src: "https://i.imgur.com/OwjTJgM.png", name: "old town of dubrovnik" },
  { src: "https://i.imgur.com/CEsez5P.png", name: "opera house" }
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
  const feedback = document.getElementById('feedback'); // Add this line

  modal.style.display = "block";
  modalImg.src = image.src;
  imageInput.value = ''; // Clear previous input
  imageInput.placeholder = "Enter the name...";
  feedback.style.opacity = 0; // Hide feedback

  imageInput.className = ''; // Reset class
  imageInput.oninput = () => feedback.style.opacity = 0; // Hide feedback when user starts typing again

  imageInput.onkeypress = function(event) {
    if (event.key === "Enter") {
      if (this.value.toLowerCase() === image.name.toLowerCase()) {
        this.className = 'input-correct';
        feedback.textContent = "Nice job!";
        feedback.style.opacity = 1;
      } else {
        this.className = 'input-wrong';
        feedback.textContent = "Try again!";
        feedback.style.opacity = 1;
      }
    }
  };
}

// Initialize the gallery display
displayImages();
