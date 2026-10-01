(function () {
    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    var btn = document.getElementById("mobile-menu-btn");
    var menu = document.getElementById("mobile-menu");

    if (!btn || !menu) {
        return;
    }

    function setMenuOpen(open) {
        menu.classList.toggle("hidden", !open);
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    btn.addEventListener("click", function () {
        var isHidden = menu.classList.contains("hidden");
        setMenuOpen(isHidden);
    });

    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuOpen(false);
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });
})();
