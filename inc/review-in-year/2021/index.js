$(function () {
  $('.c-indexPage').height(window.innerHeight);
  var notebookAnim = bodymovin.loadAnimation({
    container: document.querySelector('#mainImage'),
    // Required
    path: './inc/review-in-year/2021/images/index/notebook.json',
    // Required
    renderer: 'canvas',
    // Required
    autoplay: false,
    loop: false,
    name: 'notebook'
  });
  $('#msgBox2, #msgBox1').css('transform-origin', 'left top');
  var tl = gsap.timeline({
    paused: false
  });
  tl.fromTo('#msgBox1', {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: .4,
    ease: 'back.out(1.7)'
  }, '+=.2').fromTo('#msgBox2', {
    scale: 0.5,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    duration: .4,
    ease: 'back.out(1.7)'
  }, '+=.4').call(function () {
    notebookAnim.play();
  }, null, '+=.3');
});
