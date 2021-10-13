# Apideck.UpdateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`unified_api` | **string** | The unifiedApi the webhook originated from | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`status` | [**Status**](Status.md) |  | [optional] 
`url` | **string** | The URL of the webhook endpoint. | [optional] 
`events` | [**Array&lt;EventType4&gt;**](EventType4.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:



* [`Status`](Status.md)

* [`EventType4`](EventType4.md)



---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


