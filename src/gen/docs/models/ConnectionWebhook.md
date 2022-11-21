# Apideck.ConnectionWebhook

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





<a name="ConnectionWebhookStatus"></a>
## Enum: ConnectionWebhook.status


* `enabled` (value: `'enabled'`)

* `disabled` (value: `'disabled'`)




<a name="Array<ConnectionWebhookEvents>"></a>
## Enum: ConnectionWebhook.events


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

* `vault_connection_disabled` (value: `'vault.connection.disabled'`)

* `vault_connection_deleted` (value: `'vault.connection.deleted'`)

* `vault_connection_callable` (value: `'vault.connection.callable'`)

* `vault_connection_token_refresh_failed` (value: `'vault.connection.token_refresh.failed'`)

* `ats_job_created` (value: `'ats.job.created'`)

* `ats_job_updated` (value: `'ats.job.updated'`)

* `ats_job_deleted` (value: `'ats.job.deleted'`)

* `ats_applicant_created` (value: `'ats.applicant.created'`)

* `ats_applicant_updated` (value: `'ats.applicant.updated'`)

* `ats_applicant_deleted` (value: `'ats.applicant.deleted'`)

* `accounting_customer_created` (value: `'accounting.customer.created'`)

* `accounting_customer_updated` (value: `'accounting.customer.updated'`)

* `accounting_customer_deleted` (value: `'accounting.customer.deleted'`)

* `accounting_invoice_created` (value: `'accounting.invoice.created'`)

* `accounting_invoice_updated` (value: `'accounting.invoice.updated'`)

* `accounting_invoice_deleted` (value: `'accounting.invoice.deleted'`)

* `accounting_invoice_item_created` (value: `'accounting.invoice_item.created'`)

* `accounting_invoice_item_updated` (value: `'accounting.invoice_item.updated'`)

* `accounting_invoice_item_deleted` (value: `'accounting.invoice_item.deleted'`)

* `accounting_ledger_account_created` (value: `'accounting.ledger_account.created'`)

* `accounting_ledger_account_updated` (value: `'accounting.ledger_account.updated'`)

* `accounting_ledger_account_deleted` (value: `'accounting.ledger_account.deleted'`)

* `accounting_tax_rate_created` (value: `'accounting.tax_rate.created'`)

* `accounting_tax_rate_updated` (value: `'accounting.tax_rate.updated'`)

* `accounting_tax_rate_deleted` (value: `'accounting.tax_rate.deleted'`)

* `accounting_bill_created` (value: `'accounting.bill.created'`)

* `accounting_bill_updated` (value: `'accounting.bill.updated'`)

* `accounting_bill_deleted` (value: `'accounting.bill.deleted'`)

* `accounting_payment_created` (value: `'accounting.payment.created'`)

* `accounting_payment_updated` (value: `'accounting.payment.updated'`)

* `accounting_payment_deleted` (value: `'accounting.payment.deleted'`)

* `accounting_supplier_created` (value: `'accounting.supplier.created'`)

* `accounting_supplier_updated` (value: `'accounting.supplier.updated'`)

* `accounting_supplier_deleted` (value: `'accounting.supplier.deleted'`)

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

* `hris_employee_created` (value: `'hris.employee.created'`)

* `hris_employee_updated` (value: `'hris.employee.updated'`)

* `hris_employee_deleted` (value: `'hris.employee.deleted'`)

* `hris_company_created` (value: `'hris.company.created'`)

* `hris_company_updated` (value: `'hris.company.updated'`)

* `hris_company_deleted` (value: `'hris.company.deleted'`)

* `file_storage_file_created` (value: `'file-storage.file.created'`)

* `file_storage_file_updated` (value: `'file-storage.file.updated'`)

* `file_storage_file_deleted` (value: `'file-storage.file.deleted'`)




## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


