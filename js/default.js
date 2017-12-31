$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#pagecontent').load("home.html");
    $('#home').click(function () {
        $('#pagecontent').hide().load("home.html").fadeIn("slow");
    });
    $('#about').click(function () {
        $('#pagecontent').hide().load("about.html").fadeIn("slow");
    });
    $('#article').click(function () {
        $('#pagecontent').hide().load("article.html").fadeIn("slow");
    });
    $('#project').click(function () {
        $('#pagecontent').hide().load("project.html").fadeIn("slow");
    });
    $('#contact').click(function () {
        $('#pagecontent').hide().load("contact.html").fadeIn("slow");
    });
});