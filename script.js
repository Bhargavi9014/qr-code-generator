function generateQRCode() {
  const qrText = document.getElementById("text").value.trim();
  const qrCodeContainer = document.getElementById("qrcode");

  qrCodeContainer.innerHTML = "";

  if (qrText !== "") {
    const qrCode = new QRCode(qrCodeContainer, {
      text: qrText,
      width: 200,
      height: 200,
      colorDark: "black",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    alert("Please enter text or URL to generate a QR code.");
  }
}
