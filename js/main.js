var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 250,
    height: 250,
});

function makeCode() {
    var elText = document.getElementById("text");

    if (elText.value.length > 0) {
      document.getElementById("qrcode").style.display = "block"
      qrcode.makeCode(elText.value);
    }
    else
      document.getElementById("qrcode").style.display = "none"
}

makeCode();

input = document.getElementById("text")

input.addEventListener('input', makeCode);
