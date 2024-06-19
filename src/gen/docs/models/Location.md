# Apideck.Location

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`name` | **string** | The name of the location | [optional] 
`business_name` | **string** | The business name of the location | [optional] 
`address` | [**Address**](Address.md) |  | [optional] 
`status` | **string** | Status of this location. | [optional] 
`merchant_id` | **string** |  | [optional] 
`currency` | [**Currency**](Currency.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="LocationStatus"></a>
## Enum: Location.status


* `active` (value: `'active'`)

* `inactive` (value: `'inactive'`)

* `other` (value: `'other'`)




## Referenced Types:



* [`Address`](Address.md)


* [`Currency`](Currency.md)





* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


