export const translateCategory = (category)=>{
    let label = category;
    switch (label) {
        case 'SourceCost':
            label = '成本';
            break;
        case 'Amt':
            label = '收入';
            break;
        case 'GrossMargin':
            label = '毛利';
            break;
        case 'GrossMarginRate':
            label = '毛利率';
            break;
        default:

            break;
    }
    return label
};
