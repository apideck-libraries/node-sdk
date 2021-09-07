# Apideck.Webhook

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`status` | **string** | The status of the webhook. | 
`url` | **string** | The URL of the webhook endpoint. | 
`events` | [**Array&lt;Event&gt;**](Event.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="WebhookStatus"></a>
## Enum: Webhook.status


* `enabled` (value: `'enabled'`)

* `disabled` (value: `'disabled'`)




## Referenced Types:


* [`Event`](Event.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


