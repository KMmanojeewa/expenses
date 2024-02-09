import React, { useState, useRef } from "react";
import axios from "axios";

export default function AddExpense() {

    const [amount, setAmount] = useState(null);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);

    function setAmountValue(e) {
        e.preventDefault();
        setAmount(e.target.value);
    }

    function setDateValue(e) {
        e.preventDefault();
        setDate(e.target.value);
    }

    function setDescriptionValue(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    function handleCreateExpense() {
        let baseURL = '/api/createExpense';
        let reqData = {
            'amount': amount,
            'date': date,
            'description': description,
        };
        axios
            .post(baseURL, reqData)
            .then((response) => {
                console.log(response.data);
            });
    }


    return (
        <div className="add-expense">
            <div className="header">
                <p>Add expense</p>
            </div>
            <div className="input-items">
                <div className="input-item">
                    <span>Amount</span>
                    <input name="amount" type="text" onChange={setAmountValue}/>
                </div>
                <div className="input-item">
                    <span>Date</span>
                    <input name="date" type="date" onChange={setDateValue}/>
                </div>
                <div className="input-item">
                    <span>Description</span>
                    <textarea name="description"  onChange={setDescriptionValue}/>
                </div>
            </div>
            <div className="actions" >
                <button className="submit" type="button" onClick={handleCreateExpense}>Submit</button>
                <button className="clear" type="button">Clear</button>
            </div>
        </div>
    )
}
