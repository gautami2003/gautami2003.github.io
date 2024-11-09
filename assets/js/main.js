/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const modalViews = document.querySelectorAll('.services__modal');
    const modalBtns = document.querySelectorAll('.services__bottom');
    const modalClose = document.querySelectorAll('.services__modal-close');

    // Function to open the modal
    const openModal = function(modalIndex) {
        modalViews[modalIndex].classList.add('active-modal');
    };

    // Add click event listeners to "See more" buttons to open the corresponding modal
    modalBtns.forEach((btn, i) => {
        btn.addEventListener('click', () => openModal(i));
    });

    // Add click event listeners to close buttons to close the modal
    modalClose.forEach((closeBtn, i) => {
        closeBtn.addEventListener('click', () => {
            modalViews[i].classList.remove('active-modal');
        });
    });

    // Optional: Close the modal when clicking outside the modal content
    modalViews.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active-modal');
            }
        });
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.work__item');
    const projectCards = document.querySelectorAll('.work__card');

    // Add click event listeners to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and add it to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active-work'));
            this.classList.add('active-work');

            // Get the filter category from the clicked button
            const filterCategory = this.getAttribute('data-filter');

            // Show or hide project cards based on the filter
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterCategory === 'all' || cardCategory === filterCategory) {
                    card.style.display = 'block'; // Show matching cards
                } else {
                    card.style.display = 'none'; // Hide non-matching cards
                }
            });
        });
    });
});


/* Link active work */
// JavaScript to detect when items enter the viewport and animate them
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger animation when 50% of the item is in view
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    observer.observe(item);
});

/*=============== SWIPER TESTIMONIAL ===============*/
function toggleCertificates() {
    const scrollContainer = document.getElementById("scrollContainer");
    scrollContainer.style.display = scrollContainer.style.display === "none" ? "block" : "none";
}

// Continuous scroll logic
document.addEventListener("DOMContentLoaded", () => {
    const scrollContent = document.querySelector(".scroll-content");

    function startScrolling() {
        scrollContent.style.animation = "scroll-left 20s linear infinite";
    }

    scrollContent.addEventListener("animationiteration", () => {
        // Duplicate the certificates for a seamless effect
        const clone = scrollContent.cloneNode(true);
        scrollContent.parentNode.appendChild(clone);
        scrollContent.remove();
    });

    startScrolling();
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/