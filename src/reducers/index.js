export default (state,action) => { 
    console.log(action);
    switch(action.type) { 
        case "SET_DEPOSIT": 
        return {
            ...state, 
            totalAmount:action.totalAmount
        }
            case "GIVE_CHARITY": 
            return { 
                ...state, 
                totalAmount: action.giveCharity
            }
        default: 
        return state;
    }
}

