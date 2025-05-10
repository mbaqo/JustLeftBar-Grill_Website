const highlightNavLink = () => {
    const buttons = document.querySelectorAll(".nav-buttons .btn a");

    buttons.forEach((button) => {
        if (window.location.pathname.includes(button.href.substring(button.href.indexOf("0/") + 1))) {
            button.style.color = "var(--color-yellow)";
        } else {
            button.style.color = "#fff";
        }
    })
};

highlightNavLink();