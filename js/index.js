function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).ready(function () {
    $('#tsfd').hide();
    let rand = getRandomNumber(1, 100);

    let guessPanel = $('#guesspanel');
    let hintPanel = $('#hintpanel');

    let input = $('#gno');
    let guessBtn = $('#gbtn');

    let cbox = $('.switch input');
    let isChecked = true;
    let isNumberTooHigh = false, isNumberTooLow = false;
    let diffBox = $('input[name=radio]:radio');
    let max = $('#max');
    input.on('keyup', function (event) {
        if (event.keyCode === 13) {
            guessBtn.click();
        }
    });
    cbox.change(function () {
        isChecked = cbox.is(":checked");
        if (!isChecked) {
            hintPanel.css("background-color", "black");
            $('#tsfd').show();
        }
        else {
            hintPanel.css("background-color", "white");
            $('#tsfd').hide();
        }
    });
    let maxStr = '';
    diffBox.change(function () {
        let diff = $('input[name=radio]:checked').val();
        // $('#resetbtn').click();
        switch (diff) {
            case '0':
                rand = getRandomNumber(1, 10);
                maxStr = '10';
                if (isChecked) {
                    cbox.click();
                }
                $('.hbox').hide();
                break;
            case '1':
                rand = getRandomNumber(1, 100);
                maxStr = '100';
                if (!isChecked) {
                    cbox.click();
                }
                $('.hbox').show();
                break;
            case '2':
                rand = getRandomNumber(1, 1000);
                maxStr = '1000';
                if (!isChecked) {
                    cbox.click();
                }
                $('.hbox').show();
                break;
            case '3':
                rand = getRandomNumber(1, 10000);
                maxStr = '10000';
                if (!isChecked) {
                    cbox.click();
                }
                $('.hbox').show();
                break;
        }
        max.html(maxStr);
    });

    let end = false;
    let nog = 10;
    let count = 0;
    (guessBtn).click(function () {
        let gval = input.val();
        /*console.log(count);
        console.log(nog);*/

        if (String(gval) != '' && count < 10 && end == false) {
            $('.hbox').hide();
            $('#diffchoose').hide();
            count++;

            if (gval < rand) {
                isNumberTooHigh = false;
                isNumberTooLow = true;
                end = false;
            }
            else if (gval > rand) {
                isNumberTooLow = false;
                isNumberTooHigh = true;
                end = false;
            }
            else {
                $("#myModal").modal();
                end = true;
            }
            let msg = '';
            if (isNumberTooHigh == true && !end) {
                msg = 'Too High';
            }
            else if (isNumberTooLow == true && !end) {
                msg = 'Too Low';
            }
            else {
                msg = 'Correct';
            }

            let prod = 1, cdig = null;

            let randStr = rand.toString();
            for (let i = 0; i < randStr.length; i++) {
                prod = prod * parseInt(randStr[i]);
            }
            let r2 = Math.floor(Math.random() * randStr.length);
            cdig = randStr[r2];

            let div2, div3, div5, product, condigit;
            if (rand % 2 == 0) {
                div2 = "The number is even.";
            }
            else {
                div2 = "The number is odd";
            }

            if (rand % 3 == 0) {
                div3 = "Sum of the digits is divisible by 3";
            }
            else {
                div3 = "Sum of the digits is not divisible by 3";
            }

            if (rand % 5 == 0) {
                div5 = "The number is divisible by 5.";
            }
            else {
                div5 = "The number is not divisible by 5";
            }

            product = "Product of the digits is " + prod + ".";
            condigit = cdig + " is one of the digits of the number.";

            if (count == 10) {
                $('#lost_msg').text('The number was ' + rand);
                $("#myModal2").modal();
            }
            $('.gcontent').append('<h4>' + gval + '(' + msg + ')' + '<h4>');
            if (isChecked) {
                switch (nog) {
                    case 10:
                        $('.hcontent').append('<h4>' + div2 + '<h4>');
                        break;
                    case 8:
                        $('.hcontent').append('<h4>' + product + '<h4>');
                        break;
                    case 6:
                        $('.hcontent').append('<h4>' + div3 + '<h4>');
                        break;
                    case 4:
                        $('.hcontent').append('<h4>' + div5 + '<h4>');
                        break;
                    case 2:
                        $('.hcontent').append('<h4>' + condigit + '<h4>');
                        break;
                }
            }
            nog--;
            $('#guesses').text(count);
        }

        input.val(null);
    });

    $('#resetbtn').click(function () {
        /* $('.gcontent').empty();
         $('.hcontent').empty();
         count=0;
         nog=10;
         end=false;
          $('#guesses').text(count);
          $('.hbox').show();
          $('#diffchoose').show();
  
          let diff = $('input[name=radio]:checked').val();
          if(diff=='0'){
              $('.hbox').hide();
          }*/
        //Refresh Page rather than manual refresh due to some issues 
        location.reload();
    });

    $('#clw').click(function () {
        $('#resetbtn').click();
    });
    $('#cll').click(function () {
        $('#resetbtn').click();
    });

});
