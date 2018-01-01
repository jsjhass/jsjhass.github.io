$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#pagecontent').load("home.html");
    $('#home').click(function () {
        $('#pagecontent').load("home.html");
    });
    $('#about').click(function () {
        $('#pagecontent').load("about.html");
    });
    $('#article').click(function () {
        $('#pagecontent').load("article.html");
    });
    $('#project').click(function () {
        $('#pagecontent').load("project.html");
    });
    $('#contact').click(function () {
        $('#pagecontent').load("contact.html");
    });
});