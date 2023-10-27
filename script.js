$(function () {
  // $('.c-menu').click(function () {
  //   $('.p-foodmenu').toggleClass('open');
  //   $('.p-foodmenu--background').toggleClass('open');
  // });
  // $('.c-menu--close').click(function () {
  //   $('.p-foodmenu').toggleClass('open');
  //   $('.p-foodmenu--background').toggleClass('open');
  // });
  // $(window).resize(function () {
  //   // 画面幅が変更されたときに実行させたい処理内容
  //   $('.p-foodmenu').removeClass('open');
  //   $('.p-foodmenu--background').removeClass('open');
  // });
  $('.js-foodmenu-title--sp').click(function () {
    $('.js-foodmenu').toggleClass('is-open');
    $('.js-foodmenu--background').toggleClass('is-open');
  });
  $('.js-foodmenu--close').click(function () {
    $('.js-foodmenu').toggleClass('is-open');
    $('.js-foodmenu--background').toggleClass('is-open');
  });
});
