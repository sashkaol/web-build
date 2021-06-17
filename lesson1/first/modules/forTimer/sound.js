import './sound/howler.js-master/dist/howler.js';

const sound = new Howl({
    src: ['https://sber-zvuk.com/track/33941089']
})

function startSound() {
    sound.play();
    console.log('Чисто теоретически оно звучит')
}

function stopSound() {
    sound.stop();
    console.log('Чисто теоретически оно остановилось')
}

function fakeSound() {
    sound.play()
    sound.pause()
}

export { startSound, stopSound, fakeSound }

// браузер пишет, что звук может звучать только после события пользователя, а тут его нет, была мысль при запуске таймера навесить на кнопку событие с запуском и приостановкой звука, но этот вариант не сработал