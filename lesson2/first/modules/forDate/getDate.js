import showMessage from './message.js';
let message = document.getElementById('message');

import { diffDates, diffToHtml } from './diffDate.js';

export default function getDate(event) {
    message.innerHTML = '';
    event.preventDefault();

    var date1 = event.target.date1.value;
    var date2 = event.target.date2.value;

    if (date1 == '' || date2 == '') {
        message.innerHTML = showMessage('Заполните оба поля');
    } else {
        message.innerHTML = diffToHtml(diffDates(date1, date2));
    }
}
