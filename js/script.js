$(document).ready(function () {

    var validEmail, validPhone, validUrl = false;
    var passLen = false;
    var passNo = false;

    function checkIfValid(value) {
        if (!value) {
            $('#error').removeClass('valid').addClass('invalid');
            return false;
        } else {
            $('#error').removeClass('invalid').addClass('valid');
            $('#error').html('<p>Thank You!</p>');
            return true;
        }
    }

    $('#email').keyup(function () {

        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var email = $(this).val();
        var isValid = pattern.test(email);
        validEmail = checkIfValid(isValid);
    }).focus(function () {
        $(this).next().html("<p id='error'>Please enter a valid email address!</p>").show("slow");
    }).blur(function () {
        if (!validEmail) {
            $(this).focus();
            $(this).next().html('<p id="error">Entry does not match expected pattern: ' + $(this).attr('placeholder') + '</p>');
        }
        else {
            $(this).next().hide("slow");
        }
    });


    $('#pass').keyup(function () {
        var pswd = $(this).val();
        if (pswd.length < 6) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            passLen = true;
            $('#length').removeClass('invalid').addClass('valid');

        }

        if (pswd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
            passNo = true;
        } else {
            $('#number').removeClass('valid').addClass('invalid');

        }

    }).focus(function () {
        $(this).next().html('<p id="error">At least <span id="number" class="bold invalid">one number</span> and at least <span id="length" class="bold invalid">6 characters</span></p>').show("slow");
    }).blur(function () {
        if (!passNo || !passLen) {
            $(this).focus();
            $(this).next().html('<p id="error">Entry does not match expected pattern: ' + $(this).attr('placeholder') + '</p>');
        }
        else {
            $(this).next().hide("slow");
        }
    });


    $('#phone').keyup(function () {
        var phone = $(this).val();
        var telPattern = /^(?:\+?614|0)[2-478](?:[ -]?[0-9]){8}$/i;
        var isValid = telPattern.test(phone);
        validPhone = checkIfValid(isValid);
    }).focus(function () {
        $(this).next().html("<p id='error'>Please enter a valid phone number!</p>").show("slow");
    }).blur(function () {
        var tel = $(this).val();
        console.log(tel);
        if (!tel.indexOf("+614")) {
            // var result = tel.replace("+614", "04");
            $(this).val(tel.replace("+614", "04"));
            console.log("replaced: ", tel);
        }
        if (!validPhone) {
            $(this).focus();
            $(this).next().html('<p id="error">Entry does not match expected pattern: ' + $(this).attr('placeholder') + '</p>');
        }
        else {
            $(this).next().hide("slow");
        }
    });


    $('#myurl').keyup(function () {
        var url = $(this).val();
        var urlPattern = /^http:\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/S*)?$/i;
        var isValid = urlPattern.test(url);
        validUrl = checkIfValid(isValid);
    }).focus(function () {
        $(this).next().html("<p id='error'>Please enter a valid url address!</p>").show("slow");
    }).blur(function () {
        var url = $(this).val();
        if (url.indexOf("http://")) {
            url = "http://" + url;
            $(this).val(url);
        }

        if (!validUrl) {
            $(this).focus();
            $(this).next().html('<p id="error">Entry does not match expected pattern: ' + $(this).attr('placeholder') + '</p>');
        }
        else {
            $(this).next().hide("slow");
        }
    });

    $('#myform').submit(function () {
        var abort = false;
        $('input[placeholder]').each(function () {
            // console.log(index,":", value, ":", $(this).val());
            if ($(this).val() === '') {
                $(this).next().html('This is a required field!').show("slow");
                abort = true;
            }
            if (validPhone === false || validEmail === false || validUrl === false || passNo === false || passLen === false) {
                abort = true;
            }
        }); // go through each required value

        if (abort) {
            return false;
        } else {
            return true;
        }
    })//on submit

});
