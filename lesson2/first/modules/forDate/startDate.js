import getDate from './getDate.js';
export default function startDate() {
    document.getElementById('calcDate').addEventListener('submit', getDate);
}