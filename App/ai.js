
function sameNext() {
    modeLog = 'Win Same, Lose Next (sr)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting same move.';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting next move ' ;
        movePredict = previousMoveInt + 2; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function samePrev() {
    modeLog = 'Win Same, Lose Prev (sp)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting same move. ';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting previous move ';
        movePredict = previousMoveInt; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function sameSame() {
    modeLog = 'Win Same, Lose Same (ss)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting same move. ';
        movePredict = previousMoveInt + 1;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting same move ';
        movePredict = previousMoveInt + 1; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function nextNext() {
    modeLog = 'Win Next, Lose Next (rr)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict= 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    else {
        aiResult = 'User lost last round, counteracting next move ';
        movePredict = previousMoveInt + 2; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function nextSame() {
    modeLog = 'Win Next, Lose Same (rs)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting same move';
        movePredict = previousMoveInt + 1; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function nextPrev() {
    modeLog = 'Win Next, Lose Prev (rp)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting next move.';
        movePredict = previousMoveInt + 2;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting previous move';
        movePredict = previousMoveInt; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function prevPrev() {
    modeLog = 'Win Prev, Lose Prev (pp)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting previous move.';
        movePredict = previousMoveInt ;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting previous move';
        movePredict = previousMoveInt; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function prevSame() {
    modeLog = 'Win Prev, Lose Same (ps)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting previous move.';
        movePredict = previousMoveInt;
        if (movePredict == 3) {
            movePredict= 0;
        }
    }
    else {
        aiResult = 'User lost last round, counteracting same move';
        movePredict = previousMoveInt + 1; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}

function prevNext() {
    modeLog = 'Win Prev, Lose Next (pr)'
    var movePredict;

    if (moves[arraySize].winner == 'user') {
        aiResult = 'User won last round, counteracting previous move.';
        movePredict = previousMoveInt;
    }
    else {
        aiResult = 'User lost last round, counteracting next move';
        movePredict = previousMoveInt + 2; 
        if (movePredict == 3) {
            movePredict = 0;
        }
        else if (movePredict == 4)
            movePredict = 1;
    }
    return movePredict;
}


function aiTry(attempt) {
    var win; 
    var testMoveInt;

    if (userMove === 'r') {
        testMoveInt = 0;
    }
    else if (userMove === 'p') {
        testMoveInt = 1;
    }
    else if (userMove === 's') {
        testMoveInt = 2;
    }

    if (testMoveInt === 0 && attempt == 0) {
        win = 'Tie;'
    }
    else if (testMoveInt === 0 && attempt == 1) {
        win = 'AI;'
    }
    else if (testMoveInt === 0 && attempt == 2) {
        win = 'AI;'
    }
    else if (testMoveInt === 1 && attempt == 0) {
        win = 'User;'
    }
    else if (testMoveInt === 1 && attempt == 1) {
        win = 'Tie;'
    }
    else if (testMoveInt === 1 && attempt == 2) {
        win = 'AI;'
    }
    else if (testMoveInt === 2 && attempt == 0) {
        win = 'User;'
    }
    else if (testMoveInt === 2 && attempt == 1) {
        win = 'User;'
    }
    else if (testMoveInt === 2 && attempt == 2) {
        win = 'Tie;'
    }

    if (win === 'AI;') {
        return 1;
    }
    else {
        return 0;
    }

}

