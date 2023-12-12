const fonts = [
    { name: 'Montserrat', file: 'fonts/Montserrat.ttf' },
    { name: 'Samarkan', file: 'fonts/Samarkan.ttf' },
    { name: 'Aamora', file: 'fonts/Aamora.otf' },
    { name: 'CHALKZONE', file: 'fonts/CHALKZONE.woff' },
    { name: 'Paladise', file: 'fonts/Paladise.otf' },
    { name: 'Torney', file: 'fonts/Torney.otf' },
    // Add more fonts here
];

// Dynamically create @font-face rules
const styleSheet = document.createElement('style');
fonts.forEach(font => {
    styleSheet.appendChild(document.createTextNode(
        `@font-face {
            font-family: '${font.name}';
            src: url('${font.file}') format('${getFontFormat(font.file)}');
        }`
    ));
});
document.head.appendChild(styleSheet);

function getFontFormat(fontFile) {
    const extension = fontFile.split('.').pop();
    switch (extension) {
        case 'ttf': return 'truetype';
        case 'otf': return 'opentype';
        case 'woff': return 'woff';
        case 'woff2': return 'woff2';
        default: return 'truetype';
    }
}

const inputText = document.getElementById("inputText");
const fontSizeSelector = document.getElementById("fontSizeSelector");
const fontList = document.getElementById("fontList");

inputText.addEventListener("input", updateText);
fontSizeSelector.addEventListener("change", updateText);

function updateText() {
    const enteredText = inputText.value;
    const selectedFontSize = fontSizeSelector.value + 'px';
    fontList.innerHTML = ""; // Clear the font list

    fonts.forEach(font => {
        const fontBox = document.createElement("div");
        fontBox.classList.add("font-box");

        const fontName = document.createElement("div");
        fontName.classList.add("font-name");
        fontName.textContent = font.name;

        const fontPreview = document.createElement("div");
        fontPreview.classList.add("font-preview");
        fontPreview.style.fontFamily = font.name;
        fontPreview.style.fontSize = selectedFontSize;
        fontPreview.textContent = enteredText || "Sample Text";

        const copyButton = document.createElement("button");
        copyButton.classList.add("copy-button");
        copyButton.textContent = "Copy";
        copyButton.addEventListener("click", () => {
            copyTextToClipboard(fontPreview.textContent);
        });

        fontBox.appendChild(fontName);
        fontBox.appendChild(fontPreview);
        fontBox.appendChild(copyButton);

        fontList.appendChild(fontBox);
    });
}

function copyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Text copied to clipboard: " + text);
}