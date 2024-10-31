const express = require('express');
const route = express.Router();


// Index
route.get("/", function (req, res) {
    res.render("index", { title: "Dashboard", page_title: 'Dashboard' });
});

route.get("/index", function (req, res) {
    res.render("index", { title: "Dashboard", page_title: 'Dashboard' });
});

// calender
route.get('/calendar', function (req, res) {
    res.render('calender', { title: "Calendar", page_title: 'calender' });
});
// charts
route.get('/charts-c3', function (req, res) {
    res.render('charts-c3', { title: "C3 Chart", page_title: 'C3 Chart' });
});
route.get('/charts-chartist', function (req, res) {
    res.render('charts-chartist', { title: "Chartist Chart", page_title: 'Chartist Chart' });
});
route.get('/charts-chartjs', function (req, res) {
    res.render('charts-chartjs', { title: "Chart Js", page_title: 'Chart Js' });
});
route.get('/charts-flot', function (req, res) {
    res.render('charts-flot', { title: "Flot Chart", page_title: 'Flot Chart' });
});
route.get('/charts-morris', function (req, res) {
    res.render('charts-morris', { title: "Morris Charts", page_title: 'Morris Charts' });
});
route.get('/charts-other', function (req, res) {
    res.render('charts-other', { title: "Jquery Knob Chart", page_title: 'Jquery Knob Chart' });
});
route.get('/charts-peity', function (req, res) {
    res.render('charts-peity', { title: "Peity Charts", page_title: 'Peity Charts' });
});
route.get('/charts-sparkline', function (req, res) {
    res.render('charts-sparkline', { title: "Sparklines", page_title: 'Sparklines' });
});
// contact
route.get('/contact', function (req, res) {
    res.render('contact', { title: "Contact", page_title: 'Contact' });
});
// dashbord-2
route.get('/dashboard-2', function (req, res) {
    res.render('dashboard-2', { title: "Dashboard 2", page_title: 'Dashboard 2' });
});

//ecommerce

route.get('/ecommerce-customers', function (req, res) {
    res.render('ecommerce-customers', { title: "Customers", page_title: 'Customers' });
});
route.get('/ecommerce-order-history', function (req, res) {
    res.render('ecommerce-order-history', { title: "Order History", page_title: 'Order History' });
});
route.get('/ecommerce-product-edit', function (req, res) {
    res.render('ecommerce-product-edit', { title: "Product Edit", page_title: 'Product Edit' });
});
route.get('/ecommerce-product-grid', function (req, res) {
    res.render('ecommerce-product-grid', { title: "Product Grid", page_title: 'Product Grid' });
});
route.get('/ecommerce-product-list', function (req, res) {
    res.render('ecommerce-product-list', { title: "Products List", page_title: 'Products List' });
});

// emails

route.get('/email-compose', function (req, res) {
    res.render('email-compose', { title: "Email Compose", page_title: 'Email Compose' });
});
route.get('/email-inbox', function (req, res) {
    res.render('email-inbox', { title: "Inbox", page_title: 'Inbox' });
});
route.get('/email-read', function (req, res) {
    res.render('email-read', { title: "Email Read", page_title: 'Email Read' });
});

// email-templates

route.get('/email-templates-alert', function (req, res) {
    res.render('email-templates-alert', { title: "Alert Email", page_title: 'Alert Email' });
});
route.get('/email-templates-basic', function (req, res) {
    res.render('email-templates-basic', { title: "Basic Email", page_title: 'Basic Email' });
});
route.get('/email-templates-billing', function (req, res) {
    res.render('email-templates-billing', { title: "Billing Email", page_title: 'Billing Email' });
});

// faq

route.get('/faq', function (req, res) {
    res.render('faq', { title: "FAQ", page_title: 'FAQ' });
});

//file maneger

route.get('/file-manager', function (req, res) {
    res.render('file-manager', { title: "File Manager", page_title: 'File Manager' });
});

// form

route.get('/form-advanced', function (req, res) {
    res.render('form-advanced', { title: "Form Advanced", page_title: 'Form Advanced' });
});

route.get('/form-editors', function (req, res) {
    res.render('form-editors', { title: "Editor", page_title: 'Editor' });
});

route.get('/form-elements', function (req, res) {
    res.render('form-elements', { title: "Form Elements", page_title: 'Form Elements' });
});

route.get('/form-mask', function (req, res) {
    res.render('form-mask', { title: "Form Mask", page_title: 'Form Mask' });
});

route.get('/form-uploads', function (req, res) {
    res.render('form-uploads', { title: "File Uploads", page_title: 'File Uploads' });
});

route.get('/form-validation', function (req, res) {
    res.render('form-validation', { title: "Form Validation", page_title: 'Form Validation' });
});
route.get('/form-wizard', function (req, res) {
    res.render('form-wizard', { title: "Wizard", page_title: 'Wizard' });
});
route.get('/form-xeditable', function (req, res) {
    res.render('form-xeditable', { title: "Xeditable", page_title: 'Xeditable' });
});

// icons 

route.get('/icons-dripicons', function (req, res) {
    res.render('icons-dripicons', { title: "Dripicons", page_title: 'Dripicons' });
});
route.get('/icons-fontawesome', function (req, res) {
    res.render('icons-fontawesome', { title: "Font Awesome", page_title: 'Font Awesome' });
});
route.get('/icons-ion', function (req, res) {
    res.render('icons-ion', { title: "Ion Icons", page_title: 'Ion Icons' });
});
route.get('/icons-material', function (req, res) {
    res.render('icons-material', { title: "Material Design Icon", page_title: 'Material Design Icon' });
});
route.get('/icons-mobirise', function (req, res) {
    res.render('icons-mobirise', { title: "Mobirise Icons", page_title: 'Mobirise Icons' });
});
route.get('/icons-themify', function (req, res) {
    res.render('icons-themify', { title: "Themify Icons", page_title: 'Themify Icons' });
});
route.get('/icons-typicons', function (req, res) {
    res.render('icons-typicons', { title: "Typicons Icons", page_title: 'Typicons Icons' });
});
route.get('/icons-weather', function (req, res) {
    res.render('icons-weather', { title: "Weather Icons", page_title: 'Weather Icons' });
});

// layouts

route.get('/layouts-boxed', function (req, res) {
    res.render('layouts-boxed', { layout: "layout/layout-boxed", title: "Boxed Layout", page_title: 'Boxed Layout' });
});
route.get('/layouts-colored-sidebar', function (req, res) {
    res.render('layouts-colored-sidebar', { layout: "layout/layout-colored-sidebar", title: "Colored Sidebar", page_title: 'Colored Sidebar' });
});
route.get('/layouts-compact-sidebar', function (req, res) {
    res.render('layouts-compact-sidebar', { layout: "layout/layout-compact-sidebar", title: "Compact Sidebar", page_title: 'Compact Sidebar' });
});
route.get('/layouts-hori-boxed', function (req, res) {
    res.render('layouts-hori-boxed', { layout: "layout/layout-hori-boxed", title: "Horizontal Boxed Layout", page_title: 'Horizontal Layout' });
});
route.get('/layouts-hori-topbar-light', function (req, res) {
    res.render('layouts-hori-topbar-light', { layout: "layout/layouts-hori-topbar-light", title: "Horizontal Layout", page_title: 'Horizontal Layout' });
});

// layouts-horizontal

route.get('/layouts-horizontal', function (req, res) {
    res.render('layouts-horizontal', { layout: "layout/layout-horizontal", title: "Horizontal Layout", page_title: 'Horizontal Layout' });
});
route.get('/layouts-icon-sidebar', function (req, res) {
    res.render('layouts-icon-sidebar', { layout: "layout/layouts-icon-sidebar", title: "Icon Sidebar", page_title: 'Icon Sidebar' });
});
route.get('/layouts-light-sidebar', function (req, res) {
    res.render('layouts-light-sidebar', { layout: "layout/layouts-light-sidebar", title: "Light Sidebar", page_title: 'Light Sidebar' });
});

// map 
route.get('/maps-google', function (req, res) {
    res.render('maps-google', { title: "Google Maps", page_title: 'Google Maps' });
});
route.get('/maps-vector', function (req, res) {
    res.render('maps-vector', { title: "Vector Map", page_title: 'Vector Map' });
});

//pages 

route.get('/pages-404', function (req, res) {
    res.render('pages-404', { title: "Error 404", page_title: 'Error 404' });
});
route.get('/pages-500', function (req, res) {
    res.render('pages-500', { title: "Error 500", page_title: 'Error 500' });
});
route.get('/pages-blank', function (req, res) {
    res.render('pages-blank', { title: "Starter", page_title: 'Starter' });
});
route.get('/pages-coming-soon', function (req, res) {
    res.render('pages-coming-soon', { title: "Coming Soon", page_title: 'Coming Soon' });
});
route.get('/pages-directory', function (req, res) {
    res.render('pages-directory', { title: "Directory", page_title: 'Directory' });
});
route.get('/pages-gallery', function (req, res) {
    res.render('pages-gallery', { title: "Gallery", page_title: 'Gallery' });
});
route.get('/pages-invoice', function (req, res) {
    res.render('pages-invoice', { title: "Invoice", page_title: 'Invoice' });
});
route.get('/pages-lock-screen-2', function (req, res) {
    res.render('pages-lock-screen-2', { layout: "layout/layout-without-nav", title: "Lock Screen 2", page_title: 'Lock Screen 2' });
});
route.get('/pages-lock-screen', function (req, res) {
    res.render('pages-lock-screen', { layout: "layout/layout-without-nav", title: "Lock Screen", page_title: 'Lock Screen' });
});
route.get('/pages-login-2', function (req, res) {
    res.render('pages-login-2', { layout: "layout/layout-without-nav", title: "Login 2", page_title: 'Login 2' });
});
route.get('/pages-login', function (req, res) {
    res.render('pages-login', { layout: "layout/layout-without-nav", title: "Login 2", page_title: 'Login 2' });
});
route.get('/pages-maintenance', function (req, res) {
    res.render('pages-maintenance', { layout: "layout/layout-without-nav", title: "Starter", page_title: 'Pages-maintenance' });
});
route.get('/pages-pricing', function (req, res) {
    res.render('pages-pricing', { title: "Pricing", page_title: 'Pricing' });
});
route.get('/pages-recoverpw-2', function (req, res) {
    res.render('pages-recoverpw-2', { layout: "layout/layout-without-nav", title: "Recover Password 2", page_title: 'Pages-recoverpw' });
});
route.get('/pages-recoverpw', function (req, res) {
    res.render('pages-recoverpw', { layout: "layout/layout-without-nav", title: "Recover Password", page_title: 'Pages-recoverpw' });
});
route.get('/pages-register-2', function (req, res) {
    res.render('pages-register-2', { layout: "layout/layout-without-nav", title: "Register 2", page_title: 'Register Pages 2' });
});
route.get('/pages-register', function (req, res) {
    res.render('pages-register', { layout: "layout/layout-without-nav", title: "Register ", page_title: 'Register Pages' });
});
route.get('/pages-timeline', function (req, res) {
    res.render('pages-timeline', { title: "Timeline", page_title: 'Timeline' });
});

// table 

route.get('/tables-basic', function (req, res) {
    res.render('tables-basic', { title: "Tables", page_title: 'Tables' });
});
route.get('/tables-datatable', function (req, res) {
    res.render('tables-datatable', { title: "Datatable", page_title: 'Datatable' });
});
route.get('/tables-editable', function (req, res) {
    res.render('tables-editable', { title: "Table Editable", page_title: 'Table Editable' });
});
route.get('/tables-responsive', function (req, res) {
    res.render('tables-responsive', { title: "Responsive Tables", page_title: 'Responsive Tables' });
});

// ui

route.get('/ui-alertify', function (req, res) {
    res.render('ui-alertify', { title: "Alertify", page_title: 'Alertify' });
});
route.get('/ui-alerts', function (req, res) {
    res.render('ui-alerts', { title: "Alerts", page_title: 'Alerts' });
});
route.get('/ui-animation', function (req, res) {
    res.render('ui-animation', { title: "Animation", page_title: 'Animation' });
});
route.get('/ui-badge', function (req, res) {
    res.render('ui-badge', { title: "Badge", page_title: 'Badge' });
});
route.get('/ui-buttons', function (req, res) {
    res.render('ui-buttons', { title: "Buttons", page_title: 'Buttons' });
});
route.get('/ui-cards', function (req, res) {
    res.render('ui-cards', { title: "Cards", page_title: 'Cards' });
});
route.get('/ui-carousel', function (req, res) {
    res.render('ui-carousel', { title: "Carousel", page_title: 'Carousel' });
});
route.get('/ui-colors', function (req, res) {
    res.render('ui-colors', { title: "Colors", page_title: 'Colors' });
});
route.get('/ui-dropdowns', function (req, res) {
    res.render('ui-dropdowns', { title: "Dropdowns", page_title: 'Dropdowns' });
});
route.get('/ui-grid', function (req, res) {
    res.render('ui-grid', { title: "Grid system", page_title: 'Grid system' });
});
route.get('/ui-highlight', function (req, res) {
    res.render('ui-highlight', { title: "Highlight", page_title: 'Highlight' });
});
route.get('/ui-images', function (req, res) {
    res.render('ui-images', { title: "Images", page_title: 'Images' });
});
route.get('/ui-lightbox', function (req, res) {
    res.render('ui-lightbox', { title: "Lightbox", page_title: 'Lightbox' });
});
route.get('/ui-modals', function (req, res) {
    res.render('ui-modals', { title: "Modals", page_title: 'Modals' });
});
route.get('/ui-navs', function (req, res) {
    res.render('ui-navs', { title: "Navs", page_title: 'Navs' });
});
route.get('/ui-nestable', function (req, res) {
    res.render('ui-nestable', { title: "Nestable List", page_title: 'Nestable List' });
});
route.get('/ui-pagination', function (req, res) {
    res.render('ui-pagination', { title: "Pagination", page_title: 'Pagination' });
});
route.get('/ui-popover-tooltips', function (req, res) {
    res.render('ui-popover-tooltips', { title: "Popover & Tooltips", page_title: 'Popover & Tooltips' });
});
route.get('/ui-progressbars', function (req, res) {
    res.render('ui-progressbars', { title: "Progress", page_title: 'Progress' });
});
route.get('/ui-rangeslider', function (req, res) {
    res.render('ui-rangeslider', { title: "Range Slider", page_title: 'Range Slider' });
});
route.get('/ui-rating', function (req, res) {
    res.render('ui-rating', { title: "Rating", page_title: 'Rating' });
});
route.get('/ui-sweet-alert', function (req, res) {
    res.render('ui-sweet-alert', { title: "Sweet Alert", page_title: 'Sweet Alert' });
});
route.get('/ui-sessiontimeout', function (req, res) {
    res.render('ui-sessiontimeout', { title: "Session Timeout", page_title: 'Session Timeout' });
});
route.get('/ui-tabs-accordions', function (req, res) {
    res.render('ui-tabs-accordions', { title: "Tabs", page_title: 'Tabs' });
});
route.get('/ui-typography', function (req, res) {
    res.render('ui-typography', { title: "Typography", page_title: 'Typography' });
});
route.get('/ui-utilities', function (req, res) {
    res.render('ui-utilities', { title: "Utilities", page_title: 'Utilities' });
});
route.get('/ui-video', function (req, res) {
    res.render('ui-video', { title: "Video", page_title: 'Video' });
});
route.get('/widgets', function (req, res) {
    res.render('widgets', { title: "Widgets", page_title: 'Widgets' });
});

module.exports = route;