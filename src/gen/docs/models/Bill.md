# Apideck.Bill

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`bill_number` | **string** | Reference to supplier bill number | [optional] 
`supplier` | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`bill_date` | **Date** | Date bill was issued - YYYY-MM-DD. | [optional] 
`due_date` | **Date** | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD. | [optional] 
`paid_date` | **Date** | The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD. | [optional] 
`po_number` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`reference` | **string** | Optional bill reference. | [optional] 
`line_items` | [**Array&lt;BillLineItem&gt;**](BillLineItem.md) |  | [optional] 
`terms` | **string** | Terms of payment. | [optional] 
`balance` | **number** | Balance of bill due. | [optional] 
`deposit` | **number** | Amount of deposit made to this bill. | [optional] 
`sub_total` | **number** | Sub-total amount, normally before tax. | [optional] 
`total_tax` | **number** | Total tax amount applied to this bill. | [optional] 
`total` | **number** | Total amount of bill, including tax. | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`notes` | **string** |  | [optional] 
`status` | **string** | Invoice status | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`payment_method` | **string** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
`channel` | **string** | The channel through which the transaction is processed. | [optional] 
`language` | **string** | language code according to ISO 639-1. For the United States - EN | [optional] 
`accounting_by_row` | **boolean** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`discount_percentage` | **number** | Discount percentage applied to this transaction. | [optional] 
`source_document_url` | **string** | URL link to a source document - shown as \'Go to [appName]\' in the downstream app. Currently only supported for Xero. | [optional] 
`tracking_categories` | [**LinkedTrackingCategories**](LinkedTrackingCategories.md) |  | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`custom_fields` | [**Array&lt;CustomField&gt;**](CustomField.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 
`accounting_period` | **string** | Accounting period | [optional] 





<a name="BillStatus"></a>
## Enum: Bill.status


* `draft` (value: `'draft'`)

* `submitted` (value: `'submitted'`)

* `authorised` (value: `'authorised'`)

* `partially_paid` (value: `'partially_paid'`)

* `paid` (value: `'paid'`)

* `void` (value: `'void'`)

* `credit` (value: `'credit'`)

* `deleted` (value: `'deleted'`)




## Referenced Types:



* [`LinkedSupplier`](LinkedSupplier.md)

* [`Currency`](Currency.md)







* [`BillLineItem`](BillLineItem.md)









* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)




* [`BankAccount`](BankAccount.md)


* [`LinkedTrackingCategories`](LinkedTrackingCategories.md)





* [`CustomField`](CustomField.md)

* [`PassThroughBody`](PassThroughBody.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


