let answers = [
    'Frag nochmal',
    'Ja',
    'Nein',
    'Vielleicht',
    'Ohne Zweifel',
    'Absolut',
    'Nicht drauf wetten',
    'Darauf kannste zählen',
    'Kanns nicht sagen',
    'Nicht drauf wetten'
]

const answerDiv = document.getElementById('Answer');
const triangleDiv = document.getElementById('Triangle');

/**
 * Shake Ball and make Decision
 */
function decide() {
    let randomNr = Math.round(Math.random() * (answers.length -1));

    answerDiv.innerHTML = '';
    triangleDiv.classList.add('d-none');
    /* shake ball */
    document.getElementById('Answer-ball').classList.add('shake');

    setTimeout(function () {
        answer(randomNr)
    }, 1000);

    setTimeout(function () {
        document.getElementById('Answer-ball').classList.remove('shake')
    }, 1001);
}

/**
 * Show Triangle and answer on 8-Ball
 * @param {number} arrayNr
 */
function answer(arrayNr) {
    triangleDiv.classList.remove('d-none');
    triangleDiv.classList.add('fade-in');
    answerDiv.innerHTML = answers[arrayNr];
    setTimeout(function () {
        triangleDiv.classList.remove('fade-in');
    }, 300)
}