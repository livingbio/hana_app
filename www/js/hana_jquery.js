function main() {
    $(document).on('click', '.Toggle-sideBar',function(){

        if( $('body').css("margin-left") =='270px' ){
            $('body').animate({ 'margin-left': '0px', 'margin-right': '0px' }, 'slow');
        }
        else {
            $('body').animate({ 'margin-left': '270px', 'margin-right': '-270px' }, 'slow');
        }
    });

    $('.DataBlock').click(function () {
        $('.DataBlock').removeClass('is-shown');
        $(this).addClass('is-shown');
    });

}

$(document).ready(main);
