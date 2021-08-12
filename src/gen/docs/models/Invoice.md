# Apideck.Invoice

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`type` | **string** |  | [optional] 
`number` | **string** |  | [optional] 
`customer` | [**Customer**](Customer.md) |  | [optional] 
`customerContact` | [**CustomerContact**](CustomerContact.md) |  | [optional] 
`date` | **Date** | Date invoice was issued - YYYY-MM-DD | [optional] 
`dueDate` | **Date** | The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD | [optional] 
`poNumber` | **string** | A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order. | [optional] 
`status` | **string** | Status of the invoice | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`subTotal` | **number** | A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`totalTax` | **number** | A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`total` | **number** | A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`balance` | **number** | A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
`deposit` | **number** | A positive integer representing the smallest currency unit (e.g., 20000 cents equals $200.00 or 20000 equals ¥20000, a zero-decimal currency) | [optional] 
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
* [`CustomerContact`](CustomerContact.md)




* [`Currency`](Currency.md)






* [`InvoiceLineItems`](InvoiceLineItems.md)
* [`Address`](Address.md)
* [`Address`](Address.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


