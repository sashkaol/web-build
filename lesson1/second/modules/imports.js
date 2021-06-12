'use strict'

loadScript('modules/load.js', () => {
    console.log('load')
})

loadScript('modules/any.js');

loadScript(['modules/what.js'], () => {
    console.log('Скрипты успешно загружены')
})