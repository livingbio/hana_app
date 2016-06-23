function main() {

    $('.Toggle-sideBar').on('click', function(){
        if( $('body').css("margin-left") =='270px' ) {
            $('body').animate({ 'margin-left': '0px', 'margin-right': '0px' }, 'slow');
        }
        else {
            $('body').animate({ 'margin-left': '270px', 'margin-right': '-270px' }, 'slow');
        }
    });


    $('#filter').hide();


    $('.Toggle-filter').click(function() {
        if ($('#filter').is(':visible')) {
            $('#filter').hide();
            $('#main').show();
        }else{
            $('#filter').show();
            $('#main').hide();
        }
    });


    $('.DataBlock').click(function () {
        $('.DataBlock').removeClass('is-shown');
        $(this).addClass('is-shown');
    });


    function chartShown(div_name){
        // $(div_name).show(700);
        $(div_name).slideDown(700);
        $(div_name).siblings().hide();
    };


    chartShown('.Chart-SourceCost');


    $('.Block-SourceCost').click(function () {
        chartShown('.Chart-SourceCost');
    });

    $('.Block-Amt').click(function () {
        chartShown('.Chart-Amt');
    });

    $('.Block-GrossMargin').click(function () {
        chartShown('.Chart-GrossMargin');
    });

    $('.Block-GrossMarginRate').click(function () {
        chartShown('.Chart-GrossMarginRate');
    });

    $('.Block-Sale').click(function () {
        chartShown('.Chart-Sale');
    });

    $('.Block-SBG').click(function () {
        chartShown('.Chart-SBG');
    });

}

$(document).ready(main);
