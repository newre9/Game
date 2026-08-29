// =====================================================
// BAN VAKFI - ANA JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // ELEMENTLER
    // =================================================

    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");

    const languageSelector =
        document.querySelector(".language-selector");

    const languageButton =
        document.getElementById("languageButton");

    const languageDropdown =
        document.getElementById("languageDropdown");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const slides =
        document.querySelectorAll(".slide");

    const contactForm =
        document.querySelector(".contact-form");


    // =================================================
    // BURGER / MENÜ
    // =================================================

    if (burger && mobileMenu) {

        burger.addEventListener("click", function (e) {

            e.stopPropagation();

            burger.classList.toggle("active");

            mobileMenu.classList.toggle("active");

        });


        // Menü linklerine tıklanınca kapat

        const menuLinks =
            mobileMenu.querySelectorAll(".menu-link");

        menuLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                burger.classList.remove("active");

                mobileMenu.classList.remove("active");

            });

        });


        // Menü dışına tıklayınca kapat

        document.addEventListener("click", function (e) {

            if (
                mobileMenu.classList.contains("active") &&
                !mobileMenu.contains(e.target) &&
                !burger.contains(e.target)
            ) {

                mobileMenu.classList.remove("active");

                burger.classList.remove("active");

            }

        });

    }


    // =================================================
    // DİL DROPDOWN
    // =================================================

    if (languageSelector && languageButton) {

        languageButton.addEventListener("click", function (e) {

            e.stopPropagation();

            languageSelector.classList.toggle("active");

        });


        // Dropdown dışına tıklayınca kapat

        document.addEventListener("click", function (e) {

            if (
                !languageSelector.contains(e.target)
            ) {

                languageSelector.classList.remove("active");

            }

        });

    }


    // =================================================
    // DİL SİSTEMİ
    // =================================================

    let currentLang =
        localStorage.getItem("selectedLang") || "tr";


    // -------------------------------------------------
    // Dil verisini getir
    // -------------------------------------------------

    function getLanguageData(lang) {

        if (
            lang === "tr" &&
            typeof TR !== "undefined"
        ) {
            return TR;
        }


        if (
            lang === "ku" &&
            typeof KU !== "undefined"
        ) {
            return KU;
        }


        if (
            lang === "en" &&
            typeof EN !== "undefined"
        ) {
            return EN;
        }


        // Dil bulunamazsa Türkçe

        if (typeof TR !== "undefined") {
            return TR;
        }

        return {};

    }


    // -------------------------------------------------
    // Dil isimleri
    // -------------------------------------------------

    const languageNames = {

        tr: "TR",

        ku: "KU",

        en: "EN"

    };


    // =================================================
    // DİL DEĞİŞTİR
    // =================================================

    window.changeLang = function (lang) {

        currentLang = lang;


        const languageData =
            getLanguageData(lang);


        // ---------------------------------------------
        // METİNLER
        // ---------------------------------------------

        document
            .querySelectorAll("[data-lang]")
            .forEach(function (element) {

                const key =
                    element.getAttribute("data-lang");


                if (
                    languageData[key] !== undefined
                ) {

                    element.textContent =
                        languageData[key];

                }

            });


        // ---------------------------------------------
        // PLACEHOLDER
        // ---------------------------------------------

        document
            .querySelectorAll("[data-lang-placeholder]")
            .forEach(function (element) {

                const key =
                    element.getAttribute(
                        "data-lang-placeholder"
                    );


                if (
                    languageData[key] !== undefined
                ) {

                    element.placeholder =
                        languageData[key];

                }

            });


        // ---------------------------------------------
        // LOGO
        // ---------------------------------------------

        const logo =
            document.getElementById("siteLogo");


        if (logo) {

            if (lang === "tr") {

                logo.src =
                    "logo/ban_logo_tr.png";

            }

            else if (lang === "ku") {

                logo.src =
                    "logo/ban_logo_kurdi.png";

            }

            else if (lang === "en") {

                logo.src =
                    "logo/ban_logo_eng.png";

            }

        }


        // ---------------------------------------------
        // CURRENT LANGUAGE
        // ---------------------------------------------

        if (currentLanguage) {

            currentLanguage.textContent =
                languageNames[lang] || "TR";

        }


        // ---------------------------------------------
        // AKTİF DİL
        // ---------------------------------------------

        document
            .querySelectorAll(".language-option")
            .forEach(function (option) {

                option.classList.remove("active");


                const optionLang =
                    option.getAttribute(
                        "data-language"
                    );


                if (optionLang === lang) {

                    option.classList.add("active");

                }

            });


        // ---------------------------------------------
        // HTML LANG
        // ---------------------------------------------

        document.documentElement.lang =
            lang;


        // ---------------------------------------------
        // LOCAL STORAGE
        // ---------------------------------------------

        localStorage.setItem(
            "selectedLang",
            lang
        );
//rapor için hemen güncelmesi için bu fonksiyon çağırılır 
           // RAPOR PDF
    if (typeof updateOpenReportLanguage === "function") {
        updateOpenReportLanguage();
    }
        // ---------------------------------------------
        // DROPDOWN KAPAT
        // ---------------------------------------------

         // DROPDOWN KAPAT
    if (languageSelector) {
        languageSelector.classList.remove("active");
    }

    if (languageDropdown) {
        languageDropdown.classList.remove("active");
    }

    };


    // =================================================
    // SAYFA AÇILINCA KAYITLI DİLİ UYGULA
    // =================================================

    if (
        typeof TR !== "undefined" ||
        typeof KU !== "undefined" ||
        typeof EN !== "undefined"
    ) {

        changeLang(currentLang);

    }


    // =================================================
    // HERO SLIDER
    // =================================================

    if (slides.length > 0) {

        let currentSlide = 0;


        // Başlangıçta bütün slide'ları kapat

        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        // İlk slide

        slides[0].classList.add("active");


        // Birden fazla görsel varsa çalıştır

        if (slides.length > 1) {

            setInterval(function () {

                slides[currentSlide]
                    .classList.remove("active");


                currentSlide++;


                if (
                    currentSlide >= slides.length
                ) {

                    currentSlide = 0;

                }


                slides[currentSlide]
                    .classList.add("active");

            }, 3000);

        }

    }


  


    // =================================================
    // ESC TUŞU İLE MENÜLERİ KAPAT
    // =================================================

    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Escape") {

                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                }


                if (burger) {

                    burger.classList.remove(
                        "active"
                    );

                }


                if (languageSelector) {

                    languageSelector.classList.remove(
                        "active"
                    );

                }

            }

        }
    );

});


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const name = document
            .getElementById("nameInput")
            .value
            .trim();

        const email = document
            .getElementById("emailInput")
            .value
            .trim();

        const message = document
            .getElementById("messageInput")
            .value
            .trim();

        const button = document.getElementById("submitButton");
        const status = document.getElementById("formStatus");

        if (!name || !email || !message) {

            status.textContent =
                "Lütfen tüm alanları doldurun.";

            status.style.color = "red";

            return;
        }

        button.disabled = true;
        button.textContent = "Gönderiliyor...";

        status.textContent = "";

        try {

            const response = await fetch(
                "BURAYA_GOOGLE_APPS_SCRIPT_URL",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },

                    body: JSON.stringify({
                        name: name,
                        email: email,
                        message: message
                    })
                }
            );

            const result = await response.json();

            if (result.success) {

                status.textContent =
                    "✓ Mesajınız başarıyla gönderildi.";

                status.style.color = "green";

                contactForm.reset();

            } else {

                throw new Error("Kayıt başarısız");

            }

        } catch (error) {

            console.error(error);

            status.textContent =
                "Mesaj gönderildi";

            status.style.color = "red";

        }

        button.disabled = false;
        button.textContent = "Gönder";

    });

}