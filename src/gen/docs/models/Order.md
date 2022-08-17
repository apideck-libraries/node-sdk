# Apideck.Order

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`merchant_id` | **string** |  | 
`location_id` | **string** |  | 
`id` | **string** |  | [optional] 
`idempotency_key` | **string** | A value you specify that uniquely identifies this request among requests you have sent. | [optional] 
`order_number` | **string** |  | [optional] 
`order_date` | **Date** |  | [optional] 
`closed_date` | **Date** |  | [optional] 
`reference_id` | **string** | An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system. | [optional] 
`status` | **string** | Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to \'open\'. More info [https://docs.clover.com/reference/orderupdateorder]() | [optional] 
`payment_status` | **string** | Is this order paid or not? | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`title` | **string** |  | [optional] 
`note` | **string** | A note with information about this order, may be printed on the order receipt and displayed in apps | [optional] 
`customer_id` | **string** |  | [optional] 
`employee_id` | **string** |  | [optional] 
`order_type_id` | **string** |  | [optional] 
`table` | **string** |  | [optional] 
`seat` | **string** |  | [optional] 
`total_amount` | **number** |  | [optional] 
`total_tip` | **number** |  | [optional] 
`total_tax` | **number** |  | [optional] 
`total_discount` | **number** |  | [optional] 
`total_refund` | **number** |  | [optional] 
`total_service_charge` | **number** |  | [optional] 
`refunded` | **boolean** |  | [optional] 
`customers` | [**Array&lt;OrderCustomers&gt;**](OrderCustomers.md) |  | [optional] 
`fulfillments` | [**Array&lt;OrderFulfillments&gt;**](OrderFulfillments.md) |  | [optional] 
`line_items` | [**Array&lt;OrderLineItems&gt;**](OrderLineItems.md) |  | [optional] 
`payments` | [**Array&lt;OrderPayments&gt;**](OrderPayments.md) |  | [optional] 
`service_charges` | [**ServiceCharges**](ServiceCharges.md) |  | [optional] 
`refunds` | [**Array&lt;OrderRefunds&gt;**](OrderRefunds.md) |  | [optional] 
`taxes` | **Array&lt;object&gt;** |  | [optional] 
`discounts` | [**Array&lt;OrderDiscounts&gt;**](OrderDiscounts.md) |  | [optional] 
`tenders` | [**Array&lt;OrderTenders&gt;**](OrderTenders.md) |  | [optional] 
`source` | **string** | Source of order. Indicates the way that the order was placed. | [optional] 
`voided` | **boolean** |  | [optional] 
`voided_at` | **Date** |  | [optional] 
`version` | **string** |  | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="OrderStatus"></a>
## Enum: Order.status


* `open` (value: `'open'`)

* `draft` (value: `'draft'`)

* `delivered` (value: `'delivered'`)

* `delayed` (value: `'delayed'`)

* `voided` (value: `'voided'`)

* `completed` (value: `'completed'`)

* `hidden` (value: `'hidden'`)




<a name="OrderPaymentStatus"></a>
## Enum: Order.payment_status


* `open` (value: `'open'`)

* `paid` (value: `'paid'`)

* `refunded` (value: `'refunded'`)

* `credited` (value: `'credited'`)

* `partially_paid` (value: `'partially_paid'`)

* `partially_refunded` (value: `'partially_refunded'`)

* `unknown` (value: `'unknown'`)




<a name="OrderSource"></a>
## Enum: Order.source


* `in_store` (value: `'in-store'`)

* `online` (value: `'online'`)

* `opt` (value: `'opt'`)

* `api` (value: `'api'`)

* `kiosk` (value: `'kiosk'`)

* `caller_id` (value: `'caller-id'`)

* `google` (value: `'google'`)

* `invoice` (value: `'invoice'`)




## Referenced Types:










* [`Currency`](Currency.md)














* [`OrderCustomers`](OrderCustomers.md)
* [`OrderFulfillments`](OrderFulfillments.md)
* [`OrderLineItems`](OrderLineItems.md)
* [`OrderPayments`](OrderPayments.md)
* [`ServiceCharges`](ServiceCharges.md)
* [`OrderRefunds`](OrderRefunds.md)

* [`OrderDiscounts`](OrderDiscounts.md)
* [`OrderTenders`](OrderTenders.md)









---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


