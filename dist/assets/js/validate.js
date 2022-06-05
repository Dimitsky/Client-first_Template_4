// Форма
const form = document.querySelector( '.contact__form' );

// Поля ввода
const inputs = [
  document.querySelector( '#input-name' ), 
  document.querySelector( '#input-email' ), 
  document.querySelector( '#input-subject' ), 
]

// Если ошибок валидации нет, то удалить сообщения об ошибках
function validatorEvent( e ) {
  let target = e.target;
  let error = target.closest( 'label' ).querySelector( '.error' );

  if ( target.validity.valid ) {
    error.textContent = '';
    target.classList.remove( 'invalid' );
  } else {
    showError( target, error );
  }
}

// Если есть ошибки валидации, то сообщить о них пользователю и прервать отправку формы
function submitEvent( e ) {
  let isValid = true;

  for( let i = 0; i < inputs.length; i++ ) {
    if ( !inputs[i].validity.valid ) {
      let target = inputs[i];
      let error = inputs[i].closest( 'label' ).querySelector( '.error' );

      showError( target, error );
      isValid = false;
    }
  }

  if ( !isValid ) {
    e.preventDefault();
  }
}

// Если есть ошибки валидации, то сообщить о них пользователю
function showError( target, error ) {
  if ( target.validity.patternMismatch ) {
    error.textContent = 'Не соответствует паттерну [a-zA-Z]+ [a-zA-Z]+';
  } else if ( target.validity.tooShort ) {
    error.textContent = `Строка должна содержать более ${target.minLength} символов`;
  } else if ( target.validity.typeMismatch ) {
    error.textContent = 'E-mail должен иметь вид username@hostname.tld';
  } else if ( target.validity.valueMissing ) {
    error.textContent = 'Поле не должно быть пустым';
  }

  target.classList.add( 'invalid' );
}

// Назначить обработчики полей ввода
inputs.forEach( input => {
  input.addEventListener( 'input', validatorEvent );
} )

// Назначить обработчик на отправку формы
form.addEventListener( 'submit', submitEvent );