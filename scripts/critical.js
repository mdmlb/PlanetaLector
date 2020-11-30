let count = 0;
let right = 0;
let wrong = 0;
let criticalScore = 0;
let qCurrent;
let opt1Current;
let opt2Current;
let opt3Current;

const reading = [
    {
        q: 'En la frase “Cuatro horas más tarde, un paquete, no obteniendo respuesta, desprendió una chalupa que abordó al María Margarita”, ¿Qué significa la palabra “Chalupa”?',
        opt1: 'Barco de rescate',
        opt2: 'Ancla del barco',
        opt3: 'Una parte específica del barco',
    },
    {
        q: '¿Cuántos hombres desaparecieron, por primera vez, en el buque abandonado que encontraron?',
        opt1: 'Ocho',
        opt2: 'Seis',
        opt3: 'Dos',
    },
    {
        q: '¿Qué sentimiento tenía al final el narrador de la historia?',
        opt1: 'Miedo',
        opt2: 'Tristeza',
        opt3: 'Resignación',
    },
    {
        q: '¿En qué época crees que está adaptado este relato?',
        opt1: 'Principios del siglo XVII',
        opt2: 'Principios del siglo XXI',
        opt3: 'Principios del siglo XX',
    },
    {
        q: '¿Cuántos narradores hay en la historia?',
        opt1: 'Uno',
        opt2: 'Dos',
        opt3: 'Tres',
    },
    {
        q: 'En la frase: “Por ventura las corrientes suelen enredarlos en los mares de sargazo”, ¿Qué significa la palabra sargazo?',
        opt1: 'Un tipo de alga que flotan en el océano.',
        opt2: 'Un banco grande de moluscos.',
        opt3: 'Residuos generados por otros buques.',
    },
    {
        q: '¿En el transcurso de cuántos días ocurrieron las desapariciones?',
        opt1: '2 días',
        opt2: '3 días',
        opt3: '1 día',
    },
    {
        q: '¿Cuánto tiempo pasó tras la desaparición de los de los compañeros del que narraba la historia?',
        opt1: '1 día',
        opt2: '2 horas',
        opt3: '6 horas',
    },
];

const question = document.querySelector('.question');
const answer = document.querySelector('.select');
const form = document.querySelector('.question__form');
const btn = document.querySelector('.cont__button');

function changeText() {
    if (count < 8) {
        qCurrent = reading[count];

        answer.options[1].text = qCurrent.opt1;
        answer.options[2].text = qCurrent.opt2;
        answer.options[3].text = qCurrent.opt3;
        question.innerHTML = qCurrent.q;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    changeText();
    results();
    answer.selectedIndex = answer.options[0];
    console.log('r' + right);
    console.log('w' + wrong);
    console.log('sc' + criticalScore);
})

btn.addEventListener('click', function () {
    count++
    if(count==8){
        window.location.href = './spellingtest.html';
    }
})

function results() {
    switch (count) {
        case 1:
            validation('opt1', 2, 'Incorrecto: La respuesta correcta era "Barco de rescate"');
            break;
        case 2:
            validation('opt1', 3, 'Incorrecto: La respuesta correcta era "Ocho"');
            break;
        case 3:
            validation('opt3', 2, 'Incorrecto: La respuesta correcta era "Resignación"');
            break;
        case 4:
            validation('opt3', 3, 'Incorrecto: La respuesta correcta era "Principios del siglo XX"');
            break;
        case 5:
            validation('opt2', 2, 'Incorrecto: La respuesta correcta era "Dos"');
            break;
        case 6:
            validation('opt1', 3, 'Incorrecto: La respuesta correcta era "Un tipo de alga que flotan en el océano"');
            break;
        case 7:
            validation('opt1', 2, 'Incorrecto: La respuesta correcta era "2 días"');
            break;
        case 8:
            validation('opt2', 2, 'Incorrecto: La respuesta correcta era "2 horas"');
            break;
    }

}

function validation(cRightOption, score, message) {
    if (form.answer.value == cRightOption) {
        criticalScore += score;
        right++;
        alert('¡Correcto!')
    } else {
        wrong++;
        alert(message)
    }
}
