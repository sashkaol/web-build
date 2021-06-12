import run from './timer.js';

export default function startTimer() {
    document.getElementById('start').addEventListener('click', run);
}