# Apideck.Webhook

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_api` | [**UnifiedApiId**](UnifiedApiId.md) |  | 
`status` | [**Status**](Status.md) |  | 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | 
`execute_base_url` | **string** | The Unify Base URL events from connectors will be sent to after service id is appended. | 
`events` | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | The list of subscribed events for this webhook. [&#x60;*&#x60;] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)
* [`Status`](Status.md)


* [`WebhookEventType`](WebhookEventType.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


