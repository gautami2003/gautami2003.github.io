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


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

