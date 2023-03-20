var $anchors = document.querySelectorAll(".js-anchors");

if ($anchors) {
    $anchors.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const link = e.currentTarget.getAttribute("href").slice(1);

            e.currentTarget.classList.remove("open");

            if (document.querySelector(".js-menu")) {
                $(".js-btn-menu").removeClass("open");
                document.querySelector(".js-menu").classList.remove("active");
                $("body").removeClass("overflow");
            }
            if (window.innerWidth <= 768) {
                window.scrollTo({
                    top: document.querySelector(`#${link}`).offsetTop - 75,
                    behavior: "smooth",
            });
            } else {
                window.scrollTo({
                    top: document.querySelector(`#${link}`).offsetTop - 50,
                    behavior: "smooth",
            });
            }

        });
    });
}