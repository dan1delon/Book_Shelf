// document.addEventListener('DOMContentLoaded', function () {
//     const charities = [
//       {
//         title: 'Save the Children',
//         url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//         img: '../img/save_the_children.png',
//       },
//       {
//         title: 'Project HOPE',
//         url: 'https://www.projecthope.org/country/ukraine/',
//         img: '../img/HOPE.png',
//       },
//       {
//         title: 'UNITED24',
//         url: 'https://u24.gov.ua/uk',
//         img: '../img/United_24.png',
//       },
//       {
//         title: 'International Medical Corps',
//         url: 'https://internationalmedicalcorps.org/country/ukraine/',
//         img: '../img/Med.corps.png',
//       },
//       {
//         title: 'Medicins Sans Frontieres',
//         url: 'https://www.msf.org/ukraine',
//         img: '../img/sans_front.png',
//       },
//       {
//         title: 'RAZOM',
//         url: 'https://www.razomforukraine.org/',
//         img: '../img/RAZOM.png',
//       },
//       {
//         title: 'Action against hunger',
//         url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//         img: '../img/aACTION.png',
//       },
//       {
//         title: 'World vision',
//         url: 'https://www.wvi.org/emergencies/ukraine',
//         img: '../img/Vision.png',
//       },
//       {
//         title: 'Serhiy Prytula Charity Foundation',
//         url: 'https://prytulafoundation.org/en',
//         img: '../img/SERGIY.png',
//       },
//     ];
  

// function createCharityListItem(charity, index) {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = `
//         <div style="justify-content: center; align-items: center; gap: 16px; display: inline-flex">
//             <div style="color: white; font-size: 14px; font-family: DM Sans; font-weight: 400; line-height: 18px; word-wrap: break-word">${String(index + 1).padStart(2, '0')}</div>
//             <div style="width: 129px; height: 32px; position: relative">
//                 <img style="width: 129px; height: 32px; left: 0px; top: 0px; gap: 16px; position: absolute; mix-blend-mode: luminosity" src="${charity.img}" />
//                 <div style="width: 131px; height: 32px; left: -2px; top: 0px; gap: 16px; position: absolute; mix-blend-mode: luminosity;"></div>
//             </div>
//         </div>
//     `;
//     return listItem;
// }


// const charityList = document.querySelector('.charity-list');


// charities.forEach((charity, index) => {
//     const listItem = createCharityListItem(charity, index);
//     charityList.appendChild(listItem);
// });

// const swiper = new Swiper('.mySwiper', {
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });
// });
  