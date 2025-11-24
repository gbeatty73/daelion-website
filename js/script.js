document.addEventListener('DOMContentLoaded', () => {
  const teamMembers = document.querySelectorAll('.team-member');
  const popup = document.getElementById('popup-overlay');
  const popupImg = popup.querySelector('.popup-image-container img');
  const popupTitle = popup.querySelector('.popup-text h3');
  const popupDesc = popup.querySelector('.popup-text p');
  const closeBtn = popup.querySelector('.close-btn');

  const teamData = [
    {
      name: 'Steve Karel',
      title: 'CEO, Co-founder',
      img: '../images/karel.jpg',
      desc: 'Mr. Karel is the CEO and Co-founder, bringing extensive experience in business leadership and strategy to advance translational innovation in cancer immunotherapy. He has held leadership roles across drug development, operations, and corporate strategy. Previously, he served as CFO, COO, and CBO of Biothera Pharmaceuticals, the original developer of Odeti, and most recently as CEO of Immuno Research Inc.'
    },
    {
      name: 'Gregory Beatty, MD PhD',
      title: 'Chair of Scientific Advisory Board, Co-founder',
      img: '../images/beatty.jpg',
      desc: 'Dr. Beatty chairs the Scientific Advisory Board and co-founded the company, bringing extensive expertise in cancer biology and immunotherapy. He is an accomplished academic physician-scientist leading translational cancer immunotherapy research at the University of Pennsylvania. His work has advanced early clinical trials of novel treatments, including CD40 agonists and CAR T cells.'
    }
  ];

  function openPopup(index) {
    const person = teamData[index];
    popupImg.src = person.img;
    popupImg.alt = `${person.name}, ${person.title}`;
    popupTitle.textContent = person.name;
    popupDesc.textContent = person.desc;
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
    popup.focus();
  }

  function closePopup() {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
  }

  teamMembers.forEach((member, i) => {
    member.addEventListener('click', () => openPopup(i));
    member.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPopup(i);
      }
    });
  });

  closeBtn.addEventListener('click', closePopup);

  popup.addEventListener('click', e => {
    if (e.target === popup) {
      closePopup();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      closePopup();
    }
  });
});

