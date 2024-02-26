import React, {useState, useRef, useEffect} from "react";
import axios from "axios";

export default function AllExpenses() {

    let baseURL = '/api/getExpenses';

    const [expenses, setExpenses] = React.useState(null);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setExpenses(response.data);
        });
    }, [])

    return (
        <div className="all-expense">
            <div>
                <h2>Expenses</h2>
                <br></br>
                <div>
                    <table border = "2">
                        <thead>
                        <tr>
                            <th> Amount</th>
                            <th> Description</th>
                            <th> Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {expenses && expenses.map((expense, index) => {
                            return <tr key={index}>
                                <td>{expense.Amount}</td>
                                <td>{expense.Description}</td>
                                <td>{expense.Date}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}
