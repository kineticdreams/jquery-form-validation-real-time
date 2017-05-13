$(document).ready(function () {


    var validEmail, validPhone, validUrl = false;
    var passLen = false;
    var passNo = false;

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
        console.log("this = ", this);
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
        var span = $(this).next();
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var email = $(this).val();
        var isValid = pattern.test(email);
        // console.log('error: ', $('#email + span').val());
        if (span.val() === ''){
            span.addClass('on');
        }
        validEmail = checkIfValid(isValid);
        // console.log("email", validEmail);
    }).focus(function () {
        $(this).next().html("<strong id='error'>Please enter a valid email address!</strong>");
        $('#formError').html("<p id='error'>Please enter a valid email address!</p>").show();
    }).blur(function () {
        $('#formError').hide();
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
        console.log(passLen, passNo);
    }).focus(function () {
        $('#formError').html('<p>Password requirements: at least <span id="number" class="bold invalid">one number</span> and at least <span id="length" class="bold invalid">6 characters</span></p>').show();
    }).blur(function () {
        $('#formError').hide();
    });


    $('#phone').keyup(function () {
        var phone = $(this).val();
        var telPattern = /^04 ?(?:(?:[01] ?[0-9]|2 ?[0-57-9]|3 ?[1-9]|4 ?[7-9]|5 ?[018]) ?[0-9]|3 ?0 ?[0-5])(?: ?[0-9]){5}$/i;
        var isValid = telPattern.test(phone);
        // console.log(phone, isValid);
        validPhone = checkIfValid(isValid);
        console.log("valid phone", validPhone);
        return validPhone;

    }).focus(function () {
        $('#formError').html("<p id='error'>Please enter a valid phone number!</p>").show();
    }).blur(function () {
        $('#formError').hide();
    });


    $('#myurl').keyup(function () {
        var url = $(this).val();
        var urlPattern = /^http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/S*)?$/i;
        var isValid = urlPattern.test(url);
        console.log(isValid);
        validUrl = checkIfValid(isValid);
    }).focus(function () {
        $('#formError').html("<p id='error'>Please enter a valid url address!</p>").show();
    }).blur(function () {
        var url = $(this).val();
        console.log(url);
        if (url.indexOf("http://")) {
            url = "http://" + url;
            $("#myurl").val(url);
            console.log(url);
        }
        $('#formError').hide();
    });

    $('#myform').submit(function () {
        var abort = false;
        $('input[placeholder]').each(function () {
            // console.log(index,":", value, ":", $(this).val());
            if ($(this).val() === '' || validPhone === false || validEmail === false || validUrl === false || passNo === false || passLen === false) {
                $(this).next().html('This is a required field!').addClass("on");

                // console.log($(this).after());
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
