const rightCritical = document.querySelector('.criticalTestResults__1');
const wrongCritical = document.querySelector('.criticalTestResults__2');
const tCritical = document.querySelector('.criticalTestResults__3');
const rightSpelling = document.querySelector('.spellingTestResults__1');
const wrongSpelling = document.querySelector('.spellingTestResults__2');
const tSpelling = document.querySelector('.spellingTestResults__3');
const finalScore = document.querySelector('.total');
const btnFinal = document.querySelector('.result__button');

var goodCritical = localStorage.getItem('rCritical');
var badCritical = localStorage.getItem('wCritical');
var goodSpelling = localStorage.getItem('rSpelling');
var badSpelling = localStorage.getItem('wSpelling');
var total1 = localStorage.getItem('totalCritical');
var total2 = localStorage.getItem('totalSpelling');

rightCritical.innerText = goodCritical;
wrongCritical.innerText = badCritical;
rightSpelling.innerText = goodSpelling;
wrongSpelling.innerText = badSpelling;
tCritical.innerText = total1;
tSpelling.innerText = total2;
finalScore.innerText = parseFloat(total1)+parseFloat(total2);

let completed = false;
localStorage.setItem('totalCompleted', parseFloat(total1)+parseFloat(total2));

btnFinal.addEventListener('click', function(){
    completed = true;
    localStorage.setItem('showCompleted', completed);
    window.location.href = './levels.html'
})