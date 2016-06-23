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


    function chartShown(chart_name){

        $(chart_name).siblings().hide();

        $('.DataChart-item').hide();

        $(chart_name).show(400, function(){
            $('.DataChart-item').slideDown(800);
        });

    };


    $('.Block-SourceCost').addClass('is-shown');
    chartShown('.Chart-SourceCost');


    function blockClick(label){
        var block_name = '.Block-' + label;
        var chart_name = '.Chart-' + label;

        $(block_name).click(function(){
            chartShown(chart_name);
        });
    }


    blockClick('SourceCost');
    blockClick('Amt');
    blockClick('GrossMargin');
    blockClick('GrossMarginRate');
    blockClick('Sale');
    blockClick('SBG');


}


$(document).ready(main);
