document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const inquiryProduct = urlParams.get('inquiry');

    if (inquiryProduct) {
        const subjectSelect = document.getElementById('contact-subject');
        const messageText = document.getElementById('contact-message');

        if (subjectSelect) {
            // Set subject to Product Sales
            subjectSelect.value = 'Product Sales';
        }

        if (messageText) {
            messageText.value = `I am interested in ordering the ${decodeURIComponent(inquiryProduct)}. Please provide a quote and availability.`;
            // Optional: scroll to the form
            messageText.closest('form').scrollIntoView({ behavior: 'smooth' });
        }
    }
});
