import {store} from '../store';
export function setDeposit(number) { 
    return { 
        type: "SET_DEPOSIT",
        totalAmount: store.getState().totalAmount- number
    }
}

export function giveCharity() { 
    return { 
        type: "GIVE_CHARITY",
        totalAmount: 0
    }
}