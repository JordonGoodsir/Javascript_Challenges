export default function (state, action) {
    switch(action.type) {
        case "setCookieCount": {
            return {
                ...state,
                cookieCount: action.data
            }
        }  
        case "setCookiePerSec": {
            return {
                ...state,
                cookiePerSec: action.data
            }
        }
        default: 
            return state
    }
}