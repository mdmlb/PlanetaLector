let count = 0;
let right = 0;
let wrong = 0;
let spellingScore = 0;
let qCurrent;
let textCurrent;

const reading = [
    {
        q: 'Corrige la palabra incorrecta',
        text: 'Resulta que ay pocas cosas más terribles que encontrar en el mar un buque abandonado',
    },
    {
        q: 'Corrige la o las palabras incorrectas',
        text: 'Nuestro rumbo —viajabamos también a vela—, nos llevo casi a su lado.',
    },
    {
        q: 'Falta un signo de puntuación en la siguiente frase, colócalo:',
        text: 'No había la menor señal de lucha ni de pánico todo en perfecto orden. Y faltaban todos. ¿Qué pasó?',
    },
    {
        q: 'Faltan algunos signos de puntuación en la siguiente frase, colócalos:',
        text: 'Todos sin saber lo que hacían se habían arrojado al mar envueltos en el sonambulismo moroso que flotaba en el buque.',
    },
    {
        q: 'Completa la palabra',
        text: 'En la cocina her_ía aún una olla con papas.',
    },
    {
        q: 'En esta frase hay palabras sin tildes, colócalas:',
        text: 'Pero otros llegan cada dia, ocupan su lugar en silencio, de modo que el tranquilo y lugubre puerto siempre esta frecuentado.',
    },
    {
        q: 'En esta frase hay dos palabras sin tilde, colócalas:',
        text: 'Viajariamos en conserva. Al anochecer aquel nos tomo un poco de camino.',
    },
    {
        q: 'Faltan algunos signos de puntuación en la siguiente frase, colócalos:',
        text: 'Los tres que quedaban se acercaron rápidamente y observaron el remolino se sentaron en la borda silbando despacio con la vista perdida a lo lejos.',
    },
    {
        q: 'Completa la palabra',
        text: 'Pasó media hora; el sol iba ca_endo.',
    },
    {
        q: 'Completa la palabra',
        text: 'Así, hasta que poco a poco se van des__ciendo',
    },
    {
        q: '¿Esta frase está escrita correctamente? Corrígela si no es así',
        text: 'El viejo marinero que me habia hecho la pregunta me miró desconfiado; miró largo rato mi pantalón; distraído. Al fin se tiro al agua.',
    },
];


const question = document.querySelector('.spellingQuestion');
const text = document.querySelector('.edit');
const form = document.querySelector('.form');
const btn = document.querySelector('.spellingCont__button');

function changeText() {
    if (count < 11) {
        qCurrent = reading[count];

        text.innerHTML = qCurrent.text;
        question.innerHTML = qCurrent.q;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    results();
    changeText();


    console.log(spellingScore);

    localStorage.setItem('rSpelling', right);
    localStorage.setItem('wSpelling', wrong);
    localStorage.setItem('totalSpelling', spellingScore);

})

btn.addEventListener('click', function () {
    count++


    if (count == 11) {
        window.location.href = './result.html';
    }
})

function results() {
    switch (count) {
        case 1:
            validation(
                'Resulta que hay pocas cosas más terribles que encontrar en el mar un buque abandonado.',
                5,
                'Incorrecto: La palabra correcta era "hay"');
            break;
        case 2:
            validation(
                'Nuestro rumbo —viajábamos también a vela—, nos llevó casi a su lado.',
                25,
                'Incorrecto: Las palabras viajábamos y llevó tienen tilde');
            break;
        case 3:
            validation(
                'No había la menor señal de lucha ni de pánico, todo en perfecto orden. Y faltaban todos. ¿Qué pasó?',
                25,
                'Incorrecto: Faltaba una coma después de la palabra pánico');
            break;
        case 4:
            validation('Todos, sin saber lo que hacían, se habían arrojado al mar, envueltos en el sonambulismo moroso que flotaba en el buque.',
                50,
                'Incorrecto: Faltaban comas después de las palabras "Todos", "hacían" y "mar"');
            break;
        case 5:
            validation(
                'En la cocina hervía aún una olla con papas.',
                5,
                'Incorrecto: La respuesta correcta era "hervía"');
            break;
        case 6:
            validation(
                'Pero otros llegan cada día, ocupan su lugar en silencio, de modo que el tranquilo y lúgubre puerto siempre está frecuentado.',
                25,
                'Incorrecto: Las palabras con tilde eran "día", "lúgubre" y "está"');
            break;
        case 7:
            validation(
                'Viajaríamos en conserva. Al anochecer aquel nos tomó un poco de camino.',
                5,
                'Incorrecto: Las palabras con tilde eran "Viajaríamos" y "tomó"');
            break;
        case 8:
            validation(
                'Los tres que quedaban se acercaron rápidamente y observaron el remolino. Se sentaron en la borda, silbando despacio, con la vista perdida a lo lejos.',
                50,
                'Incorrecto: La frase correcta era: "Los tres que quedaban se acercaron rápidamente y observaron el remolino. Se sentaron en la borda, silbando despacio, con la vista perdida a lo lejos."');
            break;
        case 9:
            validation(
                'Pasó media hora; el sol iba cayendo.',
                5,
                'Incorrecto: La respuesta correcta era "cayendo"');
            break;
        case 10:
            validation(
                'Así, hasta que poco a poco se van deshaciendo',
                5,
                'Incorrecto: La respuesta correcta era "deshaciendo"');
            break;
        case 11:
            validation(
                'El viejo marinero, que me había hecho la pregunta, me miró desconfiado. Miró largo rato mi pantalón, distraído. Al fin se tiró al agua.',
                50,
                'Incorrecto: La frase correcta era: "El viejo marinero, que me había hecho la pregunta, me miró desconfiado. Miró largo rato mi pantalón, distraído. Al fin se tiró al agua."');
            break;
    }

}

function validation(rightText, score, message) {
    if (text.innerText == rightText) {
        spellingScore += score;
        right++;
        alert('¡Correcto!')
    } else {
        wrong++;
        alert(message)
    }
}