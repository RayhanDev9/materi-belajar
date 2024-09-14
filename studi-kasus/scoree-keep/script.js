let p1Display = document.querySelector('#p1-display');
let p2Display = document.querySelector('#p2-display');
const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const reset = document.querySelector('#reset')
const winScoreOption = document.querySelector('#win-score-option')

let p1Score = 0;
let p2Score = 0;
let winScore =3;
let isGameOver = false;


p1Button.addEventListener('click', () =>{

    if(!isGameOver) {
        p1Score++;
        p1Display.textContent  = p1Score;
        console.info(p1Score)
        
        if(p1Score ===winScore) {
            isGameOver = true;
        }
    }
});

p2Button.addEventListener('click', () =>{

    if(!isGameOver) {
        p2Score++;
        p2Display.textContent  = p2Score;
        
        if(p2Score ===winScore) {
            isGameOver = true;
        }
    }
});

function resetFunction () {    
        p1Score = 0;
        p2Score = 0;
        p1Display.textContent = 0;
        p2Display.textContent = 0;
        isGameOver = false;
};

reset.addEventListener ('click',resetFunction)


winScoreOption.addEventListener('change',function (e) {
    winScore = parseInt(e.target.value);
    resetFunction();
});









