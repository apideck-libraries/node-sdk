# Apideck.ModifierGroup

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | A unique identifier for an object. | [optional] 
`name` | **string** |  | [optional] 
`alternate_name` | **string** |  | [optional] 
`minimum_required` | **number** |  | [optional] 
`maximum_allowed` | **number** |  | [optional] 
`selection_type` | **string** |  | [optional] 
`present_at_all_locations` | **boolean** |  | [optional] 
`modifiers` | **Array&lt;object&gt;** |  | [optional] 
`deleted` | **boolean** | Flag to indicate if the object is deleted. | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`row_version` | **string** | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 





<a name="ModifierGroupSelectionType"></a>
## Enum: ModifierGroup.selection_type


* `single` (value: `'single'`)

* `multiple` (value: `'multiple'`)




---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


