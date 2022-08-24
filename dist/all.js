const mainButton = document.getElementById('main-button')
const closeButton = document.getElementById('close-button')
const resetButton = document.getElementById('reset-button')
const overlay = document.getElementById('overlay')
const clickNumber = document.getElementById('click-number')

let clickCount

if (document.cookie == '') {
    clickCount = 0
} else {
    const cookies = document.cookie.split(/; */)

    for (let cookie of cookies) {
        const [ cookieName, cookieVal ] = cookie.split("=")
        if (cookieName === decodeURIComponent('savedCount')) {
            clickCount = decodeURIComponent(cookieVal);
        }
    }
}

mainButton.addEventListener('click', () => {
    clickCount++
    clickNumber.innerHTML = clickCount;
    overlay.style.display = 'flex' // show popup
    if (clickCount < 5) {
        resetButton.style.display = 'none'
    } else {
        resetButton.style.display = 'inline'
    }
    document.cookie = 'savedCount=' + clickCount
})

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none' // hide popup
})

overlay.addEventListener('click', (event) => {
    if(event.target == overlay) { // if clicked on bg, not popup window
        overlay.style.display = 'none'
    }
})

resetButton.addEventListener('click', () => {
    clickCount = 0
    document.cookie = 'savedCount=0'
    clickNumber.innerHTML = clickCount
})

