# Apideck.Api

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID of the API. | [optional] 
`type` | **string** | Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API. | [optional] 
`name` | **string** | Name of the API. | [optional] 
`status` | [**ApiStatus**](ApiStatus.md) |  | [optional] 
`spec_url` | **string** | Link to the latest OpenAPI specification of the API. | [optional] 
`api_reference_url` | **string** | Link to the API reference of the API. | [optional] 
`categories` | **Array&lt;string&gt;** | List of categories the API belongs to. | [optional] 
`resources` | [**Array&lt;ApiResources&gt;**](ApiResources.md) | List of resources supported in this API. | [optional] 





<a name="ApiType"></a>
## Enum: Api.type


* `platform` (value: `'platform'`)

* `unified` (value: `'unified'`)




## Referenced Types:



* [`ApiStatus`](ApiStatus.md)



* [`ApiResources`](ApiResources.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


