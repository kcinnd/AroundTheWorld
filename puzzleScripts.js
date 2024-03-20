document.addEventListener('DOMContentLoaded', () => {
    const successModal = document.getElementById('success-modal');
    const closeSuccessModalBtn = successModal.querySelector('.close');

    // Function to show the success modal
    const showSuccessModal = () => {
        successModal.style.display = 'flex';
    };

    // Function to hide the success modal
    const hideSuccessModal = () => {
        successModal.style.display = 'none';
    };

    // Close button event listener
    closeSuccessModalBtn.addEventListener('click', hideSuccessModal);

    // Monitor changes to the counter
    const counterDisplay = document.querySelector('.number-counter');
    const observer = new MutationObserver(() => {
        const counterValue = parseFloat(counterDisplay.textContent);
        if (counterValue === 135.69) {
            showSuccessModal();
        }
    });

    // Configuration for the observer (which mutations to observe)
    const config = { characterData: true, subtree: true };

    // Start observing the target node for configured mutations
    observer.observe(counterDisplay, config);
});
