# Apideck.Folder

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`name` | **string** | The name of the folder | 
`parent_folders` | [**Array&lt;LinkedFolder&gt;**](LinkedFolder.md) | The parent folders of the file, starting from the root | 
`id` | **string** |  | [optional] 
`description` | **string** | Optional description of the folder | [optional] 
`path` | **string** | The full path of the folder (includes the folder name) | [optional] 
`size` | **number** | The size of the folder in bytes | [optional] 
`owner` | [**Owner**](Owner.md) |  | [optional] 
`parent_folders_complete` | **boolean** | Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder | [optional] 
`updated_by` | **string** |  | [optional] 
`created_by` | **string** |  | [optional] 
`updated_at` | **Date** |  | [optional] 
`created_at` | **Date** |  | [optional] 





## Referenced Types:

* [`LinkedFolder`](LinkedFolder.md)




* [`Owner`](Owner.md)






---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


