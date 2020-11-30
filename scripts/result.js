const rightCritical = document.querySelector('.criticalTestResults__1');
const wrongCritical = document.querySelector('.criticalTestResults__2');

var goodCritical = localStorage.getItem('rCritical');
var badCritical = localStorage.getItem('wCritical');

rightCritical.innerText = goodCritical;
wrongCritical.innerText = badCritical;