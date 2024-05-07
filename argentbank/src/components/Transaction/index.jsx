import React from 'react';
import { Link } from 'react-router-dom';

function Transaction(props) { 
    return (
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">{props.title}</h3>
                <p class="account-amount">{props.amount}</p>
                <p class="account-amount-description">{props.description}</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
    )
}

export default Transaction;