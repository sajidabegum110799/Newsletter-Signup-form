const btnSubmit = document.querySelector('.subscribe-btn');
const btnDismiss = document.querySelector('.dismiss-btn');
const formContainer = document.querySelector('.form-container');
const successEL = document.querySelector('.success-message');
const inputEL = document.querySelector('form input');

btnSubmit.addEventListener('click', () => {
    if(inputEL.value !== '') {
        formContainer.classList.add('hide');
        successEL.classList.remove('hide');
        document.querySelector('.error p').innerHTML = '';
    } else {
        document.querySelector(".error p").innerHTML = 'Valid email required';
        inputEL.classList.add('active');
    }
});

btnDismiss.addEventListener('click', () => {
    formContainer.classList.remove('hide');
    successEL.classList.add('hide');
    inputEL.value = '';
    inputEL.classList.remove('active');
})
