import startCountdown from './countdown.js';
import { fakeSound } from './sound.js';

export default function run() {
    document.getElementById('my-start').addEventListener('click', () => {
        startCountdown()
        fakeSound()
    })
}

// вот тут, собственно, должен был запускаться звук и останавливаться