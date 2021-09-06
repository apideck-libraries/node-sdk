# Apideck.UpdateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`status` | [**Status**](Status.md) |  | [optional] 
`url` | **string** | The URL of the webhook endpoint. | [optional] 
`events` | [**Array&lt;Event&gt;**](Event.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:


* [`Status`](Status.md)

* [`Event`](Event.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


