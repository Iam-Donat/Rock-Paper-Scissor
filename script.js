// === Get HTLM Elements === //
const overlay = document.querySelector('.overlay');

// === Modal How to PLay 
const helpBtn = document.querySelector('.help-btn');

const helpModal = document.querySelector('.help-modal');
const closeModal = document.querySelector('.close-btn');

helpBtn.addEventListener('click', () => {
    helpModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

closeModal.addEventListener('click', () => {

    helpModal.classList.add('hidden');
    overlay.classList.add('hidden');
})
// ====== Copyright ===== //
let year = document.querySelector(".year");

// console.log(year);

const getCurrentYear = new Date().getFullYear();

year.textContent = getCurrentYear;