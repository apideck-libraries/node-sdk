# Apideck.OrderPickupDetails

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`accepted_at` | **Date** |  | [optional] 
`auto_complete_duration` | **string** | The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, \'P1W3D\'). | [optional] 
`cancel_reason` | **string** | A description of why the pickup was canceled. | [optional] 
`expires_at` | **Date** | Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). The expiration time can only be set up to 7 days in the future. If &#x60;expires_at&#x60; is not set, this pickup fulfillment is automatically accepted when  placed. | [optional] 
`schedule_type` | **string** | The schedule type of the pickup fulfillment. | [optional] 
`pickup_at` | **Date** | The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,  \&quot;2016-09-04T23:59:33.123Z\&quot;.  For fulfillments with the schedule type &#x60;ASAP&#x60;, this is automatically set to the current time plus the expected duration to prepare the fulfillment. | [optional] 
`pickup_window_duration` | **string** | The window of time in which the order should be picked up after the &#x60;pickup_at&#x60; timestamp. Must be in RFC 3339 duration format, e.g., \&quot;P1W3D\&quot;. Can be used as an informational guideline for merchants. | [optional] 
`prep_time_duration` | **string** | The duration of time it takes to prepare this fulfillment. The duration must be in RFC 3339 format (for example, \&quot;P1W3D\&quot;). | [optional] 
`note` | **string** | A note meant to provide additional instructions about the pickup fulfillment displayed in the Square Point of Sale application and set by the API. | [optional] 
`placed_at` | **Date** | Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`rejected_at` | **Date** | Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`ready_at` | **Date** | Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`expired_at` | **Date** | Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`picked_up_at` | **Date** | Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`canceled_at` | **Date** | Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format (for example, \&quot;2016-09-04T23:59:33.123Z\&quot;). | [optional] 
`is_curbside_pickup` | **boolean** | If set to &#x60;true&#x60;, indicates that this pickup order is for curbside pickup, not in-store pickup. | [optional] 
`curbside_pickup_details` | [**OrderPickupDetailsCurbsidePickupDetails**](OrderPickupDetailsCurbsidePickupDetails.md) |  | [optional] 
`recipient` | [**OrderPickupDetailsRecipient**](OrderPickupDetailsRecipient.md) |  | [optional] 





<a name="OrderPickupDetailsScheduleType"></a>
## Enum: OrderPickupDetails.schedule_type


* `scheduled` (value: `'scheduled'`)




## Referenced Types:
















* [`OrderPickupDetailsCurbsidePickupDetails`](OrderPickupDetailsCurbsidePickupDetails.md)
* [`OrderPickupDetailsRecipient`](OrderPickupDetailsRecipient.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


