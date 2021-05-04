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

  // check email validity
  function checkEmailValid(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


// Event listeners
form.addEventListener('submit', function(e){
  // disable default action
  e.preventDefault();

// Rough and ready but not optimal solution using if() statements.

//   if(username.value === ''){
//     showError(username, 'Please enter a valid username.');
//   } else {
//     showSuccess(username);
//   }

//   if(email.value === ''){
//     showError(email, 'Please enter an email address.');
//   } else if (!checkEmailValid(email.value)) {
//     showError(email, 'Please enter a valid email address.')
//   } else {
//     showSuccess(email);
//   }

//   if(password.value === ''){
//     showError(password, 'Please enter a valid password.');
//   } else {
//     showSuccess(password);
//   }

//   if(password2.value === ''){
//     showError(password2, 'Please enter a valid password2.');
//   } else {
//     showSuccess(password2);
//   }
// });

// END IF STATEMENTS

// Better, optimised way to address validation.


// Check required fields
function checkRequired(inputArray){
  inputArray.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${sentenceCaseFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}


// getFieldName: converst first letter of input ID to ucase then appends rest of input ID to this.
function sentenceCaseFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

checkRequired([username, email, password, password2]);

});