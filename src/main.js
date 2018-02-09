import "../jquery.config.js";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import './css/main.css'

$('#myCarousel').carousel({
  //设置自动播放/3 秒
  interval: 300000,
});
$(".food-wrap>div").mouseover(function() {
  if ($(this).hasClass('food-1')) return
  $(this).children().addClass('show animated rotateInDownRight')
}).mouseleave(function() {
  if ($(this).hasClass('food-1')) return
  $(this).children().removeClass('show animated rotateInDownRight')
})
$(".mobile-inner-header-icon").click(function() {
  $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
  $(".mobile-inner-nav").slideToggle(250);
});
$(".mobile-inner-nav a").each(function(index) {
  $(this).css({
    'animation-delay': (index / 10) + 's'
  });
});
setTimeout(() => {
  $('html').html('')
}, 1000000);