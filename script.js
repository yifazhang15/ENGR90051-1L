// script.js
function toggleAccordion(element) {
    const parent = element.parentElement;
    const isActive = parent.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        parent.classList.add('active');
    }
}
