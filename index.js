function changeCSS() {
    $(".error-text").css("display", "block");
    $(".submit-content>img").css("display", "block");
    $(".submit-content:focus-within").css("border", "1.5px solid hsl(0, 93%, 68%)");
}

$(".submit-content").validate({
    invalidHandler: function () {
        changeCSS();
    },
    onfocusout: function () {
        changeCSS();
    }
});

jQuery.extend(jQuery.validator.messages, {
    required: "",
    email: "",
});