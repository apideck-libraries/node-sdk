# Apideck.ConsumerWebhook

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_api` | [**UnifiedApiId**](UnifiedApiId.md) |  | 
`status` | **string** | The status of the webhook. | 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | 
`execute_base_url` | **string** | The Unify Base URL events from connectors will be sent to after service id is appended. | 
`events` | **Array&lt;string&gt;** | The list of subscribed events for this webhook. [&#x60;*&#x60;] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="ConsumerWebhookStatus"></a>
## Enum: ConsumerWebhook.status


* `enabled` (value: `'enabled'`)

* `disabled` (value: `'disabled'`)




<a name="Array<ConsumerWebhookEvents>"></a>
## Enum: ConsumerWebhook.events


* `Star` (value: `'*'`)

* `crm_activity_created` (value: `'crm.activity.created'`)

* `crm_activity_updated` (value: `'crm.activity.updated'`)

* `crm_activity_deleted` (value: `'crm.activity.deleted'`)

* `crm_company_created` (value: `'crm.company.created'`)

* `crm_company_updated` (value: `'crm.company.updated'`)

* `crm_company_deleted` (value: `'crm.company.deleted'`)

* `crm_contact_created` (value: `'crm.contact.created'`)

* `crm_contact_updated` (value: `'crm.contact.updated'`)

* `crm_contact_deleted` (value: `'crm.contact.deleted'`)

* `crm_lead_created` (value: `'crm.lead.created'`)

* `crm_lead_updated` (value: `'crm.lead.updated'`)

* `crm_lead_deleted` (value: `'crm.lead.deleted'`)

* `crm_note_created` (value: `'crm.note.created'`)

* `crm_notes_updated` (value: `'crm.notes.updated'`)

* `crm_notes_deleted` (value: `'crm.notes.deleted'`)

* `crm_opportunity_created` (value: `'crm.opportunity.created'`)

* `crm_opportunity_updated` (value: `'crm.opportunity.updated'`)

* `crm_opportunity_deleted` (value: `'crm.opportunity.deleted'`)

* `lead_lead_created` (value: `'lead.lead.created'`)

* `lead_lead_updated` (value: `'lead.lead.updated'`)

* `lead_lead_deleted` (value: `'lead.lead.deleted'`)

* `vault_connection_created` (value: `'vault.connection.created'`)

* `vault_connection_updated` (value: `'vault.connection.updated'`)

* `vault_connection_deleted` (value: `'vault.connection.deleted'`)

* `vault_connection_callable` (value: `'vault.connection.callable'`)

* `ats_job_created` (value: `'ats.job.created'`)

* `ats_job_updated` (value: `'ats.job.updated'`)

* `ats_job_deleted` (value: `'ats.job.deleted'`)

* `ats_applicant_created` (value: `'ats.applicant.created'`)

* `ats_applicant_updated` (value: `'ats.applicant.updated'`)

* `ats_applicant_deleted` (value: `'ats.applicant.deleted'`)

* `pos_order_created` (value: `'pos.order.created'`)

* `pos_order_updated` (value: `'pos.order.updated'`)

* `pos_order_deleted` (value: `'pos.order.deleted'`)

* `pos_product_created` (value: `'pos.product.created'`)

* `pos_product_updated` (value: `'pos.product.updated'`)

* `pos_product_deleted` (value: `'pos.product.deleted'`)

* `pos_payment_created` (value: `'pos.payment.created'`)

* `pos_payment_updated` (value: `'pos.payment.updated'`)

* `pos_payment_deleted` (value: `'pos.payment.deleted'`)

* `pos_merchant_created` (value: `'pos.merchant.created'`)

* `pos_merchant_updated` (value: `'pos.merchant.updated'`)

* `pos_merchant_deleted` (value: `'pos.merchant.deleted'`)

* `pos_location_created` (value: `'pos.location.created'`)

* `pos_location_updated` (value: `'pos.location.updated'`)

* `pos_location_deleted` (value: `'pos.location.deleted'`)

* `pos_item_created` (value: `'pos.item.created'`)

* `pos_item_updated` (value: `'pos.item.updated'`)

* `pos_item_deleted` (value: `'pos.item.deleted'`)

* `pos_modifier_created` (value: `'pos.modifier.created'`)

* `pos_modifier_updated` (value: `'pos.modifier.updated'`)

* `pos_modifier_deleted` (value: `'pos.modifier.deleted'`)

* `pos_modifier_group_created` (value: `'pos.modifier-group.created'`)

* `pos_modifier_group_updated` (value: `'pos.modifier-group.updated'`)

* `pos_modifier_group_deleted` (value: `'pos.modifier-group.deleted'`)




## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


