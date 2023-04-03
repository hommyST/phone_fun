let counterLogs = 0

function log(variable) {
  let out;
  if (document.querySelector('.console-out')) out = document.querySelector('#console-out')
  else out = createDom()
  const type = typeof variable
  if (counterLogs <= 3) {
    out.innerHTML += '<br>'
    out.innerHTML += type + ': ' + JSON.stringify(variable, null, 2)
    counterLogs++
  } else {
    out.innerHTML = type + ': ' + JSON.stringify(variable, null, 2)
    counterLogs = 0
  }

  // out.innerHTML += ' ---- ' + counetLogs //DEBUG only

  function createDom() {
    const wrap = document.createElement('div')
    const header = document.createElement('h5')
    const pre = document.createElement('pre')
    const code = document.createElement('code')

    wrap.className = 'console-out'
    header.innerText = 'Console Log:'
    code.id = 'console-out'

    pre.append(code)
    wrap.append(header, pre)

    document.body.append(wrap)
    return code
  }
}