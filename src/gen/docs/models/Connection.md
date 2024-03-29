# Apideck.Connection

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | The unique identifier of the connection. | [optional] 
`service_id` | **string** | The ID of the service this connection belongs to. | [optional] 
`name` | **string** | The name of the connection | [optional] 
`tag_line` | **string** |  | [optional] 
`unified_api` | **string** | The unified API category where the connection belongs to. | [optional] 
`state` | [**ConnectionState**](ConnectionState.md) |  | [optional] 
`integration_state` | [**IntegrationState**](IntegrationState.md) |  | [optional] 
`auth_type` | [**AuthType**](AuthType.md) |  | [optional] 
`oauth_grant_type` | [**OAuthGrantType**](OAuthGrantType.md) |  | [optional] 
`status` | **string** | Status of the connection. | [optional] 
`enabled` | **boolean** | Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. | [optional] 
`website` | **string** | The website URL of the connection | [optional] 
`icon` | **string** | A visual icon of the connection, that will be shown in the Vault | [optional] 
`logo` | **string** | The logo of the connection, that will be shown in the Vault | [optional] 
`authorize_url` | **string** | The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector\'s UI. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter to the &#x60;authorize_url&#x60;. Be sure to URL encode the &#x60;redirect_uri&#x60; part. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector\'s UI. | [optional] 
`revoke_url` | **string** | The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector\'s UI. | [optional] 
`settings` | **{ [key: string]: object; }** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
`metadata` | **{ [key: string]: object; }** | Attach your own consumer specific metadata | [optional] 
`form_fields` | [**Array&lt;FormField&gt;**](FormField.md) | The settings that are wanted to create a connection. | [optional] 
`configuration` | [**Array&lt;ConnectionConfiguration&gt;**](ConnectionConfiguration.md) |  | [optional] 
`configurable_resources` | **Array&lt;string&gt;** |  | [optional] 
`resource_schema_support` | **Array&lt;string&gt;** |  | [optional] 
`resource_settings_support` | **Array&lt;string&gt;** |  | [optional] 
`validation_support` | **boolean** |  | [optional] 
`schema_support` | **boolean** |  | [optional] 
`settings_required_for_authorization` | **Array&lt;string&gt;** | List of settings that are required to be configured on integration before authorization can occur | [optional] 
`subscriptions` | [**Array&lt;WebhookSubscription&gt;**](WebhookSubscription.md) |  | [optional] 
`has_guide` | **boolean** | Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection). | [optional] 
`created_at` | **number** |  | [optional] 
`custom_mappings` | [**Array&lt;CustomMapping&gt;**](CustomMapping.md) | List of custom mappings configured for this connection | [optional] 
`updated_at` | **number** |  | [optional] 





<a name="ConnectionStatus"></a>
## Enum: Connection.status


* `live` (value: `'live'`)

* `upcoming` (value: `'upcoming'`)

* `requested` (value: `'requested'`)




## Referenced Types:





* [`ConnectionState`](ConnectionState.md)
* [`IntegrationState`](IntegrationState.md)
* [`AuthType`](AuthType.md)
* [`OAuthGrantType`](OAuthGrantType.md)









* [`FormField`](FormField.md)
* [`ConnectionConfiguration`](ConnectionConfiguration.md)






* [`WebhookSubscription`](WebhookSubscription.md)


* [`CustomMapping`](CustomMapping.md)


---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


