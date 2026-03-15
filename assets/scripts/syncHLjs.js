window.addEventListener('load', function () {
  syncHljsTheme();
});

// Swap highlight.js stylesheet to match current data-theme
function syncHljsTheme() {
  const dark = document.getElementById('hljs-dark');
  const light = document.getElementById('hljs-light');
  if (!dark || !light) return; // page has no code blocks

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  dark.disabled = isLight;
  light.disabled = !isLight;
}

// Expose so theme toggle buttons can call it after switching theme
window.syncHljsTheme = syncHljsTheme;
