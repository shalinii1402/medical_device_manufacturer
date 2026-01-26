document.addEventListener('DOMContentLoaded', () => {
    // 1. Filter Logic
    const filterTabs = document.querySelectorAll('.filter-tabs .tab');
    const productCards = document.querySelectorAll('.card-grid .card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || category === cardCategory) {
                    card.style.display = '';
                    setTimeout(() => card.classList.add('active'), 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. Order Button Logic
    const orderButtons = document.querySelectorAll('.btn-order');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardBody = e.target.closest('.card-body');
            const productName = cardBody.querySelector('h3').innerText;
            // Redirect to Contact page with pre-filled subject/message via query param
            window.location.href = `contact.html?inquiry=${encodeURIComponent(productName)}`;
        });
    });
});
