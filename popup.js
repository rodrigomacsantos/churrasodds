function convertAmericanToDecimal(oddStr) {
  const value = parseInt(oddStr);
  if (isNaN(value)) return "Valor inválido";

  if (value > 0) {
    return (value / 100 + 1).toFixed(2);
  } else {
    return (100 / Math.abs(value) + 1).toFixed(2);
  }
}

document.getElementById("converterManual").addEventListener("click", () => {
  const odd = document.getElementById("inputOdd").value.trim();
  const resultado = convertAmericanToDecimal(odd);
  document.getElementById("resultado").textContent = `Decimal: ${resultado}`;
});

document.getElementById("converterPagina").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
