const btnCloseModal = document.querySelector('close-modal');
let hidden = document.querySelectorAll('div.hidden');
const openModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('div.overlay');

const openModalFungsi = () => {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display === 'block';
  } // Menampilkan box
  setTimeout(() => {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.add('show');
    }
  }, 10);
};

const closeModalFungsi = () => {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display === 'none';
  } // Menampilkan box
  setTimeout(() => {
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.remove('show');
    }
  }, 10);
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openModalFungsi);
}

document.querySelector('.close-modal').addEventListener('click', closeModalFungsi);

document.querySelector('div.overlay').addEventListener('click', closeModalFungsi);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && hidden[0].classList.contains('show') && hidden[1].classList.contains('show')
  ) {
    closeModalFungsi();
  }
});
