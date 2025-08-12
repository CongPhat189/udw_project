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

                // tô sáng menu đang hoạt động
                if (selector === "header") {
                    highlightActiveMenu();
                }
            })
            .catch(error => {
                el.innerHTML = "Không thể tải file.";
                console.error(error);
            });
    }
}

function highlightActiveMenu() {
    const current = location.pathname.split("/").pop() || "index.html"; // cắt đường dẫn lấy teeh file
    const menuItems = document.querySelectorAll("header .nav-menu a");

    menuItems.forEach(a => {
        const href = a.getAttribute("href").replace("./", ""); // so sanh nếu đúng là  curr file thì file đo dang active
        if (href === current) {
            a.classList.add("active");
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {
    layoutPage("header", "/html/layout/header.html");
    layoutPage("footer", "/html/layout/footer.html");
});
