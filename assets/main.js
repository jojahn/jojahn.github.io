function onContact() {
    window.location.href = "https://github.com/jojahn";
}

function appendStylesheet(file) {
    var link = document.createElement("link");
    link.href = "/assets/" + file + ".css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // appendStylesheet("dark");
}