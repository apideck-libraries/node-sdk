# Apideck.Bill

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`supplier` | [**LinkedSupplier**](LinkedSupplier.md) |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`currency_rate` | **number** | Currency Exchange Rate at the time entity was recorded/generated. | [optional] 
`tax_inclusive` | **boolean** | Amounts are including tax | [optional] 
`bill_date` | **Date** | Date bill was issued - YYYY-MM-DD. | [optional] 
`due_date` | **Date** | The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD. | [optional] 
`po_number` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`terms` | **string** | Terms of payment. | [optional] 
`balance` | **number** | Balance of bill due. | [optional] 
`total` | **number** | Total amount of bill, including tax. | [optional] 
`tax_code` | **string** | Applicable tax id/code override if tax is not supplied on a line item basis. | [optional] 
`notes` | **string** |  | [optional] 
`status` | **string** | Invoice status | [optional] 
`ledger_account` | [**LinkedLedgerAccount**](LinkedLedgerAccount.md) |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 
`row_version` | **string** |  | [optional] 





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





* [`InvoiceLineItem`](InvoiceLineItem.md)






* [`LinkedLedgerAccount`](LinkedLedgerAccount.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


