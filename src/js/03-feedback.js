let throttle = require('lodash.throttle');

'use strict'
const form = document.getElementsByClassName('feedback-form')

const inputEmail = document.getElementById('email')

const inputMessage = document.getElementById('message')

 const butSubmit = document.getElementById('submitBut')

const updateEmail = () => {
    const valueEmail = inputEmail.value
    localStorage.setItem('valEmail', valueEmail)
}
 const thrUpdateEmail = throttle(updateEmail,500);
inputEmail.addEventListener('input',thrUpdateEmail);

const updateMessage = () => {
    const valueMess = inputMessage.value
    localStorage.setItem('message',valueMess)
}

 const thrUpdateMessage = throttle(updateMessage,500)
inputMessage.addEventListener('input',thrUpdateMessage)


 if(localStorage.getItem('valEmail') && localStorage.getItem('message')){
inputEmail.value = localStorage.getItem('valEmail')
inputMessage.value = localStorage.getItem('message')
 }


 butSubmit.addEventListener('click',(event) => {
    if(inputEmail.value === '' || inputMessage.value === ''){
alert('Всі поля потрібні бути заповнені')
    }
    const valueMessSub = inputMessage.value
    localStorage.setItem('message',valueMessSub)

    const valueEmailSub = inputEmail.value
    localStorage.setItem('valEmail', valueEmailSub)

    event.preventDefault();

    console.log(inputEmail.value)
    console.log(inputMessage.value)
    inputEmail.value = ''
    inputMessage.value = ''
 })
