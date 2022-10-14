# Apideck.ConnectorResource

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | ID of the resource, typically a lowercased version of name. | [optional] 
`name` | **string** | Name of the resource (plural) | [optional] 
`downstream_id` | **string** | ID of the resource in the Connector\'s API (downstream) | [optional] 
`downstream_name` | **string** | Name of the resource in the Connector\'s API (downstream) | [optional] 
`status` | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
`pagination_supported` | **boolean** | Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. | [optional] 
`pagination` | [**PaginationCoverage**](PaginationCoverage.md) |  | [optional] 
`supported_operations` | **Array&lt;string&gt;** | List of supported operations on the resource. | [optional] 
`supported_filters` | **Array&lt;string&gt;** | Supported filters on the list endpoint of the resource. | [optional] 
`supported_sort_by` | **Array&lt;string&gt;** | Supported sorting properties on the list endpoint of the resource. | [optional] 
`supported_fields` | [**Array&lt;SupportedProperty&gt;**](SupportedProperty.md) | Supported fields on the detail endpoint. | [optional] 
`supported_list_fields` | [**Array&lt;SupportedProperty&gt;**](SupportedProperty.md) | Supported fields on the list endpoint. | [optional] 





## Referenced Types:




* [`ResourceStatus`](ResourceStatus.md)

* [`PaginationCoverage`](PaginationCoverage.md)



* [`SupportedProperty`](SupportedProperty.md)
* [`SupportedProperty`](SupportedProperty.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


