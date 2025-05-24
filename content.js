function convertAmericanToDecimal(odd) {
  const value = parseInt(odd);
  if (isNaN(value)) return odd;

  let decimal;
  if (value > 0) {
    decimal = (value / 100 + 1).toFixed(2);
  } else {
    decimal = (100 / Math.abs(value) + 1).toFixed(2);
  }
  return decimal;
}

function replaceOdds(textNode) {
  const regex = /([+-]\d{3})/g;
  textNode.nodeValue = textNode.nodeValue.replace(regex, match => {
    const decimal = convertAmericanToDecimal(match);
    return `${decimal}`;
  });
}

function walk(node) {
  if (node.nodeType === 3) {
    replaceOdds(node);
  } else if (node.nodeType === 1 && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
    for (let child of node.childNodes) {
      walk(child);
    }
  }
}

walk(document.body);
