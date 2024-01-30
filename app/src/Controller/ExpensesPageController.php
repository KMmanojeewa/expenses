<?php

namespace Expenses\Controller;

use Expenses\Model\Page\ExpensesPage;
use PageController;

class ExpensesPageController extends PageController
{
//    private static $url_segment = 'expense';

    private static $allowed_actions = [
        'getExpenses',
        'getExpense',
        'createExpense',
        'editExpense',
    ];

    public function getExpenses()
    {
        $expenses = ExpensesPage::get();
        echo '<pre>'.print_r($expenses->map('ID','Amount')->toArray(),1);die();
    }
}
