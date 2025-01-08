/* common.js */

/*
 * 언어 설정 로직:
 * 1) localStorage에 언어(lang)가 있으면 그 값 사용
 * 2) 없으면, navigator.language가 'ko'로 시작하면 'ko', 아니면 'en'
 * 3) 이후, changeLanguage(lang)로 반영
 */

function changeLanguage(lang) {
  localStorage.setItem('qiscaLanguage', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang-ko], [data-lang-en]").forEach(el => {
    el.style.display = el.hasAttribute(`data-lang-${lang}`) ? "block" : "none";
  });
}

function initLanguage() {
  // localStorage에 저장된 값 있으면 우선
  const storedLang = localStorage.getItem('qiscaLanguage');
  if (storedLang) {
    changeLanguage(storedLang);
    return;
  }

  // localStorage 없으면 브라우저 언어 감지
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang && userLang.toLowerCase().startsWith('ko')) {
    changeLanguage('ko');
  } else {
    changeLanguage('en');
  }
}
