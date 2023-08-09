const btnSendEmail = document.getElementById("send-email");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const user_message = document.getElementById("message");

const serviceID = "service_jr6kf7z";
const templateID = "template_4gxnm89";

emailjs.init("D87yrRIrFFult1XnG");

function mostrarError(titulo, texto) {
  Swal.fire({
    icon: "error",
    title: titulo,
    text: texto,
  });
}

function mostrarExito(titulo, texto) {
  Swal.fire({
    icon: "success",
    title: titulo,
    text: texto,
  });
}

function validarFormulario() {
  if (!user_name.value || !user_email.value || !user_message.value) {
    mostrarError("Campos Vacíos", "Por favor completa todos los campos.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user_email.value)) {
    mostrarError(
      "Formato de Email Inválido",
      "Por favor ingresa una dirección de correo válida."
    );
    return false;
  }

  return true;
}

function enviarEmail() {
  if (!validarFormulario()) {
    return;
  }

  emailjs
    .sendForm(serviceID, templateID, document.getElementById("contact-form"))
    .then(function () {
      mostrarExito(
        "Email enviado exitosamente",
        "Me pondré en contacto contigo lo antes posible."
      );
    })
    .catch(function () {
      mostrarError("Oops...", "Algo salió mal.");
    });
}

window.onload = function () {
  if (!btnSendEmail || !user_name || !user_email || !user_message) {
    mostrarError(
      "Elementos Faltantes",
      "Asegúrate de que los IDs sean correctos."
    );
    return;
  }

  btnSendEmail.addEventListener("click", function (event) {
    event.preventDefault();
    enviarEmail();
  });
};
