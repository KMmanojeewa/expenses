<?php

namespace Expenses\Model;

use Expenses\Model\Page\Expense;
use SilverStripe\ORM\DataObject;
use SilverStripe\Security\Member;

class Reminder extends DataObject
{
    private static $table_name = 'Reminder';

    private static $db = [
        'Date' => 'Date',
    ];

    private static $has_one = [
        'Member' => Member::class,
        'Expense' => Expense::class
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
