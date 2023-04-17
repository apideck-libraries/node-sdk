# Apideck.EcommerceOrder

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | 
`order_number` | **string** | Order number, if any. | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`discounts` | [**Array&lt;EcommerceDiscount&gt;**](EcommerceDiscount.md) |  | [optional] 
`sub_total` | **string** | Sub-total amount, normally before tax. | [optional] 
`shipping_cost` | **string** | Shipping cost, if any. | [optional] 
`total_discount` | **string** | Total discount, if any. | [optional] 
`total_tax` | **string** | Total tax, if any. | [optional] 
`total_amount` | **string** | Total amount due. | [optional] 
`status` | [**EcommerceOrderStatus**](EcommerceOrderStatus.md) |  | [optional] 
`payment_status` | **string** | Current payment status of the order. | [optional] 
`fulfillment_status` | **string** | Current fulfillment status of the order. | [optional] 
`payment_method` | **string** | Payment method used for this order. | [optional] 
`customer` | [**LinkedEcommerceCustomer**](LinkedEcommerceCustomer.md) |  | [optional] 
`billing_address` | [**EcommerceAddress**](EcommerceAddress.md) |  | [optional] 
`shipping_address` | [**EcommerceAddress**](EcommerceAddress.md) |  | [optional] 
`tracking` | [**Array&lt;TrackingItem&gt;**](TrackingItem.md) |  | [optional] 
`line_items` | [**Array&lt;EcommerceOrderLineItem&gt;**](EcommerceOrderLineItem.md) |  | [optional] 
`note` | **string** | Note for the order. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 





<a name="EcommerceOrderPaymentStatus"></a>
## Enum: EcommerceOrder.payment_status


* `pending` (value: `'pending'`)

* `authorized` (value: `'authorized'`)

* `paid` (value: `'paid'`)

* `partial` (value: `'partial'`)

* `refunded` (value: `'refunded'`)

* `voided` (value: `'voided'`)

* `unknown` (value: `'unknown'`)




<a name="EcommerceOrderFulfillmentStatus"></a>
## Enum: EcommerceOrder.fulfillment_status


* `pending` (value: `'pending'`)

* `shipped` (value: `'shipped'`)

* `partial` (value: `'partial'`)

* `delivered` (value: `'delivered'`)

* `cancelled` (value: `'cancelled'`)

* `returned` (value: `'returned'`)

* `unknown` (value: `'unknown'`)




## Referenced Types:


* [`Currency`](Currency.md)
* [`EcommerceDiscount`](EcommerceDiscount.md)





* [`EcommerceOrderStatus`](EcommerceOrderStatus.md)



* [`LinkedEcommerceCustomer`](LinkedEcommerceCustomer.md)
* [`EcommerceAddress`](EcommerceAddress.md)
* [`EcommerceAddress`](EcommerceAddress.md)
* [`TrackingItem`](TrackingItem.md)
* [`EcommerceOrderLineItem`](EcommerceOrderLineItem.md)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


