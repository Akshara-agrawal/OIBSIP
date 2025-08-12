const buttons = document.querySelectorAll(".but-blog");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});



