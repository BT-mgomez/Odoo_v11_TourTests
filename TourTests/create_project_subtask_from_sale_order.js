odoo.define('create_project_subtask_from_sale_order.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

tour.register('create_project_subtask_from_sale_order', {
    url: "/web",
}, [tour.STEPS.MENU_MORE, {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"], .oe_menu_toggler[data-menu-xmlid="sale.sale_menu_root"]',
    content: _t('Organize your sales activities with the <b>Sales Management app</b>.'),
    position: 'bottom',
},  {
    trigger: ".o_list_button_add",
    extra_trigger: ".o_sale_order",
    content: _t("Let's create a new quotation.<br/><i>Note that colored buttons usually point to the next logical actions.</i>"),
    position: "right",
}, {
    trigger: ".o_required_modifier input",
    extra_trigger: ".o_sale_order",
    content: _t("Write the name of your customer to create one on the fly, or select an existing one."),
    position: "top",
    run: "text Agrolait",
}, {
    trigger: ".ui-menu-item > a",
    auto: true,
    in_modal: false,
}, {
    trigger: ".o_field_x2many_list_row_add > a",
    extra_trigger: ".o_sale_order",
    content: _t("Click here to add some lines to your quotations."),
    position: "bottom",
}, {
    trigger: ".modal-body .o_required_modifier input, .o_list_view .o_required_modifier input",
    extra_trigger: ".o_sale_order",
    content: _t("Select a product, or create a new one on the fly. The product will define the default sales price (that you can change), taxes and description automatically."),
    position: "right",
    run: "text GAP Analysis Service",
}, {
    trigger: ".ui-menu-item > a",
    auto: true,
    in_modal: false,
    run: function (actions) {
        actions.auto();
        // There might be a modal because of the view:
        // sale.order.form.editable.list, enabled by some groups
        if ($(".modal-footer .btn-primary").length) {
            actions.auto(".modal-footer .btn-primary");
        }
    },
    id: "quotation_product_selected",
}, {
    trigger: ".o_form_button_save",
    extra_trigger: ".o_sale_order",
    content: _t("Once your quotation is ready, you can save, print or send it by email."),
    position: "right",
}, {
    trigger: ".o_statusbar_buttons > button:enabled:contains('Confirm Sale')",
    content: _t("Confirm Sale. If a service product have been added a new task will be created (product configuration"),
    position: "bottom",
}, {
    trigger: ".oe_button_box .oe_stat_button:has(div[name=tasks_count])",
    content: _t('go to the automatically created Task'),
    position: 'bottom',
}, {
    trigger: ".oe_button_box .oe_stat_button:has(div[name=subtask_count])",
    content: _t('go to create sub-tasks kanban view'),
    position: 'bottom',
},  {
    trigger: ".o-kanban-button-new",
    content: _t("Let's create a new subtask"),
    position: "right",
}, {
    trigger: ".o_kanban_quick_create input",
    content: _t("Write the tittle for your subtask."),
    position: "top",
    run: "text My Subtask",
    auto: true,
},
    {
    trigger: ".o_kanban_add",
    content: _t("add it"),
    position: "bottom",
},
]);

});