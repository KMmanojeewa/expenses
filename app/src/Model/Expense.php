<?php

namespace Expenses\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;

class Expense extends DataObject
{
    private static $table_name = 'Expense';

    private static $db = [
        'Amount' => 'Decimal',
        'Description' => 'Text',
        'Date' => 'Date',
    ];

    private static $has_one = [
        'ExpenseCategory' => ExpenseCategory::class,
        'Member' => Member::class,
    ];

    private static $has_many = [];

    private static $many_many = [];

    private static $many_many_extraFields = [];

    private static $belongs_many_many = [];

    private static $defaults = [];

    private static $searchable_fields = [];

    private static $summary_fields = [];

    private static $default_sort = '';

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        return $fields;
    }
}
