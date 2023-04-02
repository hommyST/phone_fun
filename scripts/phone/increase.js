const phoneIncrease = document.querySelector('#phone-increase')
const phoneIncreaseControl = document.querySelector('.phone-increase--control')

phoneIncrease.addEventListener('input', validPhoneIncrease)
phoneIncrease.addEventListener('wheel', changeIncreaseValue)
phoneIncreaseControl.addEventListener('click', changeStep)

function validPhoneIncrease() {
  let val = this.value
  let len = val.length
  if (len !== 11) {
    setTimeout(() => {
      this.value = '79000000000'
    }, 400);
  }
}
function changeIncreaseValue(ev) {
  ev.preventDefault()
  let step = +this.step
  this.value = +this.value + step * (Math.sign(ev.deltaY) * -1)
}

function changeStep(ev) {
  let step = +ev.target.dataset.step
  if (!step) return
  this.querySelectorAll('button')
    .forEach(b => b.classList.remove('active'))
  ev.target.classList.add('active')
  phoneIncrease.step = step
}

