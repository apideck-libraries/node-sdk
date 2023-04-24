# Apideck.FormField

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** | The unique identifier of the form field. | [optional] 
`label` | **string** | The label of the field | [optional] 
`placeholder` | **string** | The placeholder for the form field | [optional] 
`description` | **string** | The description of the form field | [optional] 
`type` | **string** |  | [optional] 
`required` | **boolean** | Indicates if the form field is required, which means it must be filled in before the form can be submitted | [optional] 
`custom_field` | **boolean** |  | [optional] 
`allow_custom_values` | **boolean** | Only applicable to select fields. Allow the user to add a custom value though the option select if the desired value is not in the option select list. | [optional] 
`disabled` | **boolean** | Indicates if the form field is displayed in a “read-only” mode. | [optional] 
`hidden` | **boolean** | Indicates if the form field is not displayed but the value that is being stored on the connection. | [optional] 
`sensitive` | **boolean** | Indicates if the form field contains sensitive data, which will display the value as a masked input. | [optional] 
`prefix` | **string** | Prefix to display in front of the form field. | [optional] 
`suffix` | **string** | Suffix to display next to the form field. | [optional] 
`options` | [**Array&lt;FormFieldOption&gt;**](FormFieldOption.md) |  | [optional] 





<a name="FormFieldType"></a>
## Enum: FormField.type


* `text` (value: `'text'`)

* `checkbox` (value: `'checkbox'`)

* `tel` (value: `'tel'`)

* `email` (value: `'email'`)

* `url` (value: `'url'`)

* `textarea` (value: `'textarea'`)

* `select` (value: `'select'`)

* `filtered_select` (value: `'filtered-select'`)

* `multi_select` (value: `'multi-select'`)

* `datetime` (value: `'datetime'`)

* `date` (value: `'date'`)

* `time` (value: `'time'`)

* `number` (value: `'number'`)




## Referenced Types:













* [`FormFieldOption`](FormFieldOption.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


