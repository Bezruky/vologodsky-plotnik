$('.promo__slider1').flickity({
  contain: true,
  prevNextButtons: true,
  wrapAround: true,
  draggable: false
});
$('.promo__slider2').flickity({
  asNavFor: '.promo__slider1',
  contain: true,
  pageDots: false,
  cellAlign: 'left',
  wrapAround: true,
  prevNextButtons: false,
});

//Перемещение promo__left-block
if (document.querySelector('.wrapper').clientWidth < 1201) {
  document.querySelector('.promo__content-full').appendChild(document.querySelector('.promo__left-block'));
};
window.addEventListener('resize', function() {

  if (document.querySelector('body').offsetWidth < 1201) {
    document.querySelector('.promo__content-full').appendChild(document.querySelector('.promo__left-block'));
  }

  if (document.querySelector('body').offsetWidth > 1200) {
    document.querySelector('.main').appendChild(document.querySelector('.promo__left-block'));
  }
});

//Cocoen slider (before-after)
Cocoen.create(document.querySelector('.cocoen'));
document.querySelector('cocoen-component').style.maxHeight = '540px';

//complect-list, li color
for (let i = 0; i <= document.querySelectorAll('.complect-list').length; i++) {
  let n = 0;

  document.querySelectorAll('.complect-list')[i].childNodes.forEach((item) => {

    if (item.nodeName != '#text') {
      n += 1;

      if (n % 2 == 0) {
        item.style.backgroundColor = '#f7f7f7';
      }
    }
  });
}