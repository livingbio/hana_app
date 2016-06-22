import $ from 'jquery';

export const years = (user, password) => {
    return $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        },
        type: 'GET',
        url: "http://172.16.17.10:8001/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$select=YYYY&$format=json"
    });
};

export const getCompanyData = (user, password) => {
    var result = [];
    var d = $.Deferred();
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        },
        type: 'GET',
        url: "http://172.16.17.10:8001/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$filter=SBG eq 'IIoT'&$select=YYMM,SBG,Amt,SourceCost,GrossMargin,GrossMarginRate&$format=json",
        success: function(data) {

            var companyData = data.d.results;

            function companyDataOrganized(companyData){
                for (var i = 0; i < companyData.length; i++) {
                    rawMonthData = companyData[i];
                    monthData = monthDataOrganized(rawMonthData);
                    result.push(monthData);
                }
                console.log('3');
                console.log(result);
                return result;
            }

            function monthDataOrganized(rawMonthData){
                return {
                    'YYMM': rawMonthData.YYMM,
                    'detail': {
                        'SourceCost': labelDataOrganized(rawMonthData.SourceCost, '成本', 'money', 'up'),
                        'Amt': labelDataOrganized(rawMonthData.Amt, '收入', 'money', 'down'),
                        'GrossMargin': labelDataOrganized(rawMonthData.GrossMargin, '毛利', 'money', 'down'),
                        'GrossMarginRate': labelDataOrganized(rawMonthData.GrossMarginRate, '毛利率', 'percent', 'up'),
                        'SBG': labelDataOrganized(rawMonthData.SBG, '公司', 'money', 'up')
                    }
                };
            }


            result = companyDataOrganized(companyData);
            d.resolve(result);
        }
    });

    return d.promise();
};


const labelDataOrganized = (number, label, kind , arrow) => {
    return {
        'number': number,
        'label': label,
        'kind': kind,
        'arrow': arrow
    };
}
