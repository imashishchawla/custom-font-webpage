<!DOCTYPE html>
<html>
<head>
    <title>Font Text Editor</title>
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="header">
        <img src="your-logo-url.png" alt="Logo">
        <h1>Font Text Editor</h1>
    </div>
    <div class="container">
        <div class="editor">
            <textarea id="inputText" placeholder="Write your text here"></textarea>
            <select id="fontSizeSelector">
                <option value="12">12px</option>
                <option value="14">14px</option>
                <option value="16" selected>16px</option>
                <option value="18">18px</option>
                <option value="20">20px</option>
                <!-- Add more options as needed -->
            </select>
            <div class="font-container" id="fontList"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
