import React from 'react';
import { Link } from 'react-router-dom';
import Transaction from '../../components/Transaction';

function UserTransaction() { 
    return (
        <main class="main bg-dark-main">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Transaction 
            title="Argent Bank Checking (x8349)"
            amount="$2,082,72"
            description="Available Balance"
            />
            <Transaction 
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
            />
            <Transaction 
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
            />
        </main>

    )
}

export default UserTransaction;