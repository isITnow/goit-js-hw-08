const formEl = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');
const textArea = document.querySelector('textarea');
console.log(submitBtn);
console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', onTextareaInput);

const obj = {};

function onTextareaInput(evt) {
    // console.log(evt.target.value);
    localStorage.setItem('feedback-form-state', value);
}

const value = localStorage.getItem('feedback-form-state');
console.log(value);
// function onFormSubmit(evt) {
//     evt.preventDefault();
//     console.log(evt);
// }
