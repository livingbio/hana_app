import $ from 'jquery';


const BASE_URL = "http://172.16.17.10:8001";


export const sbgs = ({user, password}) => {

    return new Promise((resolve, reject) =>{

        let defaultAjaxParameter = makeDefaultAjaxParameter({
            user, password
        });


        let url = `${BASE_URL}/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$select=SBG&$format=json`;

        console.log(url);

        let monthAjaxParameter = {
            ...defaultAjaxParameter,
            url
        };

        let response = $.ajax( monthAjaxParameter );

        response
            .done(function(data){
                let results = data.d.results;
                let sbgs= results.map((d) => {return d.SBG});
                resolve(sbgs);
            })
            .fail(function(){
                reject('fail');
            })

    });
};


export const monthes = ({user, password, year}) => {

    return new Promise((resolve, reject) =>{

        let defaultAjaxParameter = makeDefaultAjaxParameter({
            user, password
        });

        let url = `${BASE_URL}/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$filter=YYYY eq '${year}'&$select=YYMM&$format=json`;

        console.log(url);

        let monthAjaxParameter = {
            ...defaultAjaxParameter,
            url
        };

        let response = $.ajax( monthAjaxParameter );

        response
            .done(function(data){
                console.log(data);
                let results = data.d.results;
                let months = results.map((d) => {return d.YYMM.slice(4)});
                resolve(months);
            })
            .fail(function(){
                reject('fail');
            })

    });
};


export const years = ({user, password}) => {
    return new Promise((resolve, reject) => {

        let defaultAjaxParameter = makeDefaultAjaxParameter({
            user, password
        });

        let url = `${BASE_URL}/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$select=YYYY&$format=json`;

        let yearsAjaxParameter = {
            ...defaultAjaxParameter,
            url
        };

        let response = $.ajax( yearsAjaxParameter );

        response
            .done(function(data){
                let results = data.d.results;
                let years = results.map((d) => {return d.YYYY});
                resolve(years);
            })
            .fail(function(){
                reject('fail');
            })
    });
};


export const getCompanyDataAllYear = ({user, password, sbg}) => {

    return new Promise( (resolve, reject) => {

        let url = `${BASE_URL}/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$filter=SBG eq '${sbg}'&$select=YYYY,SBG,Amt,SourceCost,GrossMargin,GrossMarginRate&$format=json`;

        let defaultAjaxParameter = makeDefaultAjaxParameter({
            user, password
        });

        let companyAjaxParameter = {
            ...defaultAjaxParameter,
            url
        };

        let response = $.ajax( companyAjaxParameter );

        response
            .done((data)=> {

                let companyData = data.d.results;
                let result = companyDataOrganized({companyData, yearOrMonth:"year"});
                addArrow(result);
                resolve(result);
            })
            .fail(() => {
                reject("fail");
            });
    })
};


export const getCompanyDataInYear= ({user, password, sbg, year}) => {

    return new Promise( (resolve, reject) => {

        let url = `${BASE_URL}/ADVANTECH_HANA_APP/SALES_TREND.xsodata/SALESTREND?$filter=SBG eq '${sbg}' and YYYY eq '${year}'&$select=YYMM,SBG,Amt,SourceCost,GrossMargin,GrossMarginRate&$format=json`;

        let defaultAjaxParameter = makeDefaultAjaxParameter({
            user, password
        });

        let companyAjaxParameter = {
            ...defaultAjaxParameter,
            url
        };

        let response = $.ajax( companyAjaxParameter );

        response
            .done((data)=> {
                let companyData = data.d.results;
                let result = companyDataOrganized({companyData, yearOrMonth:"month"});

                result = result
                            .map((data) => {
                                return {...data, key: data.key.slice(4)};
                            })
                            .sort((a,b) => { // Bigger to small
                                return parseInt(b.key,10) - parseInt(a.key, 10);
                            }) ;

                addArrow(result);

                resolve(result);
            })
            .fail(() => {
                reject("fail");
            });
    })
};


const addArrow = (result) =>{

    let keys = ['SourceCost', 'Amt', 'GrossMargin', 'GrossMarginRate'];

    // add arrow to data
    for(let i = 0 ; i< result.length -1; ++i){

        let j = i+1;

        for(let k = 0 ; k< keys.length; ++k){

            let key = keys[k];

            if(result[i].detail[key].number > result[j].detail[key].number){

                result[i].detail[key].arrow = 'top';

            }
            else if(result[i].detail[key].number < result[j].detail[key].number){

                result[i].detail[key].arrow = 'down';
            }
        }
    }
};


const companyDataOrganized = ({companyData, yearOrMonth})=>{
    let result = [];

    for (var i = 0; i < companyData.length; i++) {
        let rawData = companyData[i];
        let data = reshapeData({rawData, yearOrMonth});
        result.push(data);
    }

    return result;
};


const reshapeData = ({rawData, yearOrMonth}) => {

    let keyType = 'month';
    let key = 'YYMM';

    if (yearOrMonth === "year"){
        keyType = 'year';
        key = 'YYYY'
    }

    return {
        keyType,
        'key': rawData[key],
        'detail': {
            'SourceCost': labelDataOrganized(rawData.SourceCost, '成本', 'money', ''),
            'Amt': labelDataOrganized(rawData.Amt, '收入', 'money', ''),
            'GrossMargin': labelDataOrganized(rawData.GrossMargin, '毛利', 'money', ''),
            'GrossMarginRate': labelDataOrganized(rawData.GrossMarginRate, '毛利率', 'percent', '')
            //'SBG': labelDataOrganized(rawData.SBG, '公司', 'money', '')
        }
    };
};


const labelDataOrganized = (number, label, kind , arrow) => {
    return {
        'number': number,
        'label': label,
        'kind': kind,
        'arrow': arrow
    };
};


const makeDefaultAjaxParameter = ({user, password})=>{
    return {
        xhrFields: {
            withCredentials: true
        },
        headers: {
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        },
        type: 'GET'
    };
};
