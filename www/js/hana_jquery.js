function main() {
    $('.Toggle-sideBar').on('click', function(){
        if( $('body').css("margin-left") =='270px' ) {
            $('body').animate({ 'margin-left': '0px', 'margin-right': '0px' }, 'slow');
        }
        else {
            $('body').animate({ 'margin-left': '270px', 'margin-right': '-270px' }, 'slow');
        }
    });
}

$(document).ready(main);
