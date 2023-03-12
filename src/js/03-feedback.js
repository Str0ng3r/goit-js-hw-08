let throttle = require('lodash.throttle');
'use strict'
const feedbackForm = document.querySelector('.feedback-form')
const feedEmail = document.querySelector('#email')
const feedMessages = document.querySelector('#message')
const butSubmit = document.querySelector('#submitBut')

console.log(feedbackForm)
console.log(feedEmail)
console.log(feedMessages)
console.log(butSubmit)

const updateLocaleEmail = () => {
const localeInfEmail = feedEmail.value
localStorage.setItem('email',localeInfEmail)
}

const updateLocaleMessage = () => {
    const localeInfMessage= feedMessages.value
    localStorage.setItem('message',localeInfMessage)
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
feedEmail.value = ''
feedMessages.value = ''
})





