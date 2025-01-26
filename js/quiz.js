//@ts-check
const time = document.getElementById('time');
const score = document.getElementById('score');
const a = document.getElementById('answer');

let [question, answer] = genQuestion();

function checkTime() {
    // @ts-ignore
    if (parseInt(time.innerHTML) == 0) {
        alert('Time is up!');
        // @ts-ignore
        window.location = 'result.html';
    } else {
        // @ts-ignore
        time.innerHTML = (parseInt(time.innerHTML) - 1) + 's';
        setTimeout(checkTime, 1000);
    }
}

function genQuestion() {
    let question, answer;
    let numbers = [];
    for (let i = 0; i <= 50; i++) {
        numbers.push(i)
    };
    let operators = ['a', 's', 'm', 'd'];
    let ranOp = operators[Math.floor(Math.random() * operators.length)]
    let ranX = numbers[Math.floor(Math.random() * numbers.length)]
    let ranY = numbers[Math.floor(Math.random() * numbers.length)]

    if ((ranOp == 'a')) {
        question = `${ranX} + ${ranY}`
        answer = ranX + ranY
    } else if ((ranOp == 's')) {
        if (ranX < ranY) {
            let temp = ranX;
            ranX = ranY;
            ranY = temp;
        }

        question = `${ranX} - ${ranY}`
        answer = ranX - ranY
    } else if ((ranOp == 'm')) {
        question = `${ranX} x ${ranY}`
        answer = ranX * ranY
    } else {
        if (ranX < ranY) {
            let temp = ranX;
            ranX = ranY;
            ranY = temp;
        }

        if (ranX % ranY != 0) {
            let temp = ranX % ranY;
            ranX = ranY + temp;
        }

        question = `${ranX} / ${ranY}`
        answer = ranX / ranY
    }
    return [question, answer];
}

// @ts-ignore
a.addEventListener('keyup', checkAnswer);

function checkAnswer(e) {
    if (e.keyCode == 13) {
        // @ts-ignore
        if (a.value == answer) {
            // @ts-ignore
            score.innerHTML = parseInt(score.innerHTML) + 1;
        }

        [question, answer] = genQuestion();
    }
}


function main() {
    checkTime();
}