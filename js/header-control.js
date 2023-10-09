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
    });

    $("#footer").load("footer.html");
});