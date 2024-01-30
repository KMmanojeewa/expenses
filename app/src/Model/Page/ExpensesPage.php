<?php

namespace Expenses\Model\Page;

use Expenses\Controller\ExpensesPageController;
use Expenses\Model\Expense;
use Page;
use SilverStripe\Core\Convert;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldAddNewButton;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;

class ExpensesPage extends Page
{
    private static $table_name = 'ExpensesPage';

    private static $controller_name = ExpensesPageController::class;

    private static $db = [

    ];

    private static $has_one = [

    ];

    private static $api_access = true;

    private static $has_many = [
        'Expenses' => Expense::class
    ];

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
        $fields->addFieldsToTab('Root.Expenses', [
            $grid = GridField::create('Expenses', 'Expenses', $this->Expenses())
        ]);
        $grid->setConfig(GridFieldConfig_RecordEditor::create());
        return $fields;
    }

    public function ExpensesPageJSON()
    {
        $data = [
            'title' => 'Test hereee'
        ];
        return Convert::raw2htmlatt(json_encode($data));
    }
}
