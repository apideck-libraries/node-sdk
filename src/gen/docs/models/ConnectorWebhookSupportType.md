# Apideck.ConnectorWebhookSupportType

### Description

Describes the configurations webhook support of the connector.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`mode` | **string** | Mode of the webhook support. | [optional] 
`subscription_level` | **string** | Received events are scoped to consumer or across integration. | [optional] 
`managed_via` | **string** | How the subscription is managed in the downstream. | [optional] 





<a name="ConnectorWebhookSupportTypeMode"></a>
## Enum: ConnectorWebhookSupportType.mode


* `native` (value: `'native'`)

* `virtual` (value: `'virtual'`)

* `none` (value: `'none'`)




<a name="ConnectorWebhookSupportTypeSubscriptionLevel"></a>
## Enum: ConnectorWebhookSupportType.subscription_level


* `consumer` (value: `'consumer'`)

* `integration` (value: `'integration'`)




<a name="ConnectorWebhookSupportTypeManagedVia"></a>
## Enum: ConnectorWebhookSupportType.managed_via


* `manual` (value: `'manual'`)

* `api` (value: `'api'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


