# Apideck.Invoice

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`type` | **string** |  | [optional] 
`number` | **string** |  | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
`invoice_date` | **Date** | Date invoice was issued - YYYY-MM-DD | [optional] 
`due_date` | **Date** | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD | [optional] 
`po_number` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`status` | **string** | Invoice status | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`tax_inclusive` | **boolean** | Amounts include tax | [optional] 
`sub_total` | **number** |  | [optional] 
`total_tax` | **number** |  | [optional] 
`total` | **number** |  | [optional] 
`balance` | **number** |  | [optional] 
`deposit` | **number** |  | [optional] 
`customer_memo` | **string** |  | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`billing_address` | [**Address**](Address.md) |  | [optional] 
`shipping_address` | [**Address**](Address.md) |  | [optional] 
`row_version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="InvoiceType"></a>
## Enum: Invoice.type


* `standard` (value: `'standard'`)

* `credit` (value: `'credit'`)

* `service` (value: `'service'`)

* `product` (value: `'product'`)

* `other` (value: `'other'`)




<a name="InvoiceStatus"></a>
## Enum: Invoice.status


* `draft` (value: `'draft'`)

* `submitted` (value: `'submitted'`)

* `partially_paid` (value: `'partially_paid'`)

* `paid` (value: `'paid'`)

* `void` (value: `'void'`)

* `credit` (value: `'credit'`)




## Referenced Types:




* [`LinkedCustomer`](LinkedCustomer.md)




* [`Currency`](Currency.md)







* [`InvoiceLineItem`](InvoiceLineItem.md)
* [`Address`](Address.md)
* [`Address`](Address.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


