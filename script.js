const slider = document.querySelector('.slider')
const length = document.querySelector('.length')

const includeUppperCase = document.querySelector('#upper')
const includeLowerCase = document.querySelector('#lower')
const includeNummbers = document.querySelector('#numbers')
const includeSymbols = document.querySelector('#symbols')

const generateBtn = document.querySelector('.btn-generator')
const passwordDisplay = document.querySelector('.password')
const copyButton = document.querySelector('.password-copy')

slider.addEventListener('input', (e) => {
  length.textContent = slider.value
})

const characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]{}|;:,.<>?',
}
const createPassword = (options) => {
  let charset = ''

  if (options.useUppercase) {
    charset += characters.uppercase
  }

  if (options.useLowercase) {
    charset += characters.lowercase
  }

  if (options.useNumbers) {
    charset += characters.numbers
  }

  if (options.useSymbols) {
    charset += characters.symbols
  }

  if (charset.length === 0) {
    alert('Please select at least one character type.')
    return ''
  }

  let password = ''
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset.charAt(randomIndex)
  }

  return password
}
generateBtn.addEventListener('click', () => {
  const passwordOptions = {
    length: slider.value,
    useUppercase: includeUppperCase.checked,
    useLowercase: includeLowerCase.checked,
    useNumbers: includeNummbers.checked,
    useSymbols: includeSymbols.checked,
  }

  const password = createPassword(passwordOptions)
  passwordDisplay.textContent = password
})

copyButton.addEventListener('click', () => {
  const passwordToCopy = passwordDisplay.textContent
  if (passwordToCopy) {
    navigator.clipboard.writeText(passwordToCopy)
    alert('password copeid to clipboard')
  }
})
