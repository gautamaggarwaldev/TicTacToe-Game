document.addEventListener('DOMContentLoaded', function () {

    let turn = "X";
    const turnAudio = new Audio("turnaudio.wav");

    let gameOver = false;

    function changeTurn() {
        if (turn === "X") return "O";
        else return "X";
    }

    
    function checkWin() {
        let boxtext = document.getElementsByClassName('box-text');
        let win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [2,5,8], [0,4,8], [2,4,6], [1,4,7]];

        win.forEach(e => {
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== '') {
                let winInfo = document.getElementsByClassName('win-status');
                winInfo[0].innerText = `${boxtext[e[0]].innerText} Win`;
                alert(`${boxtext[e[0]].innerText} Wins the Game!`); 
                gameOver = true;
            }   
            
        })
    }

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', ()=> {
        const boxtext = this.getElementsByClassName('box-text');

        Array.from(boxtext).forEach(ele => {
            ele.innerHTML = "";
        })
        document.getElementsByClassName('win-status')[0].innerText = "WHO WIN";
        turn = "X";
        gameOver = false;
    })


    const boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element => {
        let boxtext = element.querySelector('.box-text');
        element.addEventListener('click', () => {
            if (boxtext.innerHTML === '') {
                boxtext.innerHTML = turn;
                turnAudio.play();
                checkWin();
                if(!gameOver) {
                    turn = changeTurn();
                }
                
            }
        })
    })

});