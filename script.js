// obtain DOM elements to work with

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Functions
function showError(input, message){
  // because we want to apply 'error' format to form-control NOT input element.
  const formControl = input.parentElement;

  // overwrite existing css class (ie, 'form-control' becomes 'form-control error')
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
  }

  // Show success outline on form control
  function showSuccess(input){
    // because we want to apply 'success' format to form-control NOT input element.
    const formControl = input.parentElement;

    // overwrite existing css class (ie, 'form-control' becomes 'form-control success')
    formControl.className = 'form-control success';
  }




// Event listeners
form.addEventListener('submit', function(e){
  // disable default action
  e.preventDefault();
  if(username.value === ''){
    showError(username, 'Please enter a valid username.');
  } else {
    showSuccess(username);
  }
});