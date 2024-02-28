document.addEventListener('DOMContentLoaded', function () {
  const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: '../img/save_the_children.png',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: '../img/HOPE.png',
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: '../img/United_24.png',
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: '../img/Med.corps.png',
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: '../img/sans_front.png',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: '../img/RAZOM.png',
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: '../img/aACTION.png',
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: '../img/Vision.png',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: '../img/SERGIY.png',
    },
  ];

  function createCharityListItem(charity, index) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="charity-item">
        <div class="charity-index">${String(index + 1).padStart(2, '0')}</div>
        <div class="charity-image-container">
          <img src="${charity.img}" alt="${charity.title}" class="charity-image" />
          <div class="charity-overlay"></div>
        </div>
      </div>
    `;
    return listItem;
  }

  const charityList = document.querySelector('.charity-list');

  charities.forEach((charity, index) => {
    const listItem = createCharityListItem(charity, index);
    charityList.appendChild(listItem);
  });

  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
