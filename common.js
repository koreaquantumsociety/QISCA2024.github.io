/* common.js */

function changeLanguage(lang) {
  // 언어를 localStorage에 저장
  localStorage.setItem('qiscaLanguage', lang);

  // <html lang="xx"> 변경
  document.documentElement.lang = lang;

  // data-lang-ko / data-lang-en 속성에 따라 표시 제어
  document.querySelectorAll("[data-lang-ko], [data-lang-en]").forEach(el => {
    el.style.display = el.hasAttribute(`data-lang-${lang}`) ? "block" : "none";
  });
}

function initLanguage() {
  // 기존에 저장된 언어가 있으면 가져오고, 없으면 ko로 설정
  const savedLang = localStorage.getItem('qiscaLanguage') || 'ko';
  changeLanguage(savedLang);
}
