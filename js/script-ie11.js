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