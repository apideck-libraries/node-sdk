# Apideck.OrderFulfillments

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`status` | **string** | The state of the fulfillment. | [optional] 
`type` | **string** |  | [optional] 
`pickup_details` | [**OrderPickupDetails**](OrderPickupDetails.md) |  | [optional] 
`shipment_details` | **object** |  | [optional] 





<a name="OrderFulfillmentsStatus"></a>
## Enum: OrderFulfillments.status


* `proposed` (value: `'proposed'`)

* `reserved` (value: `'reserved'`)

* `prepared` (value: `'prepared'`)

* `completed` (value: `'completed'`)

* `cancelled` (value: `'cancelled'`)

* `failed` (value: `'failed'`)

* `other` (value: `'other'`)




<a name="OrderFulfillmentsType"></a>
## Enum: OrderFulfillments.type


* `pickup` (value: `'pickup'`)

* `shipment` (value: `'shipment'`)




## Referenced Types:



* [`OrderPickupDetails`](OrderPickupDetails.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


