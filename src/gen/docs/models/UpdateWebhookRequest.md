# Apideck.UpdateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`description` | **string** |  | [optional] 
`status` | [**Status**](Status.md) |  | [optional] 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | [optional] 
`events` | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | [optional] 





## Referenced Types:

* [`Status`](Status.md)

* [`WebhookEventType`](WebhookEventType.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


