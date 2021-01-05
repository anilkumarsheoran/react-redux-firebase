const initialState = {
    authError: null
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return{
                ...state,
                authError: 'Login Error'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            return {
                ...state
            }

        default:
            return state
    }
}

export default authReducer