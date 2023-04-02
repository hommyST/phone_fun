const phoneSectionInputs = [...document.querySelectorAll('[id^=phone-section]')]
const phoneSectionNext = document.querySelector('.phone-section--control > #next')
const phoneSectionPrev = document.querySelector('.phone-section--control > #prev')
phoneSectionInputs.shift()

let phoneSectionInterval

// log(phoneSectionInputs.length)

phoneSectionNext.addEventListener('click', nextDigit)
phoneSectionPrev.addEventListener('click', prevDigit)

function nextDigit(ev) {
  clearInterval(phoneSectionInterval)
  let next
  let isLast = false
  if (document.querySelector('.phone-input--section.current + .phone-input--section')) {
    next = document.querySelector('.phone-input--section.current + .phone-input--section')
  } else if (!document.querySelector('.phone-input--section.current')) {
    next = document.querySelector('.phone-input--section:nth-of-type(2)')
  } else if (document.querySelector('.phone-input--section.current')) {
    let curr = document.querySelector('.phone-input--section.current')
    if (curr === phoneSectionInputs.at(-1)) isLast = true
  }

  if (isLast) {
    unsetCurrentClass()
    return
  }
  if (!next) return
  unsetCurrentClass()
  next.classList.add('current')
  let counter = +next.value || 0

  phoneSectionInterval = setInterval(() => {
    next.value = counter
    if (counter >= 9) counter = 0
    else counter++
  }, 300);

}

function prevDigit(ev) {
  clearInterval(phoneSectionInterval)
  let prev
  let all = [...document.querySelectorAll('[id^=phone-section]')]
  if (document.querySelector('.phone-input--section.current')) {
    all.shift()
    let currIndex = all.findIndex(el => el.classList.contains('current'))
    if (currIndex && currIndex > 0) prev = all[currIndex - 1]
    else if (currIndex === 0) prev = all[0]
  } else {
    prev = all.at(-1)
  }

  if (prev === 'undefined') return
  unsetCurrentClass()
  prev.classList.add('current')

  let counter = +prev.value || 0
  phoneSectionInterval = setInterval(() => {
    prev.value = counter
    if (counter >= 9) counter = 0
    else counter++
  }, 300);
}

function unsetCurrentClass() {
  phoneSectionInputs.forEach(inp => {
    inp.classList.remove('current')
  })
}