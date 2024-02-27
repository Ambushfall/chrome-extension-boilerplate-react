import { Testing } from './modules/localstorage';



setTimeout(async () => {
    try {


        var result = ""
        var arr = document.querySelectorAll(".inner");

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i].querySelector('.info > p');
            if (element && element.innerText) {
                const remaining_number = !element.innerText.includes('MangaFire') ? (Number(element.innerText.match(/(\d)+/g)[2]) - Number(element.innerText.match(/(\d)+/g)[1])) : undefined;
                const resulting_string = `<span>${element.innerText.split('/')[0]}</span><b> / Remaining: ${element.innerText.split('/')[1].includes('Chapter') ? 'Ch' : 'Vol'}</b> <span>${remaining_number}</span>`;
                element.innerHTML = resulting_string
                if (Testing) {
                    const outerElement = arr[i]
                    result += outerElement.innerHTML;
                }
            }
        }

        if (Testing) {
            let w = window.open()
            let area = w.document.createElement('textarea')
            area.value = result;
            w.document.body.innerHTML = result;
        }

    } catch (error) {
        alert(error)
    }

}, 250)

// alertLine(JSON.stringify(p, null, 1));