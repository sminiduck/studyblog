import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

// 하이라이트 전체 적용
hljs.highlightAll();

// MathJax 렌더링 요청 (전체 문서)
MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

mermaid.initialize({
  startOnLoad: true,
  theme: "default", // 또는 'dark', 'forest', 'neutral'
});
