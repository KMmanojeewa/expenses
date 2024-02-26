import React, { useState, useRef } from "react";
import axios from "axios";
import moment from "moment";

export default function AddExpense() {

    var today = moment().format("YYYY-MM-DD");
    console.log(today);

    const formRef = useRef(null);

    const [amount, setAmount] = useState(null);
    const [date, setDate] = useState(today);
    const [description, setDescription] = useState(null);

    const [formInput, setFormInput] = useState({
        amount: "",
        date: today,
        description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput((prevState) => ({ ...prevState, [name]: value }));
    };

    // function setAmountValue(e) {
    //     e.preventDefault();
    //     setAmount(e.target.value);
    // }
    //
    // function setDateValue(e) {
    //     e.preventDefault();
    //     setDate(e.target.value);
    // }
    //
    // function setDescriptionValue(e) {
    //     e.preventDefault();
    //     setDescription(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        const formDataByDefault = new FormData(formRef.current);

        for (let [key, value] of formDataByDefault.entries()) {
            console.log(key, value);
        }
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
            {/*<div className="input-items">*/}
            {/*    <div className="input-item">*/}
            {/*        <span>Amount</span>*/}
            {/*        <input name="amount" type="text" onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="input-item">*/}
            {/*        <span>Date</span>*/}
            {/*        <input name="date" type="date" onChange={handleChange} value={today}/>*/}
            {/*    </div>*/}
            {/*    <div className="input-item">*/}
            {/*        <span>Description</span>*/}
            {/*        <textarea name="description"  onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
