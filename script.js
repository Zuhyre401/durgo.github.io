const aboutText = document.getElementById('about-text');
const readMoreBtn = document.getElementById('read-more-btn');

aboutText.classList.add('collapsed');

readMoreBtn.addEventListener('click', () => {
    aboutText.classList.toggle('collapsed');
    readMoreBtn.textContent = aboutText.classList.contains('collapsed') ? 'Read More' : 'Read Less';
});