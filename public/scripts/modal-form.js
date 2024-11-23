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

  // Función para validar un campo individual
  const validateField = (input) => {
    input.classList.remove('valid', 'invalid');

    if (input.value.trim() === "") {

      input.classList.add('invalid');
    } else {
      input.classList.add('valid');
    }
  };

  // Manejar la validación en tiempo real
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
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
