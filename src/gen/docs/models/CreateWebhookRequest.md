# Apideck.CreateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`status` | [**Status**](Status.md) |  | 
`url` | **string** | The URL of the webhook endpoint. | 
`events` | [**Array&lt;Event&gt;**](Event.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:
* [`Status`](Status.md)

* [`Event`](Event.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


