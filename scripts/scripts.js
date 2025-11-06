

// -----------------------TEMPORIZADOR---------------------------

const fechaObjetivo = new Date("December 20, 2025 22:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia > 0) {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
  } else {
    document.querySelector(".contador__titulo").textContent = "¡Es el día!";
    document.querySelector(".contador__tiempo").style.display = "none";
  }
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// --------------------------MUSICA----------------------------------

const audio = document.querySelector('.musica audio');
const playPauseButton = document.querySelector('.musica__button');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.add('musica__button--playing');
        playPauseButton.classList.remove('musica__button--paused');
    } else {
        audio.pause();
        playPauseButton.classList.remove('musica__button--playing');
        playPauseButton.classList.add('musica__button--paused');
    }
});

// -----------------PLAYLIST----------------------

document.addEventListener('DOMContentLoaded', function() {
    const botonEnviar = document.getElementById('playlistbtn');
    const nombreInput = document.getElementById('nombre');
    const cancionInput = document.getElementById('cancion');
    const linkInput = document.getElementById('link');
    const errorMensaje = document.getElementById('error-mensaje');
    const numeroWhatsapp = '543813004564';

    botonEnviar.addEventListener('click', function() {
        const nombre = nombreInput.value.trim();
        const cancion = cancionInput.value.trim();
        const link = linkInput.value.trim();

        if (!nombre || !cancion) {
            errorMensaje.textContent = "Por favor, completa tu nombre y el nombre de la canción.";
            return;
        } else {
            errorMensaje.textContent = "";
        }

        let mensaje = `Hola!, mi nombre es *${nombre}* quiero recomendar el siguiente tema:\n*${cancion}*`;

        if (link) {
            mensaje += `\nlink: ${link}`;
        }
        

        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsapp, '_blank');

        // Opcional: Limpiar los campos después de enviar
        nombreInput.value = '';
        cancionInput.value = '';
        linkInput.value = '';
    });
});



// -----------------DRESSCODE------------------------

document.addEventListener('DOMContentLoaded', function() {
  const botonEjemplo = document.querySelector('.dresscode__ejemplo');
  const lightbox = document.getElementById('lightbox');
  const botonCerrar = document.querySelector('.lightbox__cerrar');

  botonEjemplo.addEventListener('click', function() {
      lightbox.classList.add('active');
  });

  botonCerrar.addEventListener('click', function() {
      lightbox.classList.remove('active');
  });

  // Opcional: Cerrar el lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
          lightbox.classList.remove('active');
      }
  });
});

// ----------------REGALOS--------------------


document.addEventListener('DOMContentLoaded', function() {
  const botonDatos = document.querySelector('.regalos__button');
  const datosDiv = document.getElementById('datos');
  const botonesCopiar = document.querySelectorAll('.datos__copiar');
  const mensajeCopiado = document.getElementById('mensajeCopiado');

  botonDatos.addEventListener('click', function() {
      datosDiv.classList.toggle('mostrar');
  });

  botonesCopiar.forEach(boton => {
      boton.addEventListener('click', function() {
          const targetSelector = this.getAttribute('data-copy-target');
          const targetElement = datosDiv.querySelector(targetSelector);

          if (targetElement) {
              const textToCopy = targetElement.textContent;

              navigator.clipboard.writeText(textToCopy)
                  .then(() => {
                      mensajeCopiado.classList.add('mostrar');
                      setTimeout(() => {
                          mensajeCopiado.classList.remove('mostrar');
                      }, 1500);
                  })
                  .catch(err => {
                      console.error('Error al copiar al portapapeles:', err);
                      // Puedes mostrar un mensaje de error al usuario si lo deseas
                  });
          }
      });
  });
});


// --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function() {
  // Definir los números de teléfono
  const recipientNumber1 = '543813004564'; // Número para el primer botón
  const recipientNumber2 = '543815411429'; // Número para el segundo botón

  // Función para enviar mensaje por WhatsApp
  function sendMessage(phoneNumber) {
      const userName = document.getElementById('userFullName').value.trim();
      const userMessage = document.getElementById('customMessage').value.trim();
      const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');

      if (!attendanceStatus) {
          alert('Por favor, selecciona si asistirás o no.');
          return;
      }

      if (userName === '') {
          alert('Por favor, completa todos los campos antes de enviar.');
          return;
      }

      const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

      // Abre la URL de WhatsApp en una nueva pestaña
      window.open(whatsappLink, '_blank');


      // Limpiar los campos de entrada
      document.getElementById('userFullName').value = '';
      document.getElementById('customMessage').value = '';
      document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);

      // Volver al bloque de formulario
      document.getElementById('correo').scrollIntoView({ behavior: 'smooth' });
  }

  // Asignar eventos a los botones
  document.getElementById('botoncito1').addEventListener('click', function() {
      sendMessage(recipientNumber1);
  });

  document.getElementById('botoncito2').addEventListener('click', function() {
      sendMessage(recipientNumber2);
  });
});

