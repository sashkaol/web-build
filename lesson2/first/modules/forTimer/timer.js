export default function run() {
    let hours = 0; let min = 0; let sec = 0;
    let time;
    let id = setInterval(() => {
        if (hours < 10) time = '0' + +hours + ':'; else time = +hours + ':'
        if (min < 10) time = time + '0' + +min + ':'; else time = time + +min + ':'
        if (sec < 10) time = time + '0' + +sec; else time = time + +sec
        document.getElementById('time').textContent = time
        if (sec < 59) {
            sec++
        } else {
            sec = 0; 
            if (min < 59) {
                min++
            } else {
                min = 0;
                if (hours < 23) {
                    hours++
                } else hours = 0
            }
        }        
    }, 1000);

    document.getElementById('stop').addEventListener('click', () => clearInterval(id))
    
}