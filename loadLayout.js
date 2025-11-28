async function loadFragment(placeholderSelector, url) {
  const placeholder = document.querySelector(placeholderSelector);
  if (!placeholder) {
    console.warn('Placeholder not found:', placeholderSelector);
    return;
  }

  try {
    const resp = await fetch(url, {cache: "no-store"});
    if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
    const html = await resp.text();
    placeholder.innerHTML = html;
  } catch (err) {
    console.error(`Error loading ${url}:`, err);
    // show a tiny fallback so layout isn't completely broken
    placeholder.innerHTML = `<!-- failed to load ${url} -->`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadFragment('#header-placeholder', '/header.html');
  loadFragment('#footer-placeholder', '/footer.html');

  // small extra: update year in footer if present
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
