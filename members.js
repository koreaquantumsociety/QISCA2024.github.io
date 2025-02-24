document.addEventListener('DOMContentLoaded', function() {
  const members = [
    {
      no: 1,
      name_ko: "이성빈",
      name_en: "SungBin Lee",
      position_ko: "QISCA 회장",
      position_en: "QISCA President",
      affiliation_ko: "서울대학교 물리학과 4학년",
      affiliation_en: "Seoul National University, Senior, Physics",
      intro_ko: "이성빈 학생은 2024년 국내 학부 양자 컴퓨팅 학회 연합인 QISCA(양자정보과학동아리연합회)를 창립했습니다. 그는 텐서 네트워크와 같은 고성능 고전 알고리즘을 활용해 고도로 얽힌 양자 회로를 시뮬레이션함으로써 고전 컴퓨터와 양자 컴퓨터의 경계를 탐구하는 연구를 하고 있습니다. 그는 밀도 행렬 재규범화 그룹, 시간 의존적 변동 원리, 제어 결합 확장, 예상 얽힘 쌍 상태 등 응집 물질 이론 연구에 사용되는 잘 개발된 수치 도구와 클리포드 회로 및 안정화 방법을 결합하여 양자 컴퓨터와 양자 다체 현상을 모두 시뮬레이션할 수 있는 궁극의 최적 고전 알고리즘을 구축할 계획입니다.",
      intro_en: "SungBin Lee founded QISCA (Quantum Information Science Club Association), an association of undergraduate quantum computing societies in South Korea, in 2024. He is involved in investigating the boundary between classical and quantum computers by utilizing high-performance classical algorithms like tensor networks to simulate highly entangled quantum circuits. He planned to combine well-developed numerical tools used in condensed matter theory research like density matrix renormalization group, time-dependent variational principle, controlled-bond expansion, and projected entangled pair states with Clifford circuits and stabilizer methods to build an ultimate optimal classical algorithm that can simulate both quantum computers and quantum many-body phenomena.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/1. 이성빈 (QISCA 회장).jpg"
    },
    {
      no: 2,
      name_ko: "박성근",
      name_en: "Seonggeun Park",
      position_ko: "QISCA 부회장",
      position_en: "QISCA Vice President",
      affiliation_ko: "고려대학교 전기전자공학부 4학년",
      affiliation_en: "Korea University, Senior, Electrical Engineering",
      intro_ko: "박성근은 고려대학교 전기공학과 졸업생으로 QISCA의 부회장입니다. 플러그 앤 플레이 양자 키 분배 BB84 시스템을 구현한 경험이 있습니다. 또한 양자 알고리즘과 양자 복잡성 이론에 관심이 많습니다. 여가 시간에는 헬스클럽에 가는 것을 즐깁니다.",
      intro_en: "Seonggeun Park is a senior in Electrical Engineering at Korea University and the vice president of QISCA. He has experience implementing a plug-and-play Quantum Key Distribution BB84 system. Additionally, he is interested in quantum algorithms and quantum complexity theory. In his free time, he enjoys going to the gym.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/2. 박성근 (QISCA 부회장).jpg"
    },
    {
      no: 3,
      name_ko: "이정우",
      name_en: "Jeongwoo Lee",
      position_ko: "저널 클럽 담당",
      position_en: "Journal Club Manager",
      affiliation_ko: "KAIST 물리학과·화학과 3학년",
      affiliation_en: "KAIST, Junior, Physics & Chemistry",
      intro_ko: "이정우는 카이스트(한국과학기술원) 동아리인 EQS의 회장이며, 화학과를 복수 전공하는 물리학과 3학년 학생입니다. 양자 컴퓨팅의 활용도를 양자 화학, 생물학, 신경학 등 다른 분야로 확장하는 데 관심을 두고 연구하고 있습니다. 다양한 전공의 수업을 들으며 교수와 대학원생들을 통해 폭넓은 네트워크를 형성하고 있습니다. 양자 기술과 관련된 주요 관심 분야는 중성 원자 기반 양자 컴퓨팅과 양자 계측학입니다.",
      intro_en: "Jeongwoo Lee is the President of Entangled Qubits Society, a KAIST(Korea Advanced Institute of Science and Technology) based club, and a junior in Physics department double majoring with Chemistry. His research interest is on expanding Quantum Computing's utility to other fields, such as Quantum Chemistry, Biology, Neurology, etc. He is attending to classes of diverse majors, and connecting his networks via Professors and Graduate Students widely. Major interest regarding to Quantum Technology is Neutral Atom based Quantum Computing and Quantum Metrology.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/3. 이정우 (EQS 대표).png"
    },
    {
      no: 4,
      name_ko: "이종연",
      name_en: "JongYeon Lee",
      position_ko: "뉴스레터 담당",
      position_en: "Newsletter Manager",
      affiliation_ko: "KAIST 물리학과 2학년",
      affiliation_en: "KAIST, Sophomore, Physics",
      intro_ko: "이종연 학생은 2024년 국내 학부 양자컴퓨팅 학회 연합인 QISCA(양자정보과학동아리연합회)에 참여했습니다. 그는 양자 컴퓨터와 큰 수의 소인수분해를 통해 응용하는 쇼의 알고리즘과 같은 양자 알고리즘에 대해 연구하고 있습니다. 주로 QUICA 산하 카이스트 동아리인 EQS에서 양자 뉴스레터 집필에 참여했습니다. 그리고 2025년에는 EQS의 부회장으로 활동할 예정입니다.",
      intro_en: "JongYeon Lee participated QISCA (Quantum Information Science Club Association), an association of undergraduate quantum computing societies in South Korea, in 2024. He is involved in quantum computers and Quantum algorithms like Shor's algorithm to apply through prime factorization of large numbers. He mainly participated to write quantum newsletter within EQS, a club at KAIST under QUICA. And will be serving as the Vice President of EQS in 2025.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/4. 이종연 (EQS 부대표).jpg"
    },
    {
      no: 5,
      name_ko: "송주현",
      name_en: "Juhyun Song",
      position_ko: "웹 UI 담당",
      position_en: "Web UI Manager",
      affiliation_ko: "고려대학교 전기전자공학부 4학년",
      affiliation_en: "Korea University, Senior, Electrical Engineering",
      intro_ko: "송주현은 고려대학교 전기공학과 4학년으로 QUICK(고려대학교 양자정보동아리)의 회장입니다. 특히 양자 통신에 관심이 많아 QKD BB84와 DPS 프로토콜 시스템을 개발한 경험이 있습니다. 또한 유무선 양자 통신에 대한 연구를 수행했으며 해당 분야 인턴십 경험도 보유하고 있습니다.",
      intro_en: "Juhyun Song is the President of QUICK (Quantum Information Club at Korea University) and a senior majoring in Electrical Engineering at Korea University. She is especially interested in Quantum Communication and has experience developing QKD BB84 and DPS protocol systems. She has also conducted research in wired and wireless quantum communication and holds internship experience in the field.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/5. 송주현 (QUICK 대표).jpg"
    },
    {
      no: 6,
      name_ko: "유성흠",
      name_en: "Sungheum Yoo",
      position_ko: "학술팀",
      position_en: "Academic Team",
      affiliation_ko: "고려대학교 물리학과 3학년",
      affiliation_en: "Korea University, Junior, Physics",
      intro_ko: "유성흠은 고려대학교 양자정보동아리 QUICK의 부회장이며, QISCA의 학술이사로도 활동하고 있습니다.",
      intro_en: "Sungheum Yoo is vice president of QUICK(QUantum Information Club in Korea university), also working as academic board member of QISCA.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/6. 유성흠 (QUICK 부대표).jpg"
    },
    {
      no: 7,
      name_ko: "배윤진",
      name_en: "Yoonjin Bae",
      position_ko: "학술팀",
      position_en: "Academic Team",
      affiliation_ko: "서울대학교 물리학과 4학년",
      affiliation_en: "Seoul National University, Senior, Physics",
      intro_ko: "배윤진은 서울대학교 물리학과 4학년이며, 서울대학교 양자 연구팀(SQRT)의 회장을 맡고 있습니다. 현재 서울대학교 양자소자 연구실에서 큐비트 상태 복원을 위한 페츠 복구 지도를 연구하고 있습니다. 여가 시간에는 베이스 기타 연주와 그림 그리기를 즐겨 합니다.",
      intro_en: "Yoonjin Bae is a senior in Physics at SNU and a president of SQRT (SNU Quantum Research Team). She is currently researching the Petz recovery map for restoring qubit states in SNU quantum device lab. In her free time, she enjoys playing the bass guitar and drawing.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/7. 배윤진 (SQRT 대표).png"
    },
    {
      no: 8,
      name_ko: "엄동현",
      name_en: "Donghyun Um",
      position_ko: "국제협력 담당",
      position_en: "International Relations",
      affiliation_ko: "서울대학교 물리학과 4학년",
      affiliation_en: "Seoul National University, Senior, Physics",
      intro_ko: "엄동현은 SQRT의 학부 부회장이자 서울대학교에서 물리학을 전공하고 있습니다. 현재 양자 정보, 양자 컴퓨팅, 응집 물질 물리학 등을 연구하고 있습니다. 이전에는 2차원 물질의 색 중심 결함 및 양자 회로 벤치마킹에 관한 연구를 수행한 바 있습니다. 또한 서울대학교 자연과학대학 학생 영예 학회인 GLEAP의 정회원으로 활동하며 과학에 대한 열정을 나누는 것을 즐깁니다.",
      intro_en: "Daniel D. Ohm is the Undergraduate Vice-president of SQRT and a senior studying physics at Seoul National University. His current research interests include quantum information, quantum computing, and condensed matter physics. He has previously worked on research in color center defects in two-dimensional materials and quantum circuit benchmarking. He's also an active member of GLEAP, SNU's College of Natural Science's Student Honour Society, and enjoys sharing his passion for science.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/8. 엄동현 (SQRT 부대표).jpg"
    },
    {
      no: 9,
      name_ko: "임형민",
      name_en: "Hyeongmin Lim",
      position_ko: "학술팀",
      position_en: "Academic Team",
      affiliation_ko: "연세대학교 전기전자공학부 4학년",
      affiliation_en: "Yonsei University, Senior, Electrical Engineering",
      intro_ko: "안녕하세요, 저는 연세대학교 퀀텀인포매틱스(QIYA) 회장 임형민입니다. 저는 현재 연세대학교에서 전기전자공학을 전공하고 물리학을 부전공하고 있습니다. 저의 주요 관심 분야는 양자 컴퓨터 하드웨어와 양자 오류 수정이며, 특히 초전도 트랜지스터 기반 양자 컴퓨터에 중점을 두고 있습니다. 그 외에도 양자 컴퓨팅과 관련된 연구에도 폭넓은 관심을 가지고 있습니다. 함께 일할 수 있기를 기대합니다.",
      intro_en: "Hello, my name is Hyeongmin Lim, and I am the President of Quantum Informatics at Yonsei Academy (QIYA). I am currently majoring in Electrical and Electronic Engineering and minoring in Physics at Yonsei University. My primary areas of interest are quantum computer hardware and Quantum Error Correction, with a particular focus on superconducting transmon-based quantum computers. In addition, I have a broad interest in research related to quantum computing. I look forward to working together.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/9. 임형민 (QIYA 대표).jpg"
    },
    {
      no: 10,
      name_ko: "최석원",
      name_en: "Seokwon Choi",
      position_ko: "국내협력 담당",
      position_en: "Domestic Relations",
      affiliation_ko: "연세대학교 물리학과 3학년",
      affiliation_en: "Yonsei University, Junior, Physics",
      intro_ko: "안녕하세요, 저는 양자 컴퓨팅에 관심이 많은 연세대학교 물리학과에 재학 중인 최석원이라고 합니다. 현재 저는 우리 대학교의 양자 학술 동아리인 연세 아카데미(QIYA)에서 양자 정보학 부회장으로 활동하고 있습니다. 저는 양자 정보 과학의 이론적 토대와 계산적 응용을 탐구하는 데 중점을 두고 있습니다. 또한 양자 알고리즘의 발전에 기여하고 양자 원리가 어떻게 고전적 한계를 넘어 복잡한 계산 문제를 해결할 수 있는지 이해하는 것을 목표로 합니다.",
      intro_en: "Hello, my name is Seokwon Choi, and I am a physics student at Yonsei University with a deep interest in quantum computing. Currently, I serve as the Vice President of Quantum Informatics at Yonsei Academy (QIYA), our university's quantum academic club. My primary focus is on exploring the theoretical foundations and computational applications of quantum information science. Also, I aim to contribute to advancements in quantum algorithms and understand how quantum principles can solve complex computational problems beyond classical limitations.",
      image: "https://koreaquantumsociety.github.io/QISCA2024.github.io/images/임원 소개/10. 최석원 (QIYA 부대표).jpg"
    }
  ];

  const membersContainer = document.getElementById('members-container');
  members.forEach(member => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'member-slide');
    slide.innerHTML = `
      <img src="${member.image}" alt="${member.name_ko}">
      <div class="member-name" data-lang-ko>${member.name_ko}</div>
      <div class="member-name" data-lang-en style="display:none;">${member.name_en}</div>
      <div class="member-position" data-lang-ko>${member.position_ko}</div>
      <div class="member-position" data-lang-en style="display:none;">${member.position_en}</div>
      <div class="member-affiliation" data-lang-ko>${member.affiliation_ko}</div>
      <div class="member-affiliation" data-lang-en style="display:none;">${member.affiliation_en}</div>
      <div class="member-intro" data-lang-ko>${member.intro_ko}</div>
      <div class="member-intro" data-lang-en style="display:none;">${member.intro_en}</div>
    `;
    membersContainer.appendChild(slide);
  });

  new Swiper('.memberSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.memberSwiper .swiper-button-next',
      prevEl: '.memberSwiper .swiper-button-prev',
    },
  });
});
