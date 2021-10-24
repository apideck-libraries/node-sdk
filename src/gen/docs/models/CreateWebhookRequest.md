# Apideck.CreateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_api` | **string** | The unifiedApi the webhook originated from | 
`status` | [**Status**](Status.md) |  | 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | 
`events` | [**Array&lt;EventType4&gt;**](EventType4.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 





## Referenced Types:

* [`Status`](Status.md)

* [`EventType4`](EventType4.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


