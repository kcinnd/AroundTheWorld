document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.querySelector('.number-counter');
    let counterValue = 0;

    const updateCounter = (value, add) => {
        counterValue = add ? counterValue + value : counterValue - value;
        counterDisplay.textContent = counterValue.toFixed(2).padStart(6, '0');
        checkCounterValue();
    };

    const checkCounterValue = () => {
        if (counterValue.toFixed(2) === '135.69') {
            showSuccessModal();
        }
    };

    const showSuccessModal = () => {
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'flex';
    };

    // Add event listeners for images and buttons as needed...
});
