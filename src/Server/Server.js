import featured from './JSON/featured';
import banner from './JSON/banner';
import planning from './JSON/planning';

export const getVendors = ()=> {
    console.log('========',featured); 
    return featured; 
}

export const getBanner = () => {
    console.log('=>',banner);
    return banner;
}

export const getPlanning = () => {
    console.log('planning-data',planning);
    return planning;
}