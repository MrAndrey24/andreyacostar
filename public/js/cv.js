const downloadBtn = document.getElementById("download-btn");

const cv1Link = "cv/andrey-acosta-cv-english.pdf";
const cv2Link = "cv/andrey-acosta-cv-spanish .pdf";

downloadBtn.addEventListener("click", function () {
  downloadCV(cv1Link);
  downloadCV(cv2Link);
});

function downloadCV(link) {
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.download = link.substring(link.lastIndexOf("/") + 1);
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
