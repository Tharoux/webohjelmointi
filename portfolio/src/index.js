function contentButton(element) {
    document.getElementById("weeks").className = "navbar-collapse collapse";
    document.getElementById("contentFrame").src = "./weeks/" + element.id + ".html";
}