// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });

// console.log("heh script loaded!");
// Refs
const wrapCta = document.querySelector('#wrap-cta'),
btnCta = document.querySelector('#cta'),
content = document.querySelector('#content'),
btnClose = document.querySelector('#close');
//const heading = document.querySelector('#heading');


// Anime.js Commons Values for SVG Morph
const common = {
  targets: '.polymorph',
  easing: 'easeOutQuad',
  duration: 600,
  loop: false };



// Show content
btnCta.addEventListener('click', () => {
  // Elements apparence
  wrapCta.classList.remove('active');
  content.classList.add('active');
//  $('#heading').css('display', 'none');
//   $('.col-sm-6').css('display', 'block');
//   $('#close').css('display', 'block');

  // Morph SVG
  anime({
    ...common,
    points: [
    { value: '215,110 0,110 186,86 215,0' }] });
});


// Hide content  
btnClose.addEventListener('click', () => {
  // Elements apparence
  content.classList.remove('active');
  wrapCta.classList.add('active');
//  $('#heading').css('display', 'block');
//   $('.col-sm-6').css('display', 'none');
//   $('#close').css('display', 'none');

  // Morph SVG
  anime({
    ...common,
    points: [
    { value: '215,110 0,110 0,0 215,0' }] });


});