# Apideck.ConsumerConnection

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | [optional] 
`name` | **string** |  | [optional] 
`icon` | **string** |  | [optional] 
`logo` | **string** |  | [optional] 
`website` | **string** |  | [optional] 
`tag_line` | **string** |  | [optional] 
`service_id` | **string** |  | [optional] 
`unified_api` | **string** |  | [optional] 
`auth_type` | [**AuthType**](AuthType.md) |  | [optional] 
`enabled` | **boolean** |  | [optional] 
`settings` | **object** | Connection settings. Values will persist to &#x60;form_fields&#x60; with corresponding id | [optional] 
`metadata` | **{ [key: string]: object; }** | Attach your own consumer specific metadata | [optional] 
`created_at` | **string** |  | [optional] 
`updated_at` | **string** |  | [optional] 
`state` | **string** |  | [optional] 





<a name="ConsumerConnectionState"></a>
## Enum: ConsumerConnection.state


* `available` (value: `'available'`)

* `callable` (value: `'callable'`)

* `added` (value: `'added'`)

* `configured` (value: `'configured'`)

* `authorized` (value: `'authorized'`)




## Referenced Types:








* [`AuthType`](AuthType.md)







---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


