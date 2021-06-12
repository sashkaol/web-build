function visible(open, close) {
    document.getElementById(open).style.display = "block";
    document.getElementById(close).style.display = "none";
}

import startDate from './forDate/startDate.js';
import startTimer from './forTimer/startTimer.js';
import startCountdown from './forTimer/startCountdown.js';

export default function portal() {
    document.getElementById('to-calc').addEventListener('click', () => {
        visible('calculator', 'timer')
        startDate();
    })
    document.getElementById('to-timer').addEventListener('click', () => {
        visible('timer', 'calculator')
        startTimer();
        startCountdown();
    })
}

