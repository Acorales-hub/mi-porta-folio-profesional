document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let valid = true;
    const inputs = document.querySelectorAll('input, textarea');
  
    inputs.forEach(input => {
      if (!input.value) {
        valid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  
    if (valid) {
      alert('Formulario enviado con éxito');
      // Aquí puedes añadir el código para enviar el formulario
    } else {
      alert('Por favor, complete todos los campos');
    }
  });
  