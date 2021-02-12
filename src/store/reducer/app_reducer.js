const INITIAL_STATE = {
            chatName: 'Telegram'            
        }

export default (state = INITIAL_STATE,action ) => {
    console.log("action App =>",action);
    return state;
}