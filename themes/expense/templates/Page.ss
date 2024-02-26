<!DOCTYPE html>
<!--
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Simple. by Sara (saratusar.com, @saratusar) for Innovatif - an awesome Slovenia-based digital agency (innovatif.com/en)
Change it, enhance it and most importantly enjoy it!
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-->

<!--[if !IE]><!-->
<html lang="$ContentLocale">
<!--<![endif]-->
<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
<head>
	<% base_tag %>
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	$MetaTags(false)
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
<%--	<% require themedCSS('reset') %>--%>
<%--	<% require themedCSS('typography') %>--%>
<%--	<% require themedCSS('form') %>--%>
<%--	<% require themedCSS('layout') %>--%>

    <style data-href="https://fonts.googleapis.com/css2?family=family=Inter:wght@100..900&amp;display=swap">
        @font-face{
            font-family:'Inter';
            font-style:normal;
            font-weight:400;
            font-display:swap;
            src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZs.woff) format('woff')}
        @font-face{
            font-family:'Inter';
            font-style:normal;
            font-weight:600;
            font-display:swap;
            src:url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZs.woff) format('woff')}
        </style>
</head>
<body class="$ClassName.ShortName<% if not $Menu(2) %> no-sidebar<% end_if %>" <% if $i18nScriptDirection %>dir="$i18nScriptDirection"<% end_if %>>

<% if $isExpensesPage || $isSamplePage || $isPureJSPage %>
    $Layout
<% else %>
    <% include Header %>
    <div class="main" role="main">
        <div class="inner typography line">
            $Layout
        </div>
    </div>
    <% include Footer %>

<% end_if %>

<%--<% require javascript('//code.jquery.com/jquery-3.7.1.min.js') %>--%>
<% require themedJavascript('/dist/js/app.min.js') %>

</body>
</html>
