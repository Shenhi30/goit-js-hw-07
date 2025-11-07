const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

const valueInput = event => {
    const currentValueInput = event.currentTarget.value.trim()
    if (currentValueInput === '') {
        nameOutput.textContent = 'Anonymous'
    } else {
        nameOutput.textContent = currentValueInput
    }

}
nameInput.addEventListener('input', valueInput)