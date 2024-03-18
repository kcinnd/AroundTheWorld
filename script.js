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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
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

  imageInput.style.boxShadow = '0 0 15px #0ff';

  imageInput.className = ''; // Reset class
  imageInput.oninput = () => feedback.style.opacity = 0; 

  const closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    modal.style.display = "none";
  };
  
  imageInput.onkeypress = function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
  
      const isCorrect = this.value.trim().toLowerCase() === image.name.toLowerCase();
  
      if (isCorrect) {
        // Apply green glow for correct answers
        this.style.boxShadow = '0 0 15px #0f0';
        feedback.textContent = "Nice job!";
      } else {
        // Apply red glow for incorrect answers
        this.style.boxShadow = '0 0 15px #f00';
        feedback.textContent = "Try again!";
      }
  
      feedback.style.opacity = 1; // Make the feedback message visible
    }
  };
  
  imageInput.oninput = function() {
    // Reset the glow to the initial blue glow when the user starts typing again
    this.style.boxShadow = '0 0 15px #0ff';
    feedback.style.opacity = 0; // Optionally hide the feedback message
  };
}; // This closing brace ends the openModal function

// Your existing script...

displayImages();

// Event listener for the Instructions button
document.getElementById('instructions-btn').addEventListener('click', function() {
    document.getElementById('instructions-modal').style.display = "block";
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    var modal = event.target.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
});

const finalInput = document.getElementById('final-input');
const submitFinalBtn = document.getElementById('submit-final');

submitFinalBtn.addEventListener('click', function() {
    const isCorrect = finalInput.value.trim().toLowerCase() === "explore the world";
    if (isCorrect) {
        // Redirect to the "exploretheworld.html" page upon correct input
        window.location.href = 'exploretheworld.html';
    } else {
        finalInput.className = 'final-input-wrong'; // Apply red glow for incorrect answers
        // Optionally clear the input field or display feedback within the modal
    }
});
