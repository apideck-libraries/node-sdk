# Apideck.ModelFile

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`id` | **string** |  | 
`name` | **string** | The name of the file | 
`type` | **string** | The type of resource. Could be file, folder or url | 
`description` | **string** | Optional description of the file | [optional] 
`path` | **string** | The full path of the file or folder (includes the file name) | [optional] 
`mime_type` | **string** | The MIME type of the file. | [optional] 
`downloadable` | **boolean** | Whether the current user can download this file | [optional] 
`size` | **number** | The size of the file in bytes | [optional] 
`owner` | [**Owner**](Owner.md) |  | [optional] 
`parent_folders` | [**Array&lt;LinkedFolder&gt;**](LinkedFolder.md) | The parent folders of the file, starting from the root | [optional] 
`parent_folders_complete` | **boolean** | Whether the list of parent folder is complete. Some connectors only return the direct parent of a file | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





<a name="ModelFileType"></a>
## Enum: ModelFile.type


* `file` (value: `'file'`)

* `folder` (value: `'folder'`)

* `url` (value: `'url'`)




## Referenced Types:








* [`Owner`](Owner.md)
* [`LinkedFolder`](LinkedFolder.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


