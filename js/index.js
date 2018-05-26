function getrandomnumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function () {
    $('#tsfd').hide();
    let rand = getrandomnumber(1,100);

    let guesspanel = $('#guesspanel');
    let hintpanel = $('#hintpanel');

    let input = $('#gno');
    let guessbtn = $('#gbtn');

    let cbox = $('.switch input');
    let ischecked = true;
    let toohigh = false,toolow=false;
    let diffbox = $('input[name=radio]:radio');
    let max = $('#max');
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
    let maxstr = '';
    diffbox.change(function () {
        let diff = $('input[name=radio]:checked').val();
        // $('#resetbtn').click();
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
    
    let end=false;
    let nog=10;
    let count=0;
    (guessbtn).click(function () {
        let gval = input.val();
  		/*console.log(count);
  		console.log(nog);*/

        if(String(gval)!=''&&count<10&&end==false) {
        	$('.hbox').hide();
        $('#diffchoose').hide();
        count++;

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
        let msg='';
        if(toohigh==true && !end){
            msg='Too High';
        }
        else if(toolow==true && !end){
            msg='Too Low';
        }
		else{
			msg='Correct';
		}

        let prod=1,cdig=null;

        let randstr = rand.toString();
        for(let i=0;i<randstr.length;i++){
            prod = prod*parseInt(randstr[i]);
        }
        let r2 = Math.floor(Math.random()*randstr.length);
        cdig = randstr[r2];

        let div2,div3,div5,product,condigit;
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
        	$('#lost_msg').text('The number was '+rand);
            $("#myModal2").modal();
        }
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
