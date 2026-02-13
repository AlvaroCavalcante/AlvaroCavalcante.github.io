$(function () {
    var currentPageURL = window.location.href;
    $("#header").load("header.html", function () {
        if (currentPageURL.includes("index.html")) {
        $("#link-home").addClass("active");
        } else if (currentPageURL.includes("about.html")) {
            $("#link-about").addClass("active");
        } else if (currentPageURL.includes("resume.html")) {
            $("#link-resume").addClass("active");
        } else if (currentPageURL.includes("port")) {
            $("#link-portfolio").addClass("active");
        } else if (currentPageURL.includes("artigos.html")) {
            $("#link-artigos").addClass("active");
        } else if (currentPageURL.includes("blog.html")) {
            $("#link-blog").addClass("active");
        } else if (currentPageURL.includes("aulas.html")) {
            $("#link-aulas").addClass("active");
        }

        // Add event listener to language toggle button to switch languages
        $('#language-toggle').on('click', function() {
            var newLang = i18next.language === 'en' ? 'pt' : 'en';
            i18next.changeLanguage(newLang, function(err, t) {
                if (err) return console.error(err);
                localStorage.setItem('language', newLang);
                updateContent();
            });
        });

        // Function to update the active language in the header based on selected language
        function updateContent() {
            $('[data-i18n]').each(function() {
                var key = $(this).data('i18n');
                $(this).text(i18next.t(key));
            });
        }
    });

    $("#footer").load("footer.html");
});
