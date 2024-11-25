document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('form-modal');
  const openFormLink = document.getElementById('open-form-link');
  const form = document.getElementById('contact-form'); 
  const successMessage = document.getElementById('success-message');
  
  openFormLink.addEventListener('click', function(e) {
    e.preventDefault();  
    modal.classList.remove('hidden');  
  });

  // También cerramos el formulario si el usuario hace clic fuera del modal (en el fondo oscuro)
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.add('hidden'); 
    }
  });

   // Función para validar campos según su tipo
   const validateField = (input) => {
    if (input.id === 'name') {
      validateName(input);
    } else if (input.id === 'email') {
      validateEmail(input);
    } else if (input.id === 'message') {
      validateMessage(input);
    }
  };

  // Función para validar el campo name
  const validateName = (input) => {
    input.classList.remove('valid', 'invalid');

    if (input.value.trim() === "") {
      input.classList.add('invalid');
    }else {
          const firstChar = input.value.trim().charAt(0); // Obener el primer caracter
      if (firstChar === firstChar.toUpperCase() && /[A-Z]/.test(firstChar)) { // condicional de que la primera letra sea Mayúscula
        input.classList.remove('invalid'); // Eliminamos la clase 'invalid'
        input.classList.add('valid'); // validamos
      } else {
        input.classList.add('invalid'); //invalidamos
        input.classList.remove('valid');  // Eliminamos la clase 'valid'
      }
    }
  };

  // Función para validar el campo email
  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
    if (input.value.trim() === "") {
      input.classList.add('invalid');
      input.classList.remove('valid');
    } else if (emailRegex.test(input.value.trim())) { // Si el correo es válido
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
  };

  // Función para validar el campo message
  const validateMessage = (input) => {
    input.classList.remove('valid', 'invalid');

    if (input.value.trim() === "") {
      input.classList.add('invalid');
      error.textContent = 'Message must be at least 20 characters long.';
    }else {
      input.classList.remove('invalid');
      if (input.value.trim().length < 20){
        input.classList.add('invalid');
        input.classList.remove('valid');
      }else{
        input.classList.add('valid');
        input.classList.remove('invalid');
      }
    }
  };

  // Manejar la validación en tiempo real
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      if(input.id === 'name') {
        validateName(input);
      }
      else if(input.id === 'email') {
        validateEmail(input);
      }
      else if (input.id === 'message') {
        validateMessage(input);
      }
    });
    input.addEventListener('input', () => {
      validateField(input);
    });
  });

  // Manejar el envío del formulario
  form.addEventListener('submit', function(e) {
    e.preventDefault();  // Evitar el envío real del formulario

    // Validar todos los campos antes de enviar
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      validateField(input);  // Validar cada campo individualmente

      // Si algún campo es inválido, no enviamos el formulario
      if (input.classList.contains('invalid')) {
        isValid = false;
      }
    });

    // Si el formulario es válido, mostramos el mensaje de éxito
    if (isValid) {
      console.log("Formulario enviado (simulado)");

      // Mostrar mensaje de éxito
      successMessage.classList.remove('hidden'); 
      form.classList.add('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 2000); // 2 segundos de espera antes de cerrar el modal
    } else {
      console.log("Formulario inválido, algunos campos están vacíos");
    }
  });
});
