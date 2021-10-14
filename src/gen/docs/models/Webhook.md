# Apideck.Webhook

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`unified_api` | **string** | The unifiedApi the webhook originated from | 
`status` | [**Status**](Status.md) |  | 
`url` | **string** | The URL of the webhook endpoint. | 
`execute_base_url` | **string** | The Unify Base URL events from connectors will be sent to after service id is appended. | 
`events` | [**Array&lt;EventType4&gt;**](EventType4.md) | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:

* [`Status`](Status.md)


* [`EventType4`](EventType4.md)





---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


