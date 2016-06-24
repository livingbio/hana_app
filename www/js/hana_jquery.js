function main() {

    $(document).on('click', '.Toggle-sideBar', function() {
        if( $('body').css("margin-left") =='250px' ) {
            $('body').animate({ 'margin-left': '0px', 'margin-right': '0px' }, 100);
        }
        else {
            $('body').animate({ 'margin-left': '250px', 'margin-right': '-250px' }, 100);
        }
    });


    //$('#filter').hide();


    /*
    $(document).on('click', '.Toggle-filter',function() {
        if ($('#filter').is(':visible')) {
            $('#filter').hide();
            $('#main').show();
        }else{
            $('#filter').show();
            $('#main').hide();
        }
    });
    */


    $(document).on('click', '.DataBlock', function() {
        $('.DataBlock').removeClass('is-shown');
        $(this).addClass('is-shown');
    });


    function chartShown(chart_name){

        $(chart_name).siblings().hide();

        $('.DataChart-item').hide();

        $(chart_name).show(200, function(){
            $('.DataChart-item').slideDown(400);
        });

    };


    /*
    $('.Block-SourceCost').addClass('is-shown');
    chartShown('.Chart-SourceCost');


    function blockClick(label){
        var block_name = '.Block-' + label;
        var chart_name = '.Chart-' + label;

        $(document).on('click', block_name, function() {
            chartShown(chart_name);
        });
    }


    blockClick('SourceCost');
    blockClick('Amt');
    blockClick('GrossMargin');
    blockClick('GrossMarginRate');
    blockClick('Sale');
    blockClick('SBG');

    */

}


$(document).ready(main);
