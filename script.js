const apps = [
  { iconId: 'spotifyIcon', appId: 'spotifyApp' },
  { iconId: 'whatsappIcon', appId: 'whatsappApp' },
  { iconId: 'instagramIcon', appId: 'instagramApp' },
  { iconId: 'youtubeIcon', appId: 'youtubeApp' },
  { iconId: 'telegramIcon', appId: 'telegramApp' }
];

const homeScreen = document.getElementById('homeScreen');

apps.forEach(({ iconId, appId }) => {
  const icon = document.getElementById(iconId);
  const app = document.getElementById(appId);

  icon.addEventListener('click', () => {
    app.classList.add('show');
    homeScreen.style.opacity = '0';
  });
});

function goHome() {
  document.querySelectorAll('.app-screen').forEach(app => {
    app.classList.remove('show');
  });
  homeScreen.style.opacity = '1';
}
