import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: true });

window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.memo-grid');
  if (!grid || !window.Masonry) return;

  const msnry = new Masonry(grid, {
    itemSelector: '.memo',
    columnWidth: 400,
    gutter: 20,
    fitWidth: true
  });

  // Step 1: Mermaid는 기본적으로 자동 렌더링됨 → 살짝 기다림
  setTimeout(() => {
    // Step 2: 수식 렌더링 후 레이아웃 조정
    if (window.MathJax) {
      MathJax.Hub.Queue([
        "Typeset", MathJax.Hub,
        () => {
          msnry.layout();  // 최종 정렬
        }
      ]);
    } else {
      // 수식이 없거나 MathJax 미사용 시 바로 재정렬
      msnry.layout();
    }
  }, 100); // Mermaid 렌더링 약간 기다림


  document.querySelectorAll('.math-scroll').forEach(el => {
    el.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
  
      // 클래스 토글로 스크롤바 표시
      el.classList.add('is-scrolling');
  
      // 일정 시간 지나면 다시 숨김
      clearTimeout(el._scrollTimer);
      el._scrollTimer = setTimeout(() => {
        el.classList.remove('is-scrolling');
      }, 800);
    }, { passive: false });
  });
});
