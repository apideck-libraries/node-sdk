# Apideck.Connector

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID of the connector. | [optional] 
`name` | **string** | Name of the connector. | [optional] 
`status` | [**ConnectorStatus**](ConnectorStatus.md) |  | [optional] 
`description` | **string** |  | [optional] 
`icon_url` | **string** | Link to a small square icon for the connector. | [optional] 
`logo_url` | **string** | Link to the full logo for the connector. | [optional] 
`website_url` | **string** | Link to the connector\'s website. | [optional] 
`auth_type` | **string** | Type of authorization used by the connector | [optional] 
`auth_only` | **boolean** |  | [optional] 
`oauth_grant_type` | **string** | OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types | [optional] 
`oauth_credentials_source` | **string** | Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault. | [optional] 
`has_sandbox_credentials` | **boolean** | Indicates whether Apideck Sandbox OAuth credentials are available. | [optional] 
`settings` | [**Array&lt;ConnectorSetting&gt;**](ConnectorSetting.md) |  | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`unified_apis` | [**Array&lt;ConnectorUnifiedApis&gt;**](ConnectorUnifiedApis.md) | List of Unified APIs that feature this connector. | [optional] 
`supported_resources` | [**Array&lt;ConnectorSupportedResources&gt;**](ConnectorSupportedResources.md) | List of resources that are supported on the connector. | [optional] 
`configurable_resources` | **Array&lt;string&gt;** | List of resources that have settings that can be configured. | [optional] 
`supported_events` | [**Array&lt;ConnectorSupportedEvents&gt;**](ConnectorSupportedEvents.md) | List of events that are supported on the connector. Events are delivered via Webhooks. | [optional] 
`docs` | [**Array&lt;ConnectorDoc&gt;**](ConnectorDoc.md) |  | [optional] 





<a name="ConnectorAuthType"></a>
## Enum: Connector.auth_type


* `oauth2` (value: `'oauth2'`)

* `apiKey` (value: `'apiKey'`)

* `basic` (value: `'basic'`)

* `custom` (value: `'custom'`)

* `none` (value: `'none'`)




<a name="ConnectorOauthGrantType"></a>
## Enum: Connector.oauth_grant_type


* `authorization_code` (value: `'authorization_code'`)

* `client_credentials` (value: `'client_credentials'`)




<a name="ConnectorOauthCredentialsSource"></a>
## Enum: Connector.oauth_credentials_source


* `integration` (value: `'integration'`)

* `connection` (value: `'connection'`)




## Referenced Types:


* [`ConnectorStatus`](ConnectorStatus.md)









* [`ConnectorSetting`](ConnectorSetting.md)

* [`ConnectorUnifiedApis`](ConnectorUnifiedApis.md)
* [`ConnectorSupportedResources`](ConnectorSupportedResources.md)

* [`ConnectorSupportedEvents`](ConnectorSupportedEvents.md)
* [`ConnectorDoc`](ConnectorDoc.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


