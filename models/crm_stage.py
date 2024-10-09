from odoo import models, fields

class CrmStage(models.Model):
    _inherit = 'crm.stage'

    kanban_color = fields.Char(string="Kanban Card Color", help="Custom color for Kanban cards in this stage")
