import React from "react";
import {store} from "./store";
import {setDeposit, giveCharity} from "./actions"
const ButtonGroup = ({ deposits }) => 
( 
<div> 
    <h2 className="App__giveaway"> Withdraw money </h2>
    {deposits.map((totalAmount, i) => ( 
        
        <button data-amount={totalAmount}
        key={`btn-${i}`} onClick={dispatchBtnAction}> {totalAmount} </button> 

   )
    )}
<p className="App__giveaway" onClick={dispatchClrAction}>Give all your money away to charity</p>
</div> 
);

function dispatchBtnAction (e) { 
    const number = e.target.dataset.amount
    store.dispatch(setDeposit(number));
}

function dispatchClrAction (e) { 
    store.dispatch(giveCharity());
}

export default ButtonGroup;