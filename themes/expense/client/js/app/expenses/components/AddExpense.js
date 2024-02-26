import React, { useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
var today = moment().format("YYYY-MM-DD");

export default function AddExpense() {

    const formRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const formDataByDefault = new FormData(formRef.current);

        if(validateData(formDataByDefault)) {
            console.log('validated')
            handleCreateExpense(formDataByDefault);
        }
    }

    function validateData(data) {
        let valid = true;
        for (let [key, value] of data.entries()) {
            if(!value) {
                // setErrorMessage(key+' cannot be empty');
                valid = false;
            }
        }
        return valid;
    }

    function handleCreateExpense(data) {
        console.log('handleCreateExpense', data)
        let baseURL = '/api/createExpense';
        axios
            .post(baseURL, data)
            .then((response) => {
                console.log(response);
            });
    }


    return (
        <div className="add-expense">
            <div className="header">
                <p>Add expense</p>
            </div>
            <div className="message">
                <p>{errorMessage}</p>
                {/*{errorMessage && errorMessage.map((message, index) => {*/}
                {/*    return <p key={index}>{message}</p>*/}
                {/*})}*/}
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-item">
                    <span>Amount</span>
                    <input name="amount" type="text" />
                </div>
                <div className="input-item">
                    <span>Date</span>
                    <input name="date" type="date" />
                </div>
                <div className="input-item">
                    <span>Description</span>
                    <textarea name="description" />
                </div>
                <div className="input-item">
                    <input className="submit" type="submit" name="Submit" />
                </div>
            </form>
            <div className="actions" >
                {/*<button className="submit" type="button" onClick={handleCreateExpense}>Submit</button>*/}
                {/*<button className="clear" type="button">Clear</button>*/}
            </div>
        </div>
    )
}
