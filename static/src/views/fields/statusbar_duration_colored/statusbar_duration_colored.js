/** @odoo-module **/
import { StatusBarDurationField,statusBarDurationField } from "@mail/views/fields/statusbar_duration/statusbar_duration_field";
import { registry } from "@web/core/registry";
import { _t } from "@web/core/l10n/translation";

import { Component, onWillRender, useEffect, useExternalListener, useRef } from "@odoo/owl";
import { browser } from "@web/core/browser/browser";
import { useCommand } from "@web/core/commands/command_hook";
import { Domain } from "@web/core/domain";
import { Dropdown } from "@web/core/dropdown/dropdown";
import { DropdownItem } from "@web/core/dropdown/dropdown_item";
import { groupBy } from "@web/core/utils/arrays";
import { escape } from "@web/core/utils/strings";
import { throttleForAnimation } from "@web/core/utils/timing";
import { useSpecialData } from "@web/views/fields/relational_utils";

export class StatusBarDurationFieldColored extends StatusBarDurationField {

    async selectItem(item) {
        const rootElement = $(this.rootRef.el);
        let old_selected = rootElement.find('.o_arrow_button_current')
        // Call the parent method to handle item selection
        await super.selectItem(item);
        let new_selected = rootElement.find('.o_arrow_button_current')
        // Get the stage color
        if (old_selected){
            old_selected.css('background-color', '')
        }
        // Apply the stage color if it exists and is valid
        const stageColor = this.props.record.data['stage_color'];
        if (stageColor && new_selected) {
            new_selected.css('background-color', stageColor);
        }
    }
}


export const statusBarDurationFieldColored = {
    ...statusBarDurationField,
    component: StatusBarDurationFieldColored,
}
registry.category("fields").add("statusbar_duration_colored", statusBarDurationFieldColored);
