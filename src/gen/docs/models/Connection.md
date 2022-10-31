# Apideck.Connection

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`service_id` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`tag_line` | **string** |  | [optional] 
`unified_api` | **string** |  | [optional] 
`state` | [**ConnectionState**](ConnectionState.md) |  | [optional] 
`auth_type` | [**AuthType**](AuthType.md) |  | [optional] 
`oauth_grant_type` | [**OAuthGrantType**](OAuthGrantType.md) |  | [optional] 
`status` | **string** |  | [optional] 
`enabled` | **boolean** | Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API. | [optional] 
`website` | **string** |  | [optional] 
`icon` | **string** |  | [optional] 
`logo` | **string** |  | [optional] 
`authorize_url` | **string** | The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector\'s UI. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector\'s UI. | [optional] 
`revoke_url` | **string** | The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add &#x60;redirect_uri&#x60; as a query parameter. Your users will be redirected to this &#x60;redirect_uri&#x60; after they granted access to your app in the connector\'s UI. | [optional] 
`settings` | **{ [key: string]: object; }** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
`metadata` | **{ [key: string]: object; }** | Attach your own consumer specific metadata | [optional] 
`form_fields` | [**Array&lt;FormField&gt;**](FormField.md) |  | [optional] 
`configuration` | [**Array&lt;ConnectionConfiguration&gt;**](ConnectionConfiguration.md) |  | [optional] 
`configurable_resources` | **Array&lt;string&gt;** |  | [optional] 
`resource_schema_support` | **Array&lt;string&gt;** |  | [optional] 
`resource_settings_support` | **Array&lt;string&gt;** |  | [optional] 
`settings_required_for_authorization` | **Array&lt;string&gt;** | List of settings that are required to be configured on integration before authorization can occur | [optional] 
`subscriptions` | [**Array&lt;WebhookSubscription&gt;**](WebhookSubscription.md) |  | [optional] 
`has_guide` | **boolean** | Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection). | [optional] 
`created_at` | **number** |  | [optional] 
`updated_at` | **number** |  | [optional] 





<a name="ConnectionStatus"></a>
## Enum: Connection.status


* `live` (value: `'live'`)

* `upcoming` (value: `'upcoming'`)

* `requested` (value: `'requested'`)




## Referenced Types:





* [`ConnectionState`](ConnectionState.md)
* [`AuthType`](AuthType.md)
* [`OAuthGrantType`](OAuthGrantType.md)









* [`FormField`](FormField.md)
* [`ConnectionConfiguration`](ConnectionConfiguration.md)




* [`WebhookSubscription`](WebhookSubscription.md)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


