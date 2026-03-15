// ─── Tag Colors ──────────────────────────────────────────────────────────────
// Single source of truth for tag colors across all pages.
// To add a new tag: add an entry here and it'll work everywhere automatically.
//
// Each entry is [darkColor, lightColor].
// Dark mode uses the color as-is.
// Light mode uses a lighter tint automatically, or you can specify one manually.
//
// Categories:
//   Languages   — blue-slate family
//   APIs/Tech   — teal family
//   Engines     — warm tones
//   Context     — muted/neutral (School, Group, etc.)
// ─────────────────────────────────────────────────────────────────────────────

const TAG_COLORS = {
  // ── Languages ──
  'C':      '#4a6080',
  'C++':    '#3d6b8f',
  'C#':     '#4a7a9b',
  'Python': '#4a7c6f',

  // ── APIs & Graphics ──
  'Vulkan': '#2d7a6e',
  'DX11':   '#2d6e7a',
  'OpenGL': '#2d7a5a',
  'Raylib': '#3a6b5a',
  'CMake':  '#4a6b7a',
  'TKinter':'#4a6b7a',

  // ── Engines ──
  'UE5':    '#6b4a2d',
  'Unity':  '#3d5a6b',

  // ── Context ──
  'School': '#3a3a4a',
  'Group':  '#3a3a4a',
  'GameJam':'#5a3a5a',
  'GPP':    '#3a4a3a',
};

// Derive a lighter tint for light mode by blending the color toward white
function lightenColor(hex, amount = 0.35) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.round(r + (255 - r) * amount);
  const lg = Math.round(g + (255 - g) * amount);
  const lb = Math.round(b + (255 - b) * amount);
  return `rgb(${lr},${lg},${lb})`;
}

// Injects a <style> block with CSS attribute selectors for each tag.
// This means tag colors respond to theme changes via CSS cascade,
// not inline styles — so dark/light mode switching works correctly.
function applyTagColors() {
  let css = '';

  for (const [tag, color] of Object.entries(TAG_COLORS)) {
    const lightColor = lightenColor(color, 0.3);
    // Escape special chars in attribute selector (e.g. C++)
    const escaped = tag.replace(/[^\w\s-]/g, '\\$&');

    css += `
      .tag[data-tag="${escaped}"] {
        background: ${color};
        border-color: ${color};
        color: #d8d8d8;
      }
      [data-theme="light"] .tag[data-tag="${escaped}"] {
        background: ${lightColor};
        border-color: ${lightColor};
        color: #1a1a1a;
      }
    `;
  }

  const style = document.createElement('style');
  style.id = 'tag-colors';
  style.textContent = css;
  document.head.appendChild(style);
}
