console.log('hello');

var numberCounter = anime({
  targets: '#numberCounter',
  value: 1000,
  round: 1,
  easing: 'easeInOutExpo',
  autoplay: false
});

document.querySelector('#startCounter').addEventListener('click', function(e) {
  numberCounter.restart()
})


var cube = anime({
  targets: '#cube',
  translateX: 250,
  direction: 'alternate'
});

document.querySelector('.anime2').addEventListener('click', function(e) {
  cube.restart()
})
