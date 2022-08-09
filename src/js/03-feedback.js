import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const formData = {};

formEl.addEventListener('input', throttle(onFormIiput, 500));
formEl.addEventListener('submit', onFormSubmit);

fillFormData();

function onFormIiput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
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
