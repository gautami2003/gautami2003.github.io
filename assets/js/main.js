/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
// Select all modals, buttons to open modals, and buttons to close modals
const modalViews = document.querySelectorAll('.services__modal'); // All modals
const modalBtns = document.querySelectorAll('.services__bottom'); // Buttons to open modals
const modalClose = document.querySelectorAll('.services__modal-close'); // Buttons to close modals

// Function to open a specific modal
let modal = function(modalIndex) {
    modalViews[modalIndex].classList.add('active-modal'); // Correct class name syntax
};

// Add event listeners to open modals
modalBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        modal(index); // Open the modal corresponding to the clicked button
    });
});

// Add event listeners to close modals
modalClose.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal'); // Remove the active class to close modals
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

function showModal(title, imgPath) {
    const modal = document.getElementById("certificateModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalText = document.getElementById("modalText");

    modal.style.display = "flex";
    modalTitle.innerText = title;

    if (imgPath) {
        modalImage.style.display = "block";
        modalImage.src = imgPath;
        modalText.style.display = "none";
    } else {
        modalImage.style.display = "none";
        modalText.style.display = "block";
        modalText.innerText = "Certificate image not available.";
    }
}

function closeModal() {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "none";
    modalImage.src = "";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("certificateModal");
    if (event.target === modal) {
        closeModal();
    }
};
/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/