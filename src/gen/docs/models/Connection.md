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
`website` | **string** |  | [optional] 
`icon` | **string** |  | [optional] 
`logo` | **string** |  | [optional] 
`settings` | **object** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
`metadata` | [**ConnectionMetadata**](ConnectionMetadata.md) |  | [optional] 
`auth_type` | [**AuthType**](AuthType.md) |  | [optional] 
`status` | **string** |  | [optional] 
`form_fields` | [**Array&lt;FormField&gt;**](FormField.md) |  | [optional] 
`configuration` | [**Array&lt;ConnectionConfiguration&gt;**](ConnectionConfiguration.md) |  | [optional] 
`configurable_resources` | **Array&lt;string&gt;** |  | [optional] 
`resource_schema_support` | **Array&lt;string&gt;** |  | [optional] 
`resource_settings_support` | **Array&lt;string&gt;** |  | [optional] 
`settings_required_for_authorization` | **Array&lt;string&gt;** |  | [optional] 
`authorize_url` | **string** |  | [optional] 
`revoke_url` | **string** |  | [optional] 
`enabled` | **boolean** |  | [optional] 
`created_at` | **number** |  | [optional] 
`updated_at` | **number** |  | [optional] 
`state` | [**ConnectionState**](ConnectionState.md) |  | [optional] 





<a name="ConnectionStatus"></a>
## Enum: Connection.status


* `live` (value: `'live'`)

* `upcoming` (value: `'upcoming'`)

* `requested` (value: `'requested'`)




## Referenced Types:









* [`ConnectionMetadata`](ConnectionMetadata.md)
* [`AuthType`](AuthType.md)

* [`FormField`](FormField.md)
* [`ConnectionConfiguration`](ConnectionConfiguration.md)









* [`ConnectionState`](ConnectionState.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


