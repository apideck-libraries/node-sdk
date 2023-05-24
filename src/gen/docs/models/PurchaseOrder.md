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







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


