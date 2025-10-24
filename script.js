var changeTabNameButton = document.getElementById("changeTabNameButton");
var changeTabNameBox = document.getElementById("changeTabNameBox").value;
var changeTabIconButton = document.getElementById("changeTabIconButton");
var changeTabIconBox = document.getElementById("changeTabIconBox").value;

var cloakTools = document.getElementById("cloakTools");
var showCloakButton = document.getElementById("showCloakToolsButton");
var hideCloakButton = document.getElementById("hideCloakToolsButton");

var titleElement = document.getElementById("title");
var faviconElement = document.getElementById("favicon");

showCloakButton.addEventListener("click", function() {
    cloakTools.style.display = "block";
});

hideCloakButton.addEventListener("click", function() {
    cloakTools.style.display = "none";
});

changeTabNameButton.addEventListener("click", function() {
    var newTitle = document.getElementById("changeTabNameBox").value;
    titleElement.textContent = newTitle;
});

changeTabIconButton.addEventListener("click", function() {
    var newIconURL = document.getElementById("changeTabIconBox").value;
    faviconElement.href = newIconURL;
});
