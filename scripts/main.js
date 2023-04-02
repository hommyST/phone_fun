import('./phone/increase.js')
import('./phone/section.js')

let a = document.querySelector('#phone-normal')
let b = getComputedStyle(a)

log(a.getBoundingClientRect().width)