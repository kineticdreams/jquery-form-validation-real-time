$(document).ready(function () {


    var validEmail, validPhone, validUrl = false;
    var passLen = false;
    var passNo = false;
    var placeholder = $('input[placeholder]').text();

//     $(function()
//     {
// //handle the click for each of 'li'
//         $('ul#services li').click(function()
//         {
// //toggle the image
//             var newimg =$('img',this).attr('src') == 'images/tick.png' ? 'images/cross.png' : 'images/tick.png';
//             /*
//              notice the second parameter to $() is the context.
//              'this' is the 'li' that was clicked.*/
//             $('img', this).attr('src',newimg);
//         });
//     });

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
console.log(validEmail);
    }).focus(function () {
        $(this).next().html("<p id='error'>Please enter a valid email address!</p>").show("slow");
    }).blur(function () {
        if (validEmail === false) {
            $(this).focus();
            $(this).next().html('<p id="error">Entry does not match expected pattern: ' + $(this).attr('placeholder') + '</p>');
        } // isValid test
        $(this).next().hide("slow");
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
        $(this).next().hide("slow");
    });


    $('#phone').keyup(function () {
        var phone = $(this).val();
        var telPattern = /^04 ?(?:(?:[01] ?[0-9]|2 ?[0-57-9]|3 ?[1-9]|4 ?[7-9]|5 ?[018]) ?[0-9]|3 ?0 ?[0-5])(?: ?[0-9]){5}$/i;
        var isValid = telPattern.test(phone);
        validPhone = checkIfValid(isValid);
        return validPhone;
    }).focus(function () {
        $(this).next().html("<p id='error'>Please enter a valid phone number!</p>").show("slow");
    }).blur(function () {
        $(this).next().hide("slow");
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
            $("#myurl").val(url);
        }
        $(this).next().hide("slow");
    });

    $('#myform').submit(function () {
        var abort = false;
        $('input[placeholder]').each(function () {
            // console.log(index,":", value, ":", $(this).val());
            if ($(this).val() === '') {
                $(this).next().html('This is a required field!').show("1000");
                abort = true;
            }
            if (validPhone === false || validEmail === false || validUrl === false || passNo === false || passLen === false){
                abort = true;
            }
        }); // go through each required value

        if (abort) {
            return false;
        } else {
            return true;
        }
    })//on submit

    // $('input[placeholder]').blur(function() {
    //
    //     var myPattern = $(this).attr('pattern');
    //     var myPlaceholder = $(this).attr('placeholder');
    //     var isValid = $(this).val().search(myPattern) >= 0;
    //
    //     if (!isValid) {
    //         $(this).focus();
    //         $(this).after('<div class="invalid">Entry does not match expected pattern: ' + myPlaceholder + '</div>');
    //     } // isValid test
    // }); // onblur

});
