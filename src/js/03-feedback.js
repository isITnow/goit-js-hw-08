import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormIiput, 500));
formEl.addEventListener('submit', onFormSubmit);

fillFormData();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}

const formData = {};

function onFormIiput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillFormData() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData) {
        formEl.email.value = savedData.email;
        formEl.message.value = savedData.message;
    }
}
