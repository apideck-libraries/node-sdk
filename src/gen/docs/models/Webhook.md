# Apideck.Webhook

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`status` | **string** | The status of the webhook. | 
`url` | **string** | The URL of the webhook endpoint. | 
`events` | **Array&lt;string&gt;** | The list of subscribed events for this webhook. [’*’] indicates that all events are enabled. | 
`id` | **string** |  | [optional] 
`description` | **string** | An optional description of what the webhook is used for. | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="WebhookStatus"></a>
## Enum: Webhook.status


* `enabled` (value: `'enabled'`)

* `disabled` (value: `'disabled'`)




<a name="Array<WebhookEvents>"></a>
## Enum: Webhook.events


* `Star` (value: `'*'`)

* `vault_connection_created` (value: `'vault.connection.created'`)

* `vault_connection_updated` (value: `'vault.connection.updated'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


