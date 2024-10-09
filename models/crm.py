from odoo import models, fields

class CrmLead(models.Model):
    _inherit = "crm.lead"
    stage_color = fields.Char(string="Stage Color", related="stage_id.color", store=True)

class CrmStage(models.Model):
    _inherit = 'crm.stage'

    color = fields.Char(string="Kanban Card Color", help="Custom color for Kanban cards in this stage")
