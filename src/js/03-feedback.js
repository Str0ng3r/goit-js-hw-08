let throttle = require('lodash.throttle');
'use strict'
const feedbackForm = document.querySelector('.feedback-form')
const feedEmail = document.querySelector('#email')
const feedMessages = document.querySelector('#message')
const butSubmit = document.querySelector('#submitBut')

if(JSON.parse(localStorage.getItem('formData')) ){
const formParseData = JSON.parse(localStorage.getItem('formData'));
feedEmail.value = formParseData.email
feedMessages.value = formParseData.message
}


const updateLocaleEmail = () => {
    const formData = {
        email: feedEmail.value,
        message: feedMessages.value
    };
    
    // Записываем данные в localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
}

const updateLocaleMessage = () => {
    const formData = {
        email: feedEmail.value,
        message: feedMessages.value
    };
    
    // Записываем данные в localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    }

   const thrUpdateLocaleMessage = throttle(updateLocaleMessage,500)

feedMessages.addEventListener('input',thrUpdateLocaleMessage)

const thrUpdateLocaleEmail = throttle(updateLocaleEmail,500);

feedEmail.addEventListener('input',thrUpdateLocaleEmail);



feedbackForm.addEventListener('submit',(event)=> {
event.preventDefault()
if(!feedEmail.value || !feedMessages.value){
    alert('Заповніть усі поля')
    return
}


const formData = {
    email: feedEmail.value,
    message: feedMessages.value
};
console.log(formData)
// Записываем данные в localStorage
localStorage.setItem('formData', JSON.stringify(formData));


// Очищаем поля формы
feedEmail.value = '';
feedMessages.value = '';
})







