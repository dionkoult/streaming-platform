const banner = document.querySelector('.banner');
const okButton = document.querySelector('.ok');
const pageContent = document.querySelector('.page-content');

function hideBanner() {
  banner.style.display = 'none';
  pageContent.classList.remove('hidden');
  sessionStorage.setItem('bannerClosed', 'true');
}

if (sessionStorage.getItem('bannerClosed') === 'true') {
  banner.style.display = 'none';
} else {
  pageContent.classList.add('hidden');
}

okButton.addEventListener('click', hideBanner);