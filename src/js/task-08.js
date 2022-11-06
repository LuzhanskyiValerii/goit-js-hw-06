const form = document.querySelector("form.login-form");
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
    //заборона на автоматичне перезавантаження сторінки при (сабміті)
    event.preventDefault()
    const {
    elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
            return alert("Bсі поля повинні бути заповнені")
        }
    console.log({ Login: email.value, Password: password.value });
    event.currentTarget.reset();
};
