# Apideck.UpdateWebhookRequest

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`status` | [**Status**](Status.md) |  | [optional] 
`delivery_url` | **string** | The delivery url of the webhook endpoint. | [optional] 
`events` | [**Array&lt;EventType4&gt;**](EventType4.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | [optional] 





## Referenced Types:

* [`Status`](Status.md)

* [`EventType4`](EventType4.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


