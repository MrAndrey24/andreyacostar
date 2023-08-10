const btnSendEmail = document.getElementById("send-email");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const user_message = document.getElementById("message");

const serviceID = "service_jr6kf7z";
const templateID = "template_4gxnm89";

emailjs.init("D87yrRIrFFult1XnG");

function showError(title, text) {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    customClass: {
      popup: "swal2-popup",
      title: "swal2-title",
      content: "swal2-content",
      icon: "swal2-icon",
      confirmButton: "swal2-confirm",
    },
  });
}

function showSuccess(title, text) {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    customClass: {
      popup: "swal2-popup",
      title: "swal2-title",
      content: "swal2-content",
      icon: "swal2-icon",
      confirmButton: "swal2-confirm",
    },
  });
}

function validateForm() {
  if (!user_name.value || !user_email.value || !user_message.value) {
    showError(
      "Campos Vacíos",
      "Por favor, verifica el formulario e intenta nuevamente."
    );
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user_email.value)) {
    showError(
      "Formato de correo inválido",
      "Por favor ingresa una dirección de correo válida."
    );
    return false;
  }

  return true;
}

function sendEmail() {
  if (!validateForm()) {
    return;
  }

  emailjs
    .sendForm(serviceID, templateID, document.getElementById("contact-form"))
    .then(function () {
      showSuccess(
        "Correo enviado exitosamente",
        "Me pondré en contacto contigo lo antes posible"
      );
    })
    .catch(function () {
      showError("Oops...", "¡Algo salió mal!");
    });
}

window.onload = function () {
  if (!btnSendEmail || !user_name || !user_email || !user_message) {
    showError(
      "Elementos faltantes",
      "Asegúrate de que los IDs sean correctos."
    );
    return;
  }

  btnSendEmail.addEventListener("click", function (event) {
    event.preventDefault();
    sendEmail();
  });
};
