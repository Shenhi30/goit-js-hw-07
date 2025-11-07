function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const bodyEl = document.body
const spanColorEl = document.querySelector('.color')
const btnChangeColor = document.querySelector('.change-color')
const changeColor = () => {
    const currentColor = getRandomHexColor()
    bodyEl.style.backgroundColor = currentColor
    spanColorEl.textContent = currentColor
}
btnChangeColor.addEventListener('click', changeColor)