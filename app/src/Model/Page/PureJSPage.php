<?php

namespace Expenses\Model\Page;

use Page;

class PureJSPage extends Page
{
    private static $table_name = 'PureJSPage';


    private static $db = [

    ];

    private static $has_one = [

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
