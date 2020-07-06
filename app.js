const modal = document.getElementById('modal');
const shareBtn = document.getElementById('shareIcon');

shareBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
    shareBtn.classList.toggle('shareClicked');
})