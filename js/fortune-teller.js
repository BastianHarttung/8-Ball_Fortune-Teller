let nrDecisions = 2;

let decisionArray = []

/**
 * Show another Input field
 */
function anotherInputField() {
    console.log('another input')
    nrDecisions++;
    document.getElementById('form-input-container').innerHTML += `
        <div id="decision${nrDecisions}-container" class="d-flex-center">
            <input type="text" name="decision${nrDecisions}" id="decision${nrDecisions}" size="26" placeholder="Weitere Entscheidungsmöglichkeit">
            <i class="far fa-times-circle fa-2x" onclick="deleteInputField(${nrDecisions})"></i>
        </div>
        `
    showDecisionInInputField();
};

/**
 * Delete Input Field on Position
 * @param {number}position
 */
function deleteInputField(position) {
    console.log('Inputfield ' + position + ' löschen')
    //nrDecisions--;
    document.getElementById('decision' + position + '-container').remove();
};

/**
 * Check if at least 2 Input Fields are filled
 * If its filled start FortuneBall
 */
function startFortune() {
    let decision1html = document.getElementById('decision1');
    let decision2html = document.getElementById('decision2');

    if (decision1html.value == '' && decision2html.value == ''
        || decision1html.value == 'Bitte etwas eintragen' && decision2html.value == 'Bitte etwas eintragen') {
        pleaseFillOut(decision1html);
        pleaseFillOut(decision2html);
    } else if (decision1html.value == '' || decision1html.value == 'Bitte etwas eintragen') {
        pleaseFillOut(decision1html);
    } else if (decision2html.value == '' || decision2html.value == 'Bitte etwas eintragen') {
        pleaseFillOut(decision2html);
    } else {
        pushDecisionToArray()
        showFortuneBall();
    }
};

/**
 * Arrow back to Decision Selection
 * Delete old Decisions in Array
 */
function backToDecisions() {
    console.log('back to decision')
    decisionArray = [];
    document.getElementById('decision-container').classList.remove('d-none');
    document.getElementById('fortune-ball-parent-container').classList.add('d-none')
};

/**
 * Show Fortune Ball and display none to decision container
 *
 */
function showFortuneBall() {
    console.log('starte kugel');
    document.getElementById('decision-container').classList.add('d-none');
    document.getElementById('fortune-ball-parent-container').classList.remove('d-none')
}

/**
 * Input field red and Text to fill out and back to initial
 * @param {html id} decision
 */
function pleaseFillOut(decision) {
    decision.value = 'Bitte etwas eintragen';
    decision.style.backgroundColor = '#f79797';
    decision.style.color = 'white';
    setTimeout(() => {
        decision.value = '';
        decision.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        decision.style.color = 'black';
    }, 2000);
}

/**
 * Decision value to array decisionarray
 *
 */
function pushDecisionToArray() {
    for (let i = 1; i <= nrDecisions; i++) {
        if (document.getElementById('decision' + i)
            && document.getElementById('decision' + i).value != '') {
            decisionArray.push(document.getElementById(`decision${i}`).value);
        }
    }
}

/**
 * Show Decision after clicking fortune Ball
 */
function makeDecision(){
    const randomDecision = Math.round(Math.random() * (decisionArray.length - 1) )
    console.log(randomDecision)
    const answerDiv = document.getElementById('fortune-answer')

    answerDiv.classList.add('fade-in');
    answerDiv.innerHTML = decisionArray[randomDecision];
    setTimeout(function () {
        answerDiv.classList.remove('fade-in');
    }, 300)
}

/**
 * Show Decision in Input field after Button click *
 */
function showDecisionInInputField() {
    for (let i = 0; i < decisionArray.length; i++) {
        const element = decisionArray[i];
        document.getElementById('decision' + i).value = element;
    }
}