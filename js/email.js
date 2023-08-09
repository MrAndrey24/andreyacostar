const btnSendEmail = document.getElementById("send-email");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const user_message = document.getElementById("message");

const serviceID = "service_jr6kf7z";
const templateID = "template_4gxnm89";

emailjs.init("D87yrRIrFFult1XnG");

window.onload = function () {
  if (!btnSendEmail || !user_name || !user_email || !user_message) {
    Swal.fire({
      icon: "error",
      title: "One or more elements are missing. Make sure IDs are correct.",
      text: "Check the form and try again.",
    });
    return;
  }

  btnSendEmail.addEventListener("click", function (event) {
    event.preventDefault();

    if (!user_name.value || !user_email.value || !user_message.value) {
      console.error("One or more input fields are empty.");
      return;
    }

    // Continue with sending email
    emailjs
      .sendForm(serviceID, templateID, document.getElementById("contact-form"))
      .then(function () {
        Swal.fire({
          icon: "success",
          title: "Email sent successfully",
          text: "I will contact you as soon as possible",
        });
      })
      .catch(function () {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  });
};
