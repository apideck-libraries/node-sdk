# Apideck.SharedLink

### Description

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
`target_id` | **string** | The ID of the file or folder to link. | 
`url` | **string** | The URL that can be used to view the file. | [optional] 
`download_url` | **string** | The URL that can be used to download the file. | [optional] 
`target` | [**SharedLinkTarget**](SharedLinkTarget.md) |  | [optional] 
`scope` | **string** | The scope of the shared link. | [optional] 
`password_protected` | **boolean** | Indicated if the shared link is password protected. | [optional] 
`password` | **string** | Optional password for the shared link. | [optional] 
`expires_at` | **Date** |  | [optional] 
`updated_at` | **Date** | The date and time when the object was last updated. | [optional] 
`created_at` | **Date** | The date and time when the object was created. | [optional] 
`pass_through` | [**PassThroughBody**](PassThroughBody.md) |  | [optional] 





<a name="SharedLinkScope"></a>
## Enum: SharedLink.scope


* `public` (value: `'public'`)

* `company` (value: `'company'`)




## Referenced Types:



* [`SharedLinkTarget`](SharedLinkTarget.md)






* [`PassThroughBody`](PassThroughBody.md)

---

[[Back to top]](#) [[Back to API list]](../../../../README.md#documentation-for-api-endpoints) [[Back to README]](../../../../README.md)


