// Ambil elemen tombol dan modal
const startButton = document.querySelector('.start-button');
const registerModal = document.getElementById('modal-registrasi');
const loginModal = document.getElementById('modal-login');
const closeButtons = document.querySelectorAll('.close-button'); // Semua tombol close

// Tombol untuk berpindah modal
const toRegisterLink = document.getElementById('to-register'); // Link "Daftar" di modal login
const toLoginLink = document.querySelector('#modal-registrasi a'); // Link "Login" di modal registrasi

// Fungsi untuk menampilkan modal dengan transisi
function showModal(modal) {
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

// Fungsi untuk menyembunyikan modal dengan transisi
function hideModal(modal) {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // Sesuaikan durasi dengan CSS transition
}

// Ketika tombol Start diklik, tampilkan modal login
startButton.addEventListener('click', () => {
  showModal(loginModal);
});

// Ketika tombol "Daftar" di modal login diklik
toRegisterLink.addEventListener('click', (event) => {
  event.preventDefault(); // Mencegah reload halaman
  hideModal(loginModal); // Sembunyikan modal login
  setTimeout(() => {
    showModal(registerModal); // Tampilkan modal registrasi
  }, 300);
});

// Ketika tombol "Login" di modal registrasi diklik
toLoginLink.addEventListener('click', (event) => {
  event.preventDefault(); // Mencegah reload halaman
  hideModal(registerModal); // Sembunyikan modal registrasi
  setTimeout(() => {
    showModal(loginModal); // Tampilkan modal login
  }, 300);
});

// Ketika tombol close pada modal diklik
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal'); // Cari modal terdekat
    hideModal(modal);
  });
});

// Menutup modal ketika area di luar modal diklik
window.addEventListener('click', (event) => {
  if (event.target === registerModal) {
    hideModal(registerModal);
  } else if (event.target === loginModal) {
    hideModal(loginModal);
  }
});
