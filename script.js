function generate(name) {
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  const tops = [
    "a striped t-shirt",
    "a silk blouse",
    "a cozy sweater",
    "a denim jacket",
    "a white shirt"
  ];

  const bottoms = [
    "skinny jeans",
    "a leather mini skirt",
    "flared trousers",
    "high-waisted shorts",
    "a pleated skirt"
  ];

  const shoes = [
    "sneakers",
    "ankle boots",
    "loafers",
    "high heels",
    "flats"
  ];

  const randomTop = tops[Math.floor(Math.random() * tops.length)];
  const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
  const randomShoes = shoes[Math.floor(Math.random() * shoes.length)];

  const message = `${name}, your outfit for the day is: ${randomTop}, ${randomBottom}, and ${randomShoes}.`;

  document.getElementById('output').innerText = message;
  
  restyle();
}

// JavaScript function to randomly change styles
function restyle() {
  const outputElement = document.getElementById('output');

  const colors = ["#34568B", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7", "#009B77", "#DD4124", "#D65076", "#45B8AC", "#EFC050", "#5B5EA6"];
  const fontSizes = ["16px", "20px", "24px", "28px", "32px"];
  const fonts = ["'Arial', sans-serif", "'Times New Roman', serif", "'Courier New', monospace", "'Lucida Console', monospace", "'Trebuchet MS', sans-serif"];

  // Random color, font-size, and font
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  // Random styles for the output element
  outputElement.style.color = randomColor;
  outputElement.style.fontSize = randomFontSize;
  outputElement.style.fontFamily = randomFont;
  outputElement.style.transition = 'all 0.3s ease';
  
  // Text shadow 
  outputElement.style.textShadow = "1px 1px 2px #000";
}

