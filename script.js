// la methode .css permet de changer des propriétés dans le css
$(document).ready(function () {
    $("#texte").on({
        mouseenter: function () {
            $(this).css({ "font-family": "Courier" });
        }
    });
});