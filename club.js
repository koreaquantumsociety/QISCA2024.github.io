document.addEventListener('DOMContentLoaded', function() {
  const clubs = [
    {
      name: "SQRT",
      univ: "서울대학교",
      year_ko: "설립: 2022년 9월",
      year_en: "Established: September 2022",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/SQRT.png",
      website: "https://sites.google.com/view/sqrt-quantum",
      email: "mailto:snuquantums@gmail.com",
      desc_ko: "SQRT는 서울대학교 양자 정보 동아리로, 매주 스터디와 연구 프로젝트를 통해 양자 컴퓨팅 이론과 실습을 병행합니다. 물리, 컴퓨터 공학, 수학 등 다양한 전공의 학생들이 모여 양자 알고리즘, 양자 소프트웨어 개발, 양자 물리 실험 등을 함께 공부하고 있습니다.",
      desc_en: "SQRT is a quantum information club at Seoul National University, holding regular study sessions and research projects covering quantum computing theory and practice. Students from diverse majors such as physics, computer engineering, and mathematic collaborate on quantum algorithms, quantum software development, and experimental quantum physics."
    },
    {
      name: "EQS",
      univ: "KAIST",
      year_ko: "설립: 2022년 1월",
      year_en: "Established: January 2022",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/EQS.png",
      website: "https://sites.google.com/view/eqs-kaist",
      email: "mailto:eqskaist2022@gmail.com",
      desc_ko: "EQS(Entangled Qubits Society)는 KAIST 학생들이 만든 양자 동아리입니다. 양자 알고리즘 및 양자 암호, 양자 센싱 등에 관심이 있으며, 매주 세미나를 통해 최신 연구 흐름을 파악하고, 방학 중에는 심화 프로젝트를 진행합니다.",
      desc_en: "EQS (Entangled Qubits Society) is a quantum club formed by KAIST students. We focus on quantum algorithms, quantum cryptography, quantum sensing, hosting weekly seminars to explore the latest research and running in-depth projects during breaks."
    },
    {
      name: "QUICK",
      univ: "고려대학교",
      year_ko: "설립: 2023년 3월",
      year_en: "Established: March 2023",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/QUIK.png",
      website: "https://quick.oopy.io/",
      email: "mailto:kuquickofficial@gmail.com",
      desc_ko: "QUICK은 고려대학교에서 양자 암호와 양자 컴퓨팅 이론을 중점적으로 연구하며, 실습 기반 프로젝트를 통해 양자 프로그래밍과 시뮬레이션을 익힙니다. 주기적인 학술 세미나와 실습 워크숍을 운영하고 있습니다.",
      desc_en: "QUICK at Korea University primarily studies quantum cryptography and quantum computing theory. We also engage in practice-based projects to learn quantum programming and simulations. Our activities include regular academic seminars and hands-on workshops."
    },
    {
      name: "QIYA",
      univ: "연세대학교",
      year_ko: "설립: 2024년 9월",
      year_en: "Established: September 2024",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/QIYA.png",
      website: "https://qiya-yonsei.github.io/",
      email: "mailto:qiyayonsei@gmail.com",
      desc_ko: "QIYA는 연세대학교에서 양자 하드웨어, 양자 오류 보정, 양자 알고리즘을 함께 공부하고, 국제 학회, 해외 대학과의 교류를 통해 최신 연구 동향을 습득합니다. 주기적으로 스터디 그룹과 논문 리뷰 세션을 진행하고 있습니다.",
      desc_en: "QIYA at Yonsei University studies quantum hardware, quantum error correction, and quantum algorithms. We keep track of the latest research by collaborating with international conferences and universities. Our activities include regular study groups and paper review sessions"
    }
  ];

  const clubContainer = document.getElementById('club-container');
  clubs.forEach(club => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'club-slide');
    slide.innerHTML = `
      <img src="${club.image}" alt="${club.name}">
      <div class="club-name">${club.name}</div>
      <div class="club-univ">(${club.univ})</div>
      <div class="club-year" data-lang-ko>${club.year_ko}</div>
      <div class="club-year" data-lang-en style="display:none;">${club.year_en}</div>
      <div class="club-links">
        <a href="${club.website}" target="_blank">Website</a> | 
        <a href="${club.email}">Email</a>
      </div>
      <div class="club-desc" data-lang-ko>${club.desc_ko}</div>
      <div class="club-desc" data-lang-en style="display:none;">${club.desc_en}</div>
    `;
    clubContainer.appendChild(slide);
  });

  new Swiper('.clubSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.clubSwiper .swiper-button-next',
      prevEl: '.clubSwiper .swiper-button-prev',
    },
  });
});
