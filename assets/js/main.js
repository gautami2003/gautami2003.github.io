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

function showModal(title, text, imgSrc, logoSrc) {
    const modalImage = document.getElementById("modalImage");
    const modalLogo = document.getElementById("modalLogo");

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    if (imgSrc) {
        modalImage.src = imgSrc;
        modalImage.style.display = "block";
    } else {
        modalImage.style.display = "none"; // Hide the image if no source is provided
    }

    if (logoSrc) {
        modalLogo.src = logoSrc;
        modalLogo.style.display = "block";
    } else {
        modalLogo.style.display = "none"; // Hide the logo if no source is provided
    }

    document.getElementById("certificateModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}


/*=============== SWIPER TESTIMONIAL ===============*/

const testimonialsContainer = document.getElementById('testimonials');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const addTestimonialBtn = document.getElementById('addTestimonialBtn');
const popupForm = document.getElementById('popupForm');
const overlay = document.getElementById('overlay');
const submitTestimonialBtn = document.getElementById('submitTestimonial');

let testimonials = JSON.parse(localStorage.getItem('testimonials')) || []; // Load saved testimonials

function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `
            <img src="${testimonial.picture}" alt="Profile Picture">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.text}</p>
        `;
        testimonialsContainer.appendChild(div);
    });
    updateControls();
}

function updateControls() {
    prevBtn.disabled = testimonialsContainer.scrollLeft === 0;
    nextBtn.disabled = testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth >= testimonialsContainer.scrollWidth;
}

addTestimonialBtn.addEventListener('click', () => {
    popupForm.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    popupForm.classList.remove('active');
    overlay.classList.remove('active');
});

submitTestimonialBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('testimonialText').value.trim();

    if (name && text) {
        const newTestimonial = {
            name,
            text,
            picture: `https://ui-avatars.com/api/?name=${name}&background=random` // Placeholder for profile picture
        };
        testimonials.push(newTestimonial);
        saveTestimonials();
        renderTestimonials();
        popupForm.classList.remove('active');
        overlay.classList.remove('active');
        document.getElementById('name').value = '';
        document.getElementById('testimonialText').value = '';
    }
});

prevBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    testimonialsContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

testimonialsContainer.addEventListener('scroll', updateControls);

// Save testimonials to localStorage
function saveTestimonials() {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
}

// Initial rendering of testimonials
renderTestimonials();
const closePopupForm = document.getElementById('closePopupForm'); // Close button reference

closePopupForm.addEventListener('click', () => {
    popupForm.classList.remove('active');
    overlay.classList.remove('active');
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/