/* =====================================================
                    MENU MOBILE
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Tutup menu ketika link diklik */

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
                    NAVBAR SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(10, 30, 17, 0.97)";

    } else {

        navbar.style.background =
            "rgba(15, 39, 24, 0.78)";

    }

});


/* =====================================================
                 ANIMASI SAAT SCROLL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (
            position <
            screenHeight - 100
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =====================================================
                    PARALLAX HERO
===================================================== */

const hero =
    document.querySelector(".hero");

const sun =
    document.querySelector(".sun");


window.addEventListener("scroll", function () {

    const scroll =
        window.scrollY;


    if (
        hero &&
        scroll < window.innerHeight
    ) {

        hero.style.backgroundPosition =
            `center ${scroll * 0.25}px`;


        if (sun) {

            sun.style.transform =
                `translateY(${scroll * 0.15}px)`;

        }

    }

});


/* =====================================================
                 EFEK FOTO MOUSE
===================================================== */

const photoElements =
    document.querySelectorAll(
        ".about-image, .mushola-image, .school-image, .bridge-image"
    );


photoElements.forEach(function (photo) {


    photo.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                photo.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                ((y / rect.height) - .5) * -4;


            const rotateY =
                ((x / rect.width) - .5) * 4;


            photo.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    photo.addEventListener(
        "mouseleave",
        function () {

            photo.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        }
    );

});


/* =====================================================
                    TAHUN FOOTER
===================================================== */

const copyright =
    document.getElementById(
        "copyright"
    );


copyright.textContent =
    "© " +
    new Date().getFullYear() +
    " Desa Semayang. Website Desa.";