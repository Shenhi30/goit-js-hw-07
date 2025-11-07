const loginForm = document.querySelector('.login-form')
const handleSubmit = event => {
    event.preventDefault()
    const formElements = event.currentTarget.elements
    const emailValue = formElements.email.value.trim();
    const passwordValue = formElements.password.value.trim()
    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in')
    }
    const formData = {
        email: emailValue,
        password: passwordValue
    }
    console.log(formData)
    event.currentTarget.reset()
}
loginForm.addEventListener('submit', handleSubmit)