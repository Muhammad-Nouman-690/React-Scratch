import featured from './JSON/featured';
import banner from './JSON/banner';
import planning from './JSON/planning';
import community from './JSON/community';
import real from './JSON/real';
import idea from './JSON/idea';
import tip from './JSON/tip';

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

export const getReal = () => {
    console.log('==> Real Data',real);
    return real;
}

export const getIdea = () => {
    console.log('==> Idea Data', idea);
    return idea;
}

export const getTip = () => {
    console.log('==> Tip Data', tip);
    return tip;
}