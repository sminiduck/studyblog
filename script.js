import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('.memo-grid');
  if (grid && window.Masonry) {
    new window.Masonry(grid, {
      itemSelector: '.container',
      columnWidth: 520,
      gutter: 20,
      fitWidth: false
    });
  } else {
    console.warn("Masonry.js or .memo-grid not loaded.");
  }
});

// 하이라이트 전체 적용
hljs.highlightAll();

// // MathJax 렌더링 요청 (전체 문서)
// MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

mermaid.initialize({
  startOnLoad: true,
  theme: "default", // 또는 'dark', 'forest', 'neutral'
});

MathJax.Hub.Queue(["Typeset", MathJax.Hub, () => {
  if (window.msnry) window.msnry.layout();
}]);

