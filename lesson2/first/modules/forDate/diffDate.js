import { DateTime } from './luxon.js';

export function diffDates(date1, date2) {
    date1 = DateTime.fromISO(date1);
    date2 = DateTime.fromISO(date2);
    
    if (date1 > date2) {
        date2 = [date1, date1 = date2[0]];
    }

    return date2.diff(date1, ['years', 'months', 'days']).toObject();
}

export const diffToHtml = diff => {
    const result = 
    `<span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>`

    return result
}