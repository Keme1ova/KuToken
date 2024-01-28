// header nav
function scrollHeader() {
      const header = document.getElementById('header');
      if (this.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
}
  
window.addEventListener('scroll', scrollHeader);

//cover change popup
const coverChangeBtn = document.getElementById('coverChangeBtn');
const coverPopup = document.getElementById('coverPopup');
const closeCoverPopupBtn = document.getElementById('closeCoverPopup');

coverChangeBtn.addEventListener('click', function() {
    coverPopup.classList.add('show');
});

closeCoverPopupBtn.addEventListener('click', function() {
    coverPopup.classList.remove('show');
});

// profile change popup
const profileChangeBtn = document.getElementById('profileChangeBtn');
const profilePopup = document.getElementById('profilePopup');
const closeProfilePopupBtn = document.getElementById('closeProfilePopup');

profileChangeBtn.addEventListener('click', function() {
    profilePopup.classList.add('show');
});

closeProfilePopupBtn.addEventListener('click', function() {
    profilePopup.classList.remove('show');
});

//input 
document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll('.input');
    
    inputFields.forEach((input) => {
        const label = input.nextElementSibling;

        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.classList.add('has-text');
            } else {
                input.classList.remove('has-text');
            }
        });

        input.addEventListener('focus', function () {
            label.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            label.classList.remove('focused');
        });
    });
});