function step(value) {
  if(value == '00') {
    return '01'
  }
  if(value == 'ff') {
    return 'fe'
  }

  if(Math.random() > 0.5) {
    return String('0' + (parseInt(value, 16) + 1).toString(16)).slice(-2)
  } else {
    return String('0' + (parseInt(value, 16) - 1).toString(16)).slice(-2)
  }
}

function drift(hex) {
  var bytes = hex.match(/.{2}/g)
  var index = 2
  if(Math.random() < (1/3)) {
    index = 0
  } else if(Math.random() < (2/3)) {
    index = 1
  }

  bytes[index] = step(bytes[index])

  return bytes.join('')
}
