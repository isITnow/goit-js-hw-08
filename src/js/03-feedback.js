import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormIiput, 500));
formEl.addEventListener('submit', onFormSubmit);

fillFormData();

function onFormIiput(evt) {
    const formData = {
        email: formEl.email.value,
        message: formEl.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = {
        email: formEl.email.value,
        message: formEl.message.value,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
}

function fillFormData() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedData) {
        formEl.email.value = savedData.email;
        formEl.message.value = savedData.message;
    }
}
