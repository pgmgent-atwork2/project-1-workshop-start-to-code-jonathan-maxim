function copyCode() {
  const code = document.getElementById("pong-code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      const copyBtn = document.getElementById("copy-btn");
      if (copyBtn) {
        copyBtn.textContent = "Gekopieerd!";
        setTimeout(() => {
          copyBtn.textContent = "Kopieer code";
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Kopiëren mislukt:", err);
    });
}

