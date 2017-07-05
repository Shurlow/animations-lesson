console.log('hello');

var numberCounter = anime({
  targets: '#numberCounter',
  value: 1000,
  round: 1,
  easing: 'easeInOutExpo',
  autoplay: false
});

document.querySelector('#startCounter').addEventListener('click', function(e) {
  numberCounter.play()
})



// document.querySelector('#shake').addEventListener('click', function(e) {
//   this.classList.toggle('animated')
//   this.classList.toggle('shake')
//   // $(this).addClass('shake')
// })
//
// document.querySelector('#shake').addEventListener('click', function(e) {
//   e.target.removeEventListener(e.type, arguments.callee);
//   console.log('SEE ME ONCE!', arguments)
// })

// 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething


// var shake = anime({
//   targets: '.shake',
//   left: '240px',
//   color: '#ccc',
//   autoplay: false
// })
//
//
// document.querySelector('.shake').addEventListener('click', function(e) {
//   shake.play()
// })
