'use strict'

function loadScript(url = 'none', callback) {
    let urls = []
    if (typeof (url) == 'string') {
        urls.push(url)
    } else if (typeof(url) == 'function') {
        console.error('Скрипты не обнаружены')
        return
    } else {
        urls = [...new Set(url)];
    }

    const myScripts = Array.from(document.getElementsByTagName('script'));

    let already = []

    myScripts.forEach(el => {
        already.push(el.getAttribute('src'));
    });

    for (let i = 0; i < urls.length; i++) {
        if (already.includes(urls[i])) {
            urls[i] = 'no'
        }
    }

    urls.forEach(el => {
        if (el !== 'no') {
            const script = document.createElement('script');
            script.type = "text/javascript";
            script.src = el;
            script.onload = callback;
            document.head.append(script);
        }
    });
}