// Obtén la referencia al botón de descarga
const downloadBtn = document.getElementById("download-btn");

// Define los enlaces de los dos CVs
const cv1Link = "cv/CV-Andrey_Acosta_Ramirez.pdf";
const cv2Link = "cv/CV-Andrey_Acosta_Ramirez.pdf";

// Agrega un evento de clic al botón de descarga
downloadBtn.addEventListener("click", function () {
  // Descarga los dos CVs
  downloadCV(cv1Link);
  downloadCV(cv2Link);
});

// Función para descargar un archivo dado su enlace
function downloadCV(link) {
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.download = link.substring(link.lastIndexOf("/") + 1);
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
