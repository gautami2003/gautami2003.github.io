/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

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
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.work__item');
  const projectCards = document.querySelectorAll('.work__card');

  // Add click event listeners to each filter button
  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

