# Apideck.Application

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`applicant_id` | **string** |  | 
`job_id` | **string** |  | 
`id` | **string** | A unique identifier for an object. | [optional] 
`status` | **string** |  | [optional] 
`stage` | [**ApplicationStage**](ApplicationStage.md) |  | [optional] 
`custom_mappings` | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
`updated_by` | **string** | The user who last updated the object. | [optional] 
`created_by` | **string** | The user who created the object. | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="ApplicationStatus"></a>
## Enum: Application.status


* `open` (value: `'open'`)

* `rejected` (value: `'rejected'`)

* `hired` (value: `'hired'`)

* `converted` (value: `'converted'`)

* `other` (value: `'other'`)




## Referenced Types:




* [`ApplicationStage`](ApplicationStage.md)





* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


