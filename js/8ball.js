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

let answerDiv = document.getElementById('Answer');
let triangleDiv = document.getElementById('Triangle');

function decide(){
    let randomNr = Math.floor(Math.random() * answers.length);    

    answerDiv.innerHTML = '';
    triangleDiv.classList.add('d-none');
    /* shake ball */
    document.getElementById('Answer-ball').classList.add('shake');   
    
    setTimeout(function(){
        
        if(randomNr == 0){
           answer(0) 
        }else if(randomNr == 1){
            answer(1)
        }else if(randomNr == 2){
            answer(2)
        }else if(randomNr == 3){
            answer(3)
        }else if(randomNr == 4){
            answer(4)
        }else if(randomNr == 5){
            answer(5)
        }else if(randomNr == 6){
            answer(6)
        }else if(randomNr == 7){
            answer(7)
        }else if(randomNr == 8){
            answer(8)
        }else if(randomNr == 9){
            answer(9)
        }else {
            answer(0)
        }
        
    },1000);    

    setTimeout(function() {
        document.getElementById('Answer-ball').classList.remove('shake')   
    }, 1001);
}

function answer(arrayNr){
        triangleDiv.classList.remove('d-none');
        triangleDiv.classList.add('fade-in'); 
        answerDiv.innerHTML = answers[arrayNr]; 
        setTimeout(function(){
            triangleDiv.classList.remove('fade-in'); 
        },300)                   
    
}