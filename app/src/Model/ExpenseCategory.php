<?php

namespace Expenses\Model;

use SilverStripe\ORM\DataObject;

class ExpenseCategory extends DataObject
{
    private static $table_name = 'ExpenseCategory';

    private static $db = [
        'Title' => 'Varchar(100)',
    ];

    private static $has_one = [];

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
