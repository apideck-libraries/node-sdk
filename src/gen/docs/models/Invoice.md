# Apideck.Invoice

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`number` | **string** |  | [optional] 
`customer` | [**Customer**](Customer.md) |  | [optional] 
`date` | **Date** | Date invoice was issued - YYYY-MM-DD | [optional] 
`dueDate` | **Date** | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD | [optional] 
`poNumber` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`status` | **string** | Invoice status | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`subTotal` | **number** |  | [optional] 
`totalTax` | **number** |  | [optional] 
`total` | **number** |  | [optional] 
`balance` | **number** |  | [optional] 
`deposit` | **number** |  | [optional] 
`customerMemo` | **string** |  | [optional] 
`lineItems` | [**Array&lt;InvoiceLineItems&gt;**](InvoiceLineItems.md) |  | [optional] 
`billingAddress` | [**Address**](Address.md) |  | [optional] 
`shippingAddress` | [**Address**](Address.md) |  | [optional] 
`updatedBy` | **string** |  | [optional] 
`createdBy` | **string** |  | [optional] 
`updatedAt` | **Date** |  | [optional] 
`createdAt` | **Date** |  | [optional] 





<a name="InvoiceStatus"></a>
## Enum: Invoice.status


* `draft` (value: `'draft'`)

* `submitted` (value: `'submitted'`)

* `partiallyPaid` (value: `'partially_paid'`)

* `paid` (value: `'paid'`)

* `_void` (value: `'void'`)




## Referenced Types:



* [`Customer`](Customer.md)




* [`Currency`](Currency.md)






* [`InvoiceLineItems`](InvoiceLineItems.md)
* [`Address`](Address.md)
* [`Address`](Address.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


