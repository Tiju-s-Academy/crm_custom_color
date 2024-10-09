# -*- coding: utf-8 -*-
from odoo import models, fields

class CRMStageColorSettings(models.Model):
    _name = 'crm.stage.color.settings'
    _description = 'CRM Stage Color Settings'

    stage_id = fields.Many2one('crm.stage', string="Stage", required=True)
    color = fields.Char(string="Color", help="Color in HEX format (e.g. #FF5733)")


class CRMLead(models.Model):
    _inherit = 'crm.lead'

    def _get_stage_color(self):
        color_settings = self.env['crm.stage.color.settings'].search([])
        colors = {rec.stage_id.id: rec.color for rec in color_settings}
        return colors
