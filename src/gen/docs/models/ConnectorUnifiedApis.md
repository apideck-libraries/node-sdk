# Apideck.ConnectorUnifiedApis

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 
`name` | **string** | Name of the API. | [optional] 
`auth_only` | **boolean** | Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API | [optional] 
`oauth_scopes` | [**Array&lt;ConnectorOauthScopes1&gt;**](ConnectorOauthScopes1.md) |  | [optional] 
`supported_resources` | [**Array&lt;LinkedConnectorResource&gt;**](LinkedConnectorResource.md) | List of resources that are supported on the connector. | [optional] 
`downstream_unsupported_resources` | **Array&lt;string&gt;** | List of resources that are not supported on the downstream. | [optional] 
`supported_events` | [**Array&lt;ConnectorEvent&gt;**](ConnectorEvent.md) | List of events that are supported on the connector for this Unified API. | [optional] 





## Referenced Types:
* [`UnifiedApiId`](UnifiedApiId.md)


* [`ConnectorOauthScopes1`](ConnectorOauthScopes1.md)
* [`LinkedConnectorResource`](LinkedConnectorResource.md)

* [`ConnectorEvent`](ConnectorEvent.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


