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
  });
}

function showSuccess(title, text) {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
  });
}

function validateForm() {
  if (!user_name.value || !user_email.value || !user_message.value) {
    showError("One or more fields are empty.", "Check the form and try again.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user_email.value)) {
    showError("Invalid email format.", "Please enter a valid email address.");
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
        "Email sent successfully",
        "I will contact you as soon as possible"
      );
    })
    .catch(function () {
      showError("Oops...", "Something went wrong!");
    });
}

window.onload = function () {
  if (!btnSendEmail || !user_name || !user_email || !user_message) {
    showError(
      "One or more elements are missing.",
      "Make sure IDs are correct."
    );
    return;
  }

  btnSendEmail.addEventListener("click", function (event) {
    event.preventDefault();
    sendEmail();
  });
};
