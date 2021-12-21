# Apideck.CreateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_api` | [**UnifiedApiId**](UnifiedApiId.md) |  | 
`status` | [**Status**](Status.md) |  | 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | 
`events` | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | The list of subscribed events for this webhook. [&#x60;*&#x60;] indicates that all events are enabled. | 
`description` | **string** |  | [optional] 





## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)
* [`Status`](Status.md)

* [`WebhookEventType`](WebhookEventType.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


