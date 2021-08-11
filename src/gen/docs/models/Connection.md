# Apideck.Connection

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`serviceId` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`tagLine` | **string** |  | [optional] 
`unifiedApi` | **string** |  | [optional] 
`website` | **string** |  | [optional] 
`icon` | **string** |  | [optional] 
`logo` | **string** |  | [optional] 
`settings` | **object** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
`metadata` | [**ConnectionMetadata**](ConnectionMetadata.md) |  | [optional] 
`authType` | [**AuthType**](AuthType.md) |  | [optional] 
`status` | **string** |  | [optional] 
`formFields` | [**Array&lt;FormField&gt;**](FormField.md) |  | [optional] 
`_configuration` | [**Array&lt;ConnectionConfiguration&gt;**](ConnectionConfiguration.md) |  | [optional] 
`configurableResources` | **Array&lt;string&gt;** |  | [optional] 
`resourceSchemaSupport` | **Array&lt;string&gt;** |  | [optional] 
`resourceSettingsSupport` | **Array&lt;string&gt;** |  | [optional] 
`settingsRequiredForAuthorization` | **Array&lt;string&gt;** |  | [optional] 
`authorizeUrl` | **string** |  | [optional] 
`revokeUrl` | **string** |  | [optional] 
`enabled` | **boolean** |  | [optional] 
`createdAt` | **number** |  | [optional] 
`updatedAt` | **number** |  | [optional] 
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


