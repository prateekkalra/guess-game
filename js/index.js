function getrandomnumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function () {
    $('#tsfd').hide();
    var rand = getrandomnumber(1,100);

    var guesspanel = $('#guesspanel');
    var hintpanel = $('#hintpanel');

    var input = $('#gno');
    var guessbtn = $('#gbtn');

    var cbox = $('.switch input');
    var ischecked = true;
    var toohigh = false,toolow=false;
    var diffbox = $('input[name=radio]:radio');
    var max = $('#max');
    input.on('keyup',function (event) {
       if(event.keyCode===13){
           guessbtn.click();
       }
    });
    cbox.change(function () {
        ischecked = cbox.is(":checked");
        if(!ischecked) {
            hintpanel.css("background-color", "black");
            $('#tsfd').show();
        }
        else {
            hintpanel.css("background-color","white");
            $('#tsfd').hide();
        }
    });
    var maxstr = '';
    diffbox.change(function () {
        var diff = $('input[name=radio]:checked').val();
        $('#resetbtn').click();
        switch (diff){
            case '0':
                rand = getrandomnumber(1,10);
                maxstr = '10';
                if(ischecked){
                    cbox.click();
                }
                $('.hbox').hide();
                break;
            case '1':
                rand = getrandomnumber(1,100);
                maxstr = '100';
                if(!ischecked){
                    cbox.click();
                }
                $('.hbox').show();
                break;
            case '2':
                rand = getrandomnumber(1,1000);
                maxstr = '1000';
                if(!ischecked){
                    cbox.click();
                }
                $('.hbox').show();
                break;
            case '3':
                rand = getrandomnumber(1,10000);
                maxstr = '10000';
                if(!ischecked){
                    cbox.click();
                }
                $('.hbox').show();
                break;
        }
        max.html(maxstr);
    });



    var end=false;
    var nog=10;
    var count=0;
    (guessbtn).click(function () {
        $('.hbox').hide();
        $('#diffchoose').hide();
        count++;
        var gval = input.val();

        if(gval<rand){
            toohigh = false;
            toolow = true;
            end=false;
        }
        else if(gval>rand){
            toolow = false;
            toohigh = true;
            end=false;
        }
        else{
            $("#myModal").modal();
            end=true;
        }
        var msg='';
        if(toohigh==true){
            msg='Too High';
        }
        else{
            msg='Too Low';
        }


        var prod=1,cdig=null;

        var randstr = rand.toString();
        for(var i=0;i<randstr.length;i++){
            prod = prod*parseInt(randstr[i]);
        }
        var r2 = Math.floor(Math.random()*randstr.length);
        cdig = randstr[r2];


        var div2,div3,div5,product,condigit;
        if(rand%2==0){
            div2="The number is even.";
        }
        else{
            div2="The number is odd";
        }

        if(rand%3==0){
            div3="Sum of the digits is divisible by 3";
        }
        else{
            div3="Sum of the digits is not divisible by 3";
        }

        if(rand%5==0){
            div5="The number is divisible by 5.";
        }
        else{
            div5="The number is not divisible by 5";
        }

        product = "Product of the digits is "+prod+".";
        condigit = cdig+" is one of the digits of the number.";

        if(count==10){
            $("#myModal2").modal();
        }

        if(gval.toString()!=''&&count<11&&end==false) {
            $('.gcontent').append('<h4>'+gval+'('+msg+')'+'<h4>');
            if(ischecked){
                switch(nog){
                    case 10:
                        $('.hcontent').append('<h4>'+div2+'<h4>');
                        break;
                    case 8:
                        $('.hcontent').append('<h4>'+product+'<h4>');
                        break;
                    case 6:
                        $('.hcontent').append('<h4>'+div3+'<h4>');
                        break;
                    case 4:
                        $('.hcontent').append('<h4>'+div5+'<h4>');
                        break;
                    case 2:
                        $('.hcontent').append('<h4>'+condigit+'<h4>');
                        break;
                }
            }

            nog--;
            $('#guesses').text(count);

        }






        input.val(null);

   });

    $('#resetbtn').click(function () {
       $('.gcontent').empty();
       $('.hcontent').empty();
       count=0;
        $('#guesses').text(count);
        $('.hbox').show();
        $('#diffchoose').show();

        var diff = $('input[name=radio]:checked').val();
        if(diff=='0'){
            $('.hbox').hide();
        }


    });





    $('#clw').click(function () {
        $('#resetbtn').click();
    });

});