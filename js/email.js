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
    showError("Empty Fields", "Please check the form and try again.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user_email.value)) {
    showError("Invalid Email Format", "Please enter a valid email address.");
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
        "Email Sent Successfully",
        "I will get in touch with you as soon as possible."
      );
    })
    .catch(function () {
      showError("Oops...", "Something went wrong!");
    });
}

window.onload = function () {
  if (!btnSendEmail || !user_name || !user_email || !user_message) {
    showError("Missing Elements", "Make sure the IDs are correct.");
    return;
  }

  btnSendEmail.addEventListener("click", function (event) {
    event.preventDefault();
    sendEmail();
  });
};
