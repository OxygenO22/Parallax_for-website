var image1 = document.getElementsByClassName('parallaximg1');
new simpleParallax(image1, {
   orientation: 'left'
});
var image2 = document.getElementsByClassName('parallaximg2');
new simpleParallax(image2, {
   orientation: 'right',


});
var image3 = document.getElementsByClassName('parallaximg3');
new simpleParallax(image3, {
   orientation: 'up',
   scale: 1.5,
   delay: 3,
   transition: 'cubic-bezier(0,0,0,1)'
});
var image4 = document.getElementsByClassName('parallaximg4');
new simpleParallax(image4, {
   orientation: 'down',
   scale: 2,
   delay: .6,
   transition: 'cubic-bezier(0,0,0,1)'
});