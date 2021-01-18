import featured from './JSON/featured';
import banner from './JSON/banner';

export const getVendors = ()=> {
    console.log('========',featured); 
    return featured; 
}

export const getBanner = () => {
    console.log('=>',banner);
    return banner;
}
