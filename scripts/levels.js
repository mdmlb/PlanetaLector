const imgLevel = document.querySelector('.icon');

var isComplete = localStorage.getItem('showCompleted');
var isPassed = localStorage.getItem('totalCompleted');

if(isComplete && isPassed>=300){
    imgLevel.src ='./resources/levelOk.png';
    imgLevel.style.width ='50%';
}else if(isComplete && isPassed<300){
    imgLevel.src ='./resources/levelBad.png';
    imgLevel.style.width ='50%';
}

console.log(isPassed);
