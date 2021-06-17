import getTime from './getTime.js';
import { startSound, stopSound } from './sound.js';

export default function countdown() {
    let time = getTime();
    console.log(time)
    let min; let sec;

    min = time.slice(0, 2)
    if (min < 10) { min = min.slice(1, 2) }
    sec = time.slice(3, 5)
    if (sec < 10) { sec = sec.slice(4, 5) }
    console.log(`${min}:${sec}`)

    let id = setInterval(() => {
        if (min < 10) { time = '0' + min } else time = min
        if (sec < 10) { time = time + ':0' + sec } else time = time + ':' + sec

        document.getElementById('countdown').innerHTML = time;

        if (--sec == -1) {
            sec = 59;
            if (--min == 0 || min == -1) {
                clearInterval(id);
                startSound();
            }
        }
    }, 1000);

    document.getElementById('my-stop').addEventListener('click', stopSound);
}