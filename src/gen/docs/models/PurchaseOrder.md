# Apideck.PurchaseOrder

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`po_number` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. | [optional] 
`reference` | **string** | Optional purchase order reference. | [optional] 
`supplier` | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
`company_id` | **string** | The company or subsidiary id the transaction belongs to | [optional] 
`status` | **string** |  | [optional] 
`issued_date` | **Date** | Date purchase order was issued - YYYY-MM-DD. | [optional] 
`delivery_date` | **Date** | The date on which the purchase order is to be delivered - YYYY-MM-DD. | [optional] 
`expected_arrival_date` | **Date** | The date on which the order is expected to arrive - YYYY-MM-DD. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`sub_total` | **number** | Sub-total amount, normally before tax. | [optional] 
`total_tax` | **number** | Total tax amount applied to this invoice. | [optional] 
`total` | **number** | Total amount of invoice, including tax. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`shipping_address` | [**Address**](Address.md) |  | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`template_id` | **string** | Optional purchase order template | [optional] 
`discount_percentage` | **number** | Discount percentage applied to this transaction. | [optional] 
`bank_account` | [**BankAccount**](BankAccount.md) |  | [optional] 
`accounting_by_row` | **boolean** | Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each row. | [optional] 
`due_date` | **Date** | The due date is the date on which a payment is scheduled to be received - YYYY-MM-DD. | [optional] 
`payment_method` | **string** | Payment method used for the transaction, such as cash, credit card, bank transfer, or check | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`channel` | **string** | The channel through which the transaction is processed. | [optional] 
`memo` | **string** | Message for the supplier. This text appears on the Purchase Order. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="PurchaseOrderStatus"></a>
## Enum: PurchaseOrder.status


* `draft` (value: `'draft'`)

* `open` (value: `'open'`)

* `closed` (value: `'closed'`)

* `deleted` (value: `'deleted'`)

* `billed` (value: `'billed'`)

* `other` (value: `'other'`)




## Referenced Types:




* [`LinkedSupplier`](LinkedSupplier.md)





* [`Currency`](Currency.md)





* [`InvoiceLineItem`](InvoiceLineItem.md)
* [`Address`](Address.md)
* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)


* [`BankAccount`](BankAccount.md)













---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


