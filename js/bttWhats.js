function sendToWhats() {
  const bttWhats = document.getElementById("bttWhats");
  
  bttWhats.addEventListener("click", function (e) {
    const tel = document.getElementById('tel').value;
    const textWhats = document.getElementById("text").innerText;
    const textCode = encodeURIComponent(textWhats);
    const linkWhats = `https://wa.me/${tel}?text=${textCode}`;
    window.open(linkWhats, "_blank");
  });
}

export default sendToWhats;