export const makeTrendStateKey = ({comparison, sbg, user, year}) => {

    let cacheDataKey = comparison + sbg + user;

    if(comparison === 'month'){
        cacheDataKey = comparison + year + sbg + user;
    }
    return cacheDataKey;
};
