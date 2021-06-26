$(document).ready(function () {
  $('.menu-icon').click(function (event) {
    $('.menu-icon,.header__menu').toggleClass('active');
  });
});
$(document).ready(function () {
  $('.header__list').click(function (event) {
    $('.menu-icon,.header__menu').removeClass('active');
  });
});
