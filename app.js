const TTT = {
    unGuessed: [1,2,3,4,5,6,7,8,9],
    playerGuess: [],
    cpuGuess: [],
    playerMove: '',
    oppMove: '',
    checkWinner: () => {
        const win1 = [1,2,3];
        const win2 = [1,5,9];
        const win3 = [1,4,7];
        const win4 = [2,5,8];
        const win5 = [3,6,9];
        const win6 = [4,5,6];
        const win7 = [7,8,9];
        const win8 = [3,5,7];
        if (TTT.playerGuess.includes(win1[0]) && TTT.playerGuess.includes(win1[1]) && TTT.playerGuess.includes(win1[2])) {
                display.winGame();
        } else if (TTT.playerGuess.includes(win2[0]) && TTT.playerGuess.includes(win2[1]) && TTT.playerGuess.includes(win2[2])) {
                display.winGame();
        } else if (TTT.playerGuess.includes(win3[0]) && TTT.playerGuess.includes(win3[1]) && TTT.playerGuess.includes(win3[2])) {
                display.winGame();
        } else if (TTT.playerGuess.includes(win4[0]) && TTT.playerGuess.includes(win4[1]) && TTT.playerGuess.includes(win4[2])) {
            display.winGame();
        } else if (TTT.playerGuess.includes(win5[0]) && TTT.playerGuess.includes(win5[1]) && TTT.playerGuess.includes(win5[2])) {
            display.winGame();
        } else if (TTT.playerGuess.includes(win6[0]) && TTT.playerGuess.includes(win6[1]) && TTT.playerGuess.includes(win6[2])) {
            display.winGame();
        } else if (TTT.playerGuess.includes(win7[0]) && TTT.playerGuess.includes(win7[1]) && TTT.playerGuess.includes(win7[2])) {
            display.winGame();
        } else if (TTT.playerGuess.includes(win8[0]) && TTT.playerGuess.includes(win8[1]) && TTT.playerGuess.includes(win8[2])) {
            display.winGame();
        } else if (TTT.cpuGuess.includes(win1[0]) && TTT.cpuGuess.includes(win1[1]) && TTT.cpuGuess.includes(win1[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win2[0]) && TTT.cpuGuess.includes(win2[1]) && TTT.cpuGuess.includes(win2[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win3[0]) && TTT.cpuGuess.includes(win3[1]) && TTT.cpuGuess.includes(win3[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win4[0]) && TTT.cpuGuess.includes(win4[1]) && TTT.cpuGuess.includes(win4[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win5[0]) && TTT.cpuGuess.includes(win5[1]) && TTT.cpuGuess.includes(win5[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win6[0]) && TTT.cpuGuess.includes(win6[1]) && TTT.cpuGuess.includes(win6[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win7[0]) && TTT.cpuGuess.includes(win7[1]) && TTT.cpuGuess.includes(win7[2])) {
            display.loseGame();
        } else if (TTT.cpuGuess.includes(win8[0]) && TTT.cpuGuess.includes(win8[1]) && TTT.cpuGuess.includes(win8[2])) {
            display.loseGame();
        }
    },
    makeGuess: () => {
        $("button").click(function() {
            TTT.checkWinner();
            TTT.playerMove = parseInt(this.id);
            TTT.unGuessed.splice(TTT.unGuessed.indexOf(TTT.playerMove),1);
            TTT.playerGuess.push(TTT.playerMove);
            TTT.playerGuess.sort();
            console.log(' ButtonID#: '+ this.id,'\n unGuessed: ' + TTT.unGuessed,'\n playerGuess: ' + TTT.playerGuess,'\n cpuGuess: ' + TTT.cpuGuess,'\n playerMove: ' + TTT.playerMove,'\n oppMove: ' + TTT.oppMove);
            display.guessMade(TTT.playerMove);
            TTT.opponentGuess();
            console.log(' unGuessed: ' + TTT.unGuessed,'\n playerGuess: ' + TTT.playerGuess,'\n cpuGuess: ' + TTT.cpuGuess,'\n playerMove: ' + TTT.playerMove,'\n oppMove: ' + TTT.oppMove);
        });
    },
    opponentGuess: () => {
        TTT.oppMove = TTT.unGuessed[Math.floor(Math.random() * TTT.unGuessed.length)];
        TTT.unGuessed.splice(TTT.unGuessed.indexOf(TTT.oppMove), 1);
        TTT.cpuGuess.push(TTT.oppMove);
        TTT.cpuGuess.sort();
        display.opponentGuess(TTT.oppMove);
        TTT.checkWinner();
        console.log(' unGuessed: ' + TTT.unGuessed,'\n playerGuess: ' + TTT.playerGuess,'\n cpuGuess: ' + TTT.cpuGuess,'\n playerMove: ' + TTT.playerMove,'\n oppMove: ' + TTT.oppMove);
//        };
    }
};


const display = {
    setUpGame: () => {
        let grid = $('div.game'); 
        for (i = 1; i < 10; i++) {
            grid.append('<button type="button" class="grid" id="'+i+'">' + i + '</button>');
            if (i == 3 || i == 6) {
                grid.append('<br>');
            }
        };
        TTT.makeGuess();
    },
    guessMade: (playerMove) => {
        $('button#'+playerMove).text('X').removeClass().addClass('X disabled').attr('disabled', 'true');
    },
    opponentGuess: (oppMove) => {
        $('button#'+oppMove).text('O').removeClass().addClass('O disabled').attr('disabled', 'true');
    },
    winGame: () => {
        $('h1').after(' You Win! ')
    },
    loseGame: () => {
        $('h1').after(' You Lose! ')
    }
};

$(document).ready(() => {display.setUpGame();});
