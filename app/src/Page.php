<?php

namespace {

    use Expenses\Model\Page\ExpensesPage;
    use SilverStripe\CMS\Model\SiteTree;

    class Page extends SiteTree
    {
        private static $db = [];

        private static $has_one = [];

        public function isExpensesPage()
        {
            if($this->ClassName == ExpensesPage::class) {
                return true;
            }
        }
    }
}
