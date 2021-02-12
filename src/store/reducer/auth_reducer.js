const INITIAL_STATE = {
    userName: 'Muhammad Noman Aqeel.',
    email: 'nomi690@hotmail.com'            
}

export default (state = INITIAL_STATE, action ) => {
    console.log("action =>",action);
    return state;
}