import featured from './JSON/featured';
import banner from './JSON/banner';
import planning from './JSON/planning';
import community from './JSON/community';

export const getVendors = ()=> {
    console.log('==> Featured Data',featured); 
    return featured; 
}

export const getBanner = () => {
    console.log('==> Banner Data',banner);
    return banner;
}

export const getPlanning = () => {
    console.log('==> Planning Data',planning);
    return planning;
}

export const getCommunity = () => {
    console.log('==> Community Data',community);
    return community;
}