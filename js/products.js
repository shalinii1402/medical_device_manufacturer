document.addEventListener('DOMContentLoaded', () => {
    const filterTabs = document.querySelectorAll('.filter-tabs .tab');
    const productCards = document.querySelectorAll('.card-grid .card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // 2. Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.getAttribute('data-category');

            // 3. Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || category === cardCategory) {
                    card.style.display = '';
                    // Re-trigger animation if needed, or just let it be
                    setTimeout(() => card.classList.add('active'), 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
