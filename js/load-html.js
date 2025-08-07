function layoutPage(selector, file) {
    const el = document.querySelector(selector);
    if (el) {
        fetch(file)
            .then(response => {
                if (!response.ok) throw new Error(`Lỗi tải ${file}`);
                return response.text();
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(error => {
                el.innerHTML = "Không thể tải file.";
                console.error(error);
            });
    }
}

window.addEventListener("DOMContentLoaded", function () {
    layoutPage("header", "/html/layout/header.html");
    layoutPage("footer", "/html/layout/footer.html");
});