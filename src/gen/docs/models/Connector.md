# Apideck.Connector

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID of the connector. | [optional] 
`name` | **string** | Name of the connector. | [optional] 
`status` | [**ConnectorStatus**](ConnectorStatus.md) |  | [optional] 
`description` | **string** | A description of the object. | [optional] 
`icon_url` | **string** | Link to a small square icon for the connector. | [optional] 
`logo_url` | **string** | Link to the full logo for the connector. | [optional] 
`website_url` | **string** | Link to the connector\'s website. | [optional] 
`signup_url` | **string** | Link to the connector\'s signup page. | [optional] 
`partner_signup_url` | **string** | Link to the connector\'s partner program signup page. | [optional] 
`free_trial_available` | **boolean** | Set to &#x60;true&#x60; when the connector offers a free trial. Use &#x60;signup_url&#x60; to sign up for a free trial | [optional] 
`auth_type` | **string** | Type of authorization used by the connector | [optional] 
`auth_only` | **boolean** | Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API | [optional] 
`blind_mapped` | **boolean** | Set to &#x60;true&#x60; when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality. | [optional] 
`oauth_grant_type` | **string** | OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types | [optional] 
`oauth_credentials_source` | **string** | Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault. | [optional] 
`oauth_scopes` | [**Array&lt;ConnectorOauthScopes&gt;**](ConnectorOauthScopes.md) | List of OAuth Scopes available for this connector. | [optional] 
`custom_scopes` | **boolean** | Set to &#x60;true&#x60; when connector allows the definition of custom scopes. | [optional] 
`has_sandbox_credentials` | **boolean** | Indicates whether Apideck Sandbox OAuth credentials are available. | [optional] 
`settings` | [**Array&lt;ConnectorSetting&gt;**](ConnectorSetting.md) |  | [optional] 
`service_id` | **string** | Service provider identifier | [optional] 
`unified_apis` | [**Array&lt;ConnectorUnifiedApis&gt;**](ConnectorUnifiedApis.md) | List of Unified APIs that feature this connector. | [optional] 
`supported_resources` | [**Array&lt;LinkedConnectorResource&gt;**](LinkedConnectorResource.md) | List of resources that are supported on the connector. | [optional] 
`configurable_resources` | **Array&lt;string&gt;** | List of resources that have settings that can be configured. | [optional] 
`supported_events` | [**Array&lt;ConnectorEvent&gt;**](ConnectorEvent.md) | List of events that are supported on the connector across all Unified APIs. | [optional] 
`webhook_support` | [**WebhookSupport**](WebhookSupport.md) |  | [optional] 
`schema_support` | [**SchemaSupport**](SchemaSupport.md) |  | [optional] 
`docs` | [**Array&lt;ConnectorDoc&gt;**](ConnectorDoc.md) |  | [optional] 
`tls_support` | [**ConnectorTlsSupport**](ConnectorTlsSupport.md) |  | [optional] 





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

* `password` (value: `'password'`)




<a name="ConnectorOauthCredentialsSource"></a>
## Enum: Connector.oauth_credentials_source


* `integration` (value: `'integration'`)

* `connection` (value: `'connection'`)




## Referenced Types:


* [`ConnectorStatus`](ConnectorStatus.md)












* [`ConnectorOauthScopes`](ConnectorOauthScopes.md)


* [`ConnectorSetting`](ConnectorSetting.md)

* [`ConnectorUnifiedApis`](ConnectorUnifiedApis.md)
* [`LinkedConnectorResource`](LinkedConnectorResource.md)

* [`ConnectorEvent`](ConnectorEvent.md)
* [`WebhookSupport`](WebhookSupport.md)
* [`SchemaSupport`](SchemaSupport.md)
* [`ConnectorDoc`](ConnectorDoc.md)
* [`ConnectorTlsSupport`](ConnectorTlsSupport.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


