# Apideck.Invoice

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`downstream_id` | **string** | The third-party API ID of original entity | [optional] 
`type` | **string** | Invoice type | [optional] 
`number` | **string** | Invoice number. | [optional] 
`customer` | [**LinkedCustomer**](LinkedCustomer.md) |  | [optional] 
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
`total` | **number** | Total amount of invoice, including tax. | [optional] 
`balance` | **number** | Balance of invoice due. | [optional] 
`deposit` | **number** | Amount of deposit made to this invoice. | [optional] 
`customer_memo` | **string** | Customer memo | [optional] 
`line_items` | [**Array&lt;InvoiceLineItem&gt;**](InvoiceLineItem.md) |  | [optional] 
`billing_address` | [**Address**](Address.md) |  | [optional] 
`shipping_address` | [**Address**](Address.md) |  | [optional] 
`template_id` | **string** | Optional invoice template | [optional] 
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









* [`InvoiceLineItem`](InvoiceLineItem.md)
* [`Address`](Address.md)
* [`Address`](Address.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


