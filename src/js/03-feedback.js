let throttle = require('lodash.throttle');

'use strict'
const form = document.getElementsByClassName('feedback-form')

const inputEmail = document.getElementById('email')

const inputMessage = document.getElementById('message')

 const butSubmit = document.getElementById('submitBut')
 console.log(butSubmit)
console.log(inputEmail)
console.log(inputMessage)
console.log(form)


const updateEmail = () => {
    const valueEmail = inputEmail.value
    console.log(valueEmail)
    localStorage.setItem('valEmail', valueEmail)
}
 const thrUpdateEmail = throttle(updateEmail,1000);
inputEmail.addEventListener('input',thrUpdateEmail);

const updateMessage = () => {
    const valueMess = inputMessage.value
    localStorage.setItem('message',valueMess)
}

 const thrUpdateMessage = throttle(updateMessage,1000)
inputMessage.addEventListener('input',thrUpdateMessage)


 if(localStorage.getItem('valEmail') && localStorage.getItem('message')){


inputEmail.value = localStorage.getItem('valEmail')
inputMessage.value = localStorage.getItem('message')

 }

 butSubmit.addEventListener('click',(event) => {
    event.preventDefault();
    inputEmail.value = ''
    inputMessage.value = ''
 })
