# Apideck.WebhookSupport

### Description

How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`mode` | **string** | Mode of the webhook support. | [optional] 
`subscription_level` | **string** | Received events are scoped to connection or across integration. | [optional] 
`managed_via` | **string** | How the subscription is managed in the downstream. | [optional] 
`virtual_webhooks` | [**VirtualWebhooks**](VirtualWebhooks.md) |  | [optional] 





<a name="WebhookSupportMode"></a>
## Enum: WebhookSupport.mode


* `native` (value: `'native'`)

* `virtual` (value: `'virtual'`)

* `none` (value: `'none'`)




<a name="WebhookSupportSubscriptionLevel"></a>
## Enum: WebhookSupport.subscription_level


* `connection` (value: `'connection'`)

* `integration` (value: `'integration'`)




<a name="WebhookSupportManagedVia"></a>
## Enum: WebhookSupport.managed_via


* `manual` (value: `'manual'`)

* `api` (value: `'api'`)




## Referenced Types:



* [`VirtualWebhooks`](VirtualWebhooks.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


