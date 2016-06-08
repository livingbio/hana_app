function main() {
    // $('.sideBar').hide();
    $('.Toggle-sideBar').on('click', function(){
        if( $(".sideBar").css("margin-left") =='0px' ) {
            $('.sideBar').animate({ 'margin-left': '-270px' }, 'slow', function(){
                // $('.sideBar').hide();
            });
            $('body').animate({ 'margin-left': '0px', 'margin-right': '0px' }, 'slow');
        }
        else {
            // $('.sideBar').show();
            $('.sideBar').animate({ 'margin-left': '0px' }, 'slow');
            $('body').animate({ 'margin-left': '270px', 'margin-right': '-270px' }, 'slow');
        }
    });
}

$(document).ready(main);
