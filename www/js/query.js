var items = [
    {
        'number': 263,
        'label': '成本',
        'kind': 'money',
        'arrow': 'up',
    }, {
        'number': 456,
        'label': '收入',
        'kind': 'money',
        'arrow': 'down',
    }, {
        'number': 478,
        'label': '毛利',
        'kind': 'money',
        'arrow': 'up',
    }, {
        'number': 231,
        'label': '銷量',
        'kind': 'money',
        'arrow': 'down',
    }, {
        'number': 845,
        'label': '毛利率',
        'kind': 'percent',
        'arrow': 'down',
    }, {
        'number': 561,
        'label': '總和_毛利率',
        'kind': 'percent',
        'arrow': 'up',
    }
];

function getCompanyData() {
    var result = [];
    var d = $.Deferred();
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa('DEV01:LeadTek01')
        },
        type: 'GET',
        url: "http://172.16.17.10:8001/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$filter=SBG eq 'IIoT'&$select=YYMM,SBG,Amt,SourceCost,GrossMargin,GrossMarginRate&$format=json",
        success: function(data) {

            var companyData = data.d.results

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
                obj = {
                    'YYMM': rawMonthData.YYMM,
                    'detail':{
                        'SourceCost': labelDataOrganized(rawMonthData.SourceCost, '成本', 'money', 'up'),
                        'Amt': labelDataOrganized(rawMonthData.Amt, '收入', 'money', 'down'),
                        'GrossMargin': labelDataOrganized(rawMonthData.GrossMargin, '毛利', 'money', 'down'),
                        'GrossMarginRate': labelDataOrganized(rawMonthData.GrossMarginRate, '毛利率', 'percent', 'up'),
                        'SBG': labelDataOrganized(rawMonthData.SBG, '公司', 'money', 'up'),
                    },
                };
                return obj;
            }

            function labelDataOrganized(number, label, kind , arrow){
                obj = {
                    'number': number,
                    'label': label,
                    'kind': kind,
                    'arrow': arrow,
                };
                return obj;
            }

            result = companyDataOrganized(companyData);
            d.resolve(result);
        },
    });
    console.log('2');
    console.log(result);

    return d.promise();
}

items = getCompanyData();

items.done(function(data){
    console.log('1');
    console.log(data);
})
