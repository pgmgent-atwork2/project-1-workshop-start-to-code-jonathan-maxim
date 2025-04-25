function copyCode() {
  const code = document.getElementById("pong-code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      alert("Code gekopieerd!");
    })
    .catch((err) => {
      console.error("Kopiëren mislukt:", err);
    });
}
