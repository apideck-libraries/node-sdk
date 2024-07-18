# Apideck.Invoice

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`type` | **string** | Invoice type | [optional] 
`number` | **string** | Invoice number. | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`invoice_date` | **Date** | Date invoice was issued - YYYY-MM-DD. | [optional] 
`due_date` | **Date** | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD. | [optional] 
`terms` | **string** | Terms of payment. | [optional] 
`po_number` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`reference` | **string** | Optional invoice reference. | [optional] 
`status` | **string** | Invoice status | [optional] 
`invoice_sent` | **boolean** | Invoice sent to contact/customer. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`sub_total` | **number** | Sub-total amount, normally before tax. | [optional] 
`total_tax` | **number** | Total tax amount applied to this invoice. | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`discount_percentage` | **number** | Discount percentage applied to this invoice. | [optional] 
`discount_amount` | **number** | Discount amount applied to this invoice. | [optional] 
`total` | **number** | Total amount of invoice, including tax. | [optional] 
`balance` | **number** | Balance of invoice due. | [optional] 
`deposit` | **number** | Amount of deposit made to this invoice. | [optional] 
`customer_memo` | **string** | Customer memo | [optional] 
`tracking_category` | [**DeprecatedLinkedTrackingCategory**](DeprecatedLinkedTrackingCategory.md) |  | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`billing_address` | [**Address**](Address.md) |  | [optional] 
`shipping_address` | [**Address**](Address.md) |  | [optional] 
`template_id` | **string** | Optional invoice template | [optional] 
`source_document_url` | **string** | URL link to a source document - shown as \'Go to [appName]\' in the downstream app. Currently only supported for Xero. | [optional] 
`payment_method` | **string** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
`channel` | **string** | The channel through which the transaction is processed. | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`accounting_by_row` | **boolean** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="InvoiceType"></a>
## Enum: Invoice.type


* `standard` (value: `'standard'`)

* `credit` (value: `'credit'`)

* `service` (value: `'service'`)

* `product` (value: `'product'`)

* `supplier` (value: `'supplier'`)

* `other` (value: `'other'`)




<a name="InvoiceStatus"></a>
## Enum: Invoice.status


* `draft` (value: `'draft'`)

* `submitted` (value: `'submitted'`)

* `authorised` (value: `'authorised'`)

* `partially_paid` (value: `'partially_paid'`)

* `paid` (value: `'paid'`)

* `void` (value: `'void'`)

* `credit` (value: `'credit'`)

* `deleted` (value: `'deleted'`)




## Referenced Types:




* [`LinkedCustomer`](LinkedCustomer.md)








* [`Currency`](Currency.md)











* [`DeprecatedLinkedTrackingCategory`](DeprecatedLinkedTrackingCategory.md)
* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)
* [`InvoiceLineItem`](InvoiceLineItem.md)
* [`Address`](Address.md)
* [`Address`](Address.md)






* [`BankAccount`](BankAccount.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)

* [`CustomField`](CustomField.md)





* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


