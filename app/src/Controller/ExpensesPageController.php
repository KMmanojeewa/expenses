<?php

namespace Expenses\Controller;

use Expenses\Model\Expense;
use Expenses\Model\Page\ExpensesPage;
use PageController;
use SilverStripe\Control\HTTPRequest;

class ExpensesPageController extends PageController
{
//    private static $url_segment = 'expense';

    private static $allowed_actions = [
        'getExpenses',
        'getExpense',
        'createExpense',
        'editExpense',
    ];

    public function createExpense(HTTPRequest $request)
    {
        //input data from request
        $data = $request->postVars();
        $amount = $data['amount'];
        $date = $data['date'];
        $description = $data['description'];

        //return data
        $status = 'failed';
        $message = 'Something went wrong';

        //process expense
        if($amount && $date && $description) {
            $expense = new Expense([
                'Amount' => $amount,
                'Date' => $date,
                'Description' => $description
            ]);
            $expense->write();
            $status = 'success';
            $message = 'Expense created';
        }

        return json_encode([
            'status' => $status,
            'message' => $message
        ]);
    }

    public function getExpenses()
    {
        $expenses = Expense::get();
        $dataArr = [];
        foreach ($expenses as $expense) {
            $arr = [];
            $arr['Amount'] = $expense->Amount;
            $arr['Description'] = $expense->Description;
            $arr['Date'] = $expense->Date;
            $dataArr[] = $arr;
        }
        return json_encode($dataArr);
    }
}
