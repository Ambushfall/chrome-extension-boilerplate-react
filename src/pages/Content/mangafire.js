import { Testing } from './modules/localstorage';



setTimeout(async () => {
    try {


        var result = ""
        var arr = document.querySelectorAll(".inner");

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i].querySelector('.info > p');
            if (element && element.innerText) {
                const _one = Number(element.innerText.match(/([\d|\d.\d]+)/g)[1]);
                const one_round = Math.round(_one)
                const _two = Number(element.innerText.match(/([\d|\d.\d]+)/g)[2]);
                const two_round = Math.round(_two)

                const [page, chapter_lang, rem_chapter] = element.innerText.split('/')
                const chapter_or_vol = chapter_lang.includes('Chapter') ? chapter_lang.replace('Chapter', 'Ch') : chapter_lang.replace('Volume', 'Vol');
                const remaining_number = !element.innerText.includes('MangaFire') ? (two_round - one_round) : undefined;
                const resulting_string = `<span>${page}</span> / ${chapter_or_vol} / Total: ${rem_chapter} </br> <span> ${chapter_lang.includes('Chapter') ? 'Ch' : 'Vol'} ${remaining_number} Left</span>`;
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